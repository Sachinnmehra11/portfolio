"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";

/**
 * Custom software-architecture scene (Three.js + React Three Fiber).
 * A dark glassy central sphere surrounded by six mint "service" nodes with
 * thin connecting lines. Slow ambient rotation + subtle pointer parallax.
 * One WebGL canvas, simple geometry, capped DPR, frameloop paused when the
 * scene is inactive (out of viewport) or reduced motion is requested.
 *
 * Colors are restrained: black / deep-teal / dark-brown materials with
 * mint-green highlights. No purple, rainbow, or neon.
 */

type NodeDef = { label: string; angle: number; tilt: number; color: string };

// Six nodes evenly spaced on a tilted ring — abstractly the tech stack.
const NODES: NodeDef[] = [
  { label: ".NET", angle: 0, tilt: 0.18, color: "#38e0b8" },
  { label: "Angular", angle: 60, tilt: -0.12, color: "#2fd6ad" },
  { label: "REST APIs", angle: 120, tilt: 0.1, color: "#4ae7c4" },
  { label: "RabbitMQ", angle: 180, tilt: -0.16, color: "#33d9af" },
  { label: "SQL Server", angle: 240, tilt: 0.14, color: "#45e3bf" },
  { label: "Docker", angle: 300, tilt: -0.1, color: "#2ccfa6" },
];

const RING_RADIUS = 2.55;

function nodePosition(node: NodeDef): [number, number, number] {
  const rad = (node.angle * Math.PI) / 180;
  return [
    Math.cos(rad) * RING_RADIUS,
    node.tilt * RING_RADIUS,
    Math.sin(rad) * RING_RADIUS,
  ];
}

/** Neutral studio environment for glassy reflections (no external assets). */
function SceneEnvironment() {
  const { gl, scene } = useThree();
  const applied = useRef(false);

  if (!applied.current) {
    applied.current = true;
    const pmrem = new THREE.PMREMGenerator(gl);
    const envScene = new THREE.Scene();
    // A simple gradient-lit box acts as a cheap reflection source.
    const geo = new THREE.BoxGeometry(15, 15, 15);
    const mat = new THREE.MeshStandardMaterial({
      side: THREE.BackSide,
      color: "#0c1a17",
    });
    envScene.add(new THREE.Mesh(geo, mat));
    const light = new THREE.PointLight("#3fe0bd", 40, 40);
    light.position.set(4, 5, 3);
    envScene.add(light);
    const target = pmrem.fromScene(envScene, 0.5);
    scene.environment = target.texture;
    geo.dispose();
    mat.dispose();
    pmrem.dispose();
  }
  return null;
}

function CentralSphere() {
  return (
    <mesh castShadow>
      <icosahedronGeometry args={[1.35, 4]} />
      <meshStandardMaterial
        color="#0a201c"
        metalness={0.85}
        roughness={0.22}
        emissive="#04120f"
        emissiveIntensity={0.6}
        envMapIntensity={0.8}
      />
    </mesh>
  );
}

function ServiceNode({ node, index }: { node: NodeDef; index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const mat = useRef<THREE.MeshStandardMaterial>(null);
  const base = useMemo(() => nodePosition(node), [node]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      // gentle bob so nodes feel alive without distracting
      ref.current.position.y = base[1] + Math.sin(t * 0.7 + index) * 0.09;
    }
    if (mat.current) {
      // soft glow pulse, offset per node
      mat.current.emissiveIntensity = 1.5 + Math.sin(t * 1.1 + index * 1.3) * 0.5;
    }
  });

  return (
    <mesh ref={ref} position={base}>
      <sphereGeometry args={[0.19, 24, 24]} />
      <meshStandardMaterial
        ref={mat}
        color={node.color}
        emissive={node.color}
        emissiveIntensity={1.5}
        metalness={0.2}
        roughness={0.4}
      />
    </mesh>
  );
}

function Connections() {
  const positions = useMemo(() => {
    const pts: number[] = [];
    for (const node of NODES) {
      const [x, y, z] = nodePosition(node);
      pts.push(0, 0, 0, x, y, z);
    }
    return new Float32Array(pts);
  }, []);

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#1f4a42" transparent opacity={0.55} />
    </lineSegments>
  );
}

function Rig({ animate }: { animate: boolean }) {
  const outer = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (spin.current && animate) {
      spin.current.rotation.y += delta * 0.14; // slow ambient rotation
    }
    if (outer.current) {
      // subtle pointer parallax, eased
      const targetX = -state.pointer.y * 0.14;
      const targetY = state.pointer.x * 0.14;
      outer.current.rotation.x += (targetX - outer.current.rotation.x) * 0.05;
      outer.current.rotation.y += (targetY - outer.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={outer} position={[0, 0.7, 0]}>
      <group ref={spin} rotation={[0.15, 0, 0.08]}>
        <CentralSphere />
        <Connections />
        {NODES.map((node, i) => (
          <ServiceNode key={node.label} node={node} index={i} />
        ))}
      </group>
    </group>
  );
}

export default function HeroScene3D({ active }: { active: boolean }) {
  const reduce = useReducedMotion();
  const animate = active && !reduce;

  return (
    <Canvas
      aria-hidden
      dpr={[1, 1.25]}
      // Let R3F drop resolution automatically if the GPU falls behind.
      performance={{ min: 0.5 }}
      // "always" while in view (ambient rotation); "demand" when paused/reduced
      // motion still renders a correctly-sized static frame without a loop.
      frameloop={animate ? "always" : "demand"}
      // offsetSize measures via offsetWidth/Height — reliable for absolutely
      // positioned containers where the default bounds measurement can read 0.
      resize={{ offsetSize: true }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 7], fov: 42 }}
    >
      <SceneEnvironment />
      <ambientLight intensity={0.35} color="#1a2b28" />
      <directionalLight position={[2, 4, 3]} intensity={1.1} color="#3fe0bd" />
      <pointLight position={[-4, -2, 2]} intensity={18} color="#6b3f2a" distance={18} />
      <pointLight position={[3, 2, 4]} intensity={22} color="#2fd6ad" distance={20} />
      <Rig animate={animate} />
    </Canvas>
  );
}
