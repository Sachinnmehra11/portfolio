import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Project } from "@/content/projects";
import { MockupFrame } from "./MockupFrame";
import { ProjectMockup } from "@/components/projects/ProjectMockup";
import { StatusBadge, TechTag } from "@/components/content";
import { cn } from "@/lib/cn";

/** Large split case-study card (media alternates side by index). */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const mediaRight = index % 2 === 0;
  const href = `/projects/${project.slug}`;
  return (
    <article className="group relative grid grid-cols-1 gap-6 rounded-xl border border-hairline bg-canvas p-6 transition-colors duration-[180ms] hover:border-stone sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-10">
      {/* Media */}
      <div className={cn("order-1", mediaRight ? "lg:order-2" : "lg:order-1")}>
        <MockupFrame label={`${project.slug}.app`}>
          <ProjectMockup kind={project.diagram} />
        </MockupFrame>
      </div>

      {/* Copy */}
      <div className={cn("order-2 flex flex-col gap-4", mediaRight ? "lg:order-1" : "lg:order-2")}>
        <StatusBadge>{project.status}</StatusBadge>
        <div className="flex flex-col gap-2">
          <h3 className="t-h4 text-ink">
            <Link href={href} className="focus-visible:outline-none">
              <span className="absolute inset-0" aria-hidden />
              {project.name}
            </Link>
          </h3>
          <p className="t-body text-slate">{project.summary}</p>
        </div>

        <ul className="flex flex-col gap-1.5">
          {project.verifiedCapabilities.map((cap) => (
            <li key={cap} className="flex items-start gap-2 t-body-sm text-charcoal">
              <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-green-deep" />
              {cap}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>

        <span className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink">
          View case study
          <ArrowRight
            aria-hidden
            className="size-4 text-brand-green-deep transition-transform duration-[180ms] group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </article>
  );
}

export default ProjectCard;
