import { cn } from "@/lib/cn";

/**
 * Original abstract "software architecture" artwork: connected services,
 * API routes, and a message queue. Purely decorative (aria-hidden).
 * Line-draw animation is CSS-only and disabled under prefers-reduced-motion
 * (see globals — reduced-motion neutralizes all animations).
 */
export function HeroArtwork({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)} aria-hidden>
      <svg
        viewBox="0 0 520 420"
        fill="none"
        role="presentation"
        className="h-auto w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.10)]"
      >
        <defs>
          <linearGradient id="panelG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#f5f7f6" />
          </linearGradient>
          <linearGradient id="mintG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#00d4a4" />
            <stop offset="1" stopColor="#3772cf" />
          </linearGradient>
          <style>{`
            .flow { stroke-dasharray: 6 8; animation: dash 4s linear infinite; }
            .draw { stroke-dasharray: 240; stroke-dashoffset: 240; animation: draw 1.4s var(--ease-out, ease-out) forwards; }
            @keyframes dash { to { stroke-dashoffset: -140; } }
            @keyframes draw { to { stroke-dashoffset: 0; } }
            @media (prefers-reduced-motion: reduce) {
              .flow, .draw { animation: none; stroke-dashoffset: 0; stroke-dasharray: none; }
            }
          `}</style>
        </defs>

        {/* base card */}
        <rect x="8" y="8" width="504" height="404" rx="20" fill="url(#panelG)" stroke="#e6e8e7" />
        <rect x="8" y="8" width="504" height="52" rx="20" fill="#111816" />
        <circle cx="36" cy="34" r="5" fill="#f47c55" />
        <circle cx="54" cy="34" r="5" fill="#e7a43a" />
        <circle cx="72" cy="34" r="5" fill="#00d4a4" />
        <text x="248" y="39" fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontSize="13">
          architecture.svc
        </text>

        {/* connective routes */}
        <path className="draw" d="M120 150 C 200 150, 220 210, 300 210" stroke="url(#mintG)" strokeWidth="2.5" />
        <path className="draw" d="M120 260 C 200 260, 220 210, 300 210" stroke="url(#mintG)" strokeWidth="2.5" />
        <path className="flow" d="M330 210 C 380 210, 400 130, 452 130" stroke="#00d4a4" strokeWidth="2.5" />
        <path className="flow" d="M330 210 C 380 210, 400 300, 452 300" stroke="#3772cf" strokeWidth="2.5" />

        {/* client / api nodes */}
        <g>
          <rect x="52" y="120" width="76" height="60" rx="12" fill="#ffffff" stroke="#e6e8e7" />
          <text x="90" y="146" textAnchor="middle" fill="#5e6966" fontFamily="monospace" fontSize="11">Angular</text>
          <text x="90" y="162" textAnchor="middle" fill="#9aa39f" fontFamily="monospace" fontSize="10">client</text>

          <rect x="52" y="230" width="76" height="60" rx="12" fill="#ffffff" stroke="#e6e8e7" />
          <text x="90" y="256" textAnchor="middle" fill="#5e6966" fontFamily="monospace" fontSize="11">REST</text>
          <text x="90" y="272" textAnchor="middle" fill="#9aa39f" fontFamily="monospace" fontSize="10">consumer</text>
        </g>

        {/* API gateway hub */}
        <rect x="270" y="176" width="70" height="70" rx="16" fill="#0b0b0c" />
        <text x="305" y="206" textAnchor="middle" fill="#ffffff" fontFamily="monospace" fontSize="11">API</text>
        <text x="305" y="222" textAnchor="middle" fill="#6ed8b9" fontFamily="monospace" fontSize="10">.NET</text>

        {/* service + queue */}
        <rect x="452" y="102" width="0" height="0" />
        <g>
          <rect x="410" y="104" width="84" height="54" rx="12" fill="#ffffff" stroke="#e6e8e7" />
          <text x="452" y="128" textAnchor="middle" fill="#5e6966" fontFamily="monospace" fontSize="11">service A</text>
          <text x="452" y="144" textAnchor="middle" fill="#9aa39f" fontFamily="monospace" fontSize="10">microservice</text>

          <rect x="410" y="274" width="84" height="54" rx="12" fill="#ffffff" stroke="#e6e8e7" />
          <text x="452" y="298" textAnchor="middle" fill="#5e6966" fontFamily="monospace" fontSize="11">service B</text>
          <text x="452" y="314" textAnchor="middle" fill="#9aa39f" fontFamily="monospace" fontSize="10">microservice</text>
        </g>

        {/* message queue band */}
        <g>
          <rect x="196" y="330" width="220" height="46" rx="12" fill="#e9fbf6" stroke="#00d4a4" strokeWidth="1.2" />
          <text x="214" y="358" fill="#00b88f" fontFamily="monospace" fontSize="12">RabbitMQ · events</text>
          <circle className="flow" cx="330" cy="353" r="4" fill="#00b88f" />
          <circle className="flow" cx="356" cy="353" r="4" fill="#00b88f" />
          <circle className="flow" cx="382" cy="353" r="4" fill="#00b88f" />
        </g>
        <path className="flow" d="M305 246 L 305 330" stroke="#00d4a4" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default HeroArtwork;
