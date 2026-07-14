import { Check, Info } from "lucide-react";
import { Container, Section } from "@/components/foundations";
import { Button } from "@/components/buttons/Button";
import { StatusBadge, TechTag, MetadataList } from "@/components/content";
import { Breadcrumbs, CaseStudySection, PreviousNextProject } from "@/components/content/CaseStudyParts";
import { TableOfContents } from "@/components/interactive/TableOfContents";
import { MockupFrame } from "@/components/cards/MockupFrame";
import { ProjectMockup } from "@/components/projects/ProjectMockup";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { Reveal } from "@/components/interactive/Reveal";
import { projects, confidentialityNote, type Project } from "@/content/projects";

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "responsibilities", label: "Responsibilities" },
  { id: "approach", label: "Technical approach" },
  { id: "architecture", label: "Architecture" },
  { id: "capabilities", label: "Key capabilities" },
  { id: "decisions", label: "Engineering decisions" },
  { id: "demonstrates", label: "What it demonstrates" },
];

export function CaseStudyView({ project }: { project: Project }) {
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  return (
    <>
      {/* Project hero */}
      <section className="relative overflow-hidden border-b border-hairline">
        <div aria-hidden className="hero-atmosphere absolute inset-0 -z-10 opacity-70" />
        <Container className="flex flex-col gap-8 py-[clamp(48px,8vw,88px)]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Work", href: "/#work" },
              { label: project.name },
            ]}
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-5">
              <StatusBadge>{project.status}</StatusBadge>
              <h1 className="t-display-lg text-balance text-ink">{project.name}</h1>
              <p className="reading-measure t-subtitle text-charcoal">{project.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </div>
            <Reveal delay={120}>
              <MockupFrame label={`${project.slug}.app`} elevated>
                <ProjectMockup kind={project.diagram} />
              </MockupFrame>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Body: metadata rail + content + TOC */}
      <Section spacing="lg">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_200px]">
          {/* Left metadata rail */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex flex-col gap-6 rounded-xl border border-hairline bg-surface-soft p-5">
              <MetadataList
                items={[
                  { label: "Role", value: project.role },
                  { label: "Type", value: project.projectType },
                  { label: "Stack", value: project.stack.join(", ") },
                  { label: "Status", value: project.status },
                ]}
              />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex flex-col gap-12">
            <p className="flex items-start gap-2 rounded-lg border border-hairline bg-surface-soft p-4 t-body-sm text-slate">
              <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-blue" />
              {confidentialityNote}
            </p>

            <CaseStudySection id="overview" title={project.overview.heading}>
              {project.overview.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </CaseStudySection>

            <CaseStudySection id="responsibilities" title="Responsibilities">
              <ul className="flex flex-col gap-2">
                {project.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <Check aria-hidden className="mt-1 size-4 shrink-0 text-brand-green-deep" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </CaseStudySection>

            <CaseStudySection id="approach" title="Technical approach">
              <div className="flex flex-col gap-6">
                {project.technicalApproach.map((sec) => (
                  <div key={sec.heading} className="flex flex-col gap-2">
                    <h3 className="t-h5 text-ink">{sec.heading}</h3>
                    {sec.body.map((p, i) => (
                      <p key={i} className="text-charcoal">{p}</p>
                    ))}
                  </div>
                ))}
              </div>
            </CaseStudySection>

            {/* Architecture — wider breakout */}
            <section id="architecture" aria-labelledby="architecture-h" className="scroll-mt-24 border-t border-hairline pt-10">
              <h2 id="architecture-h" className="t-h3 mb-4 text-ink">Architecture</h2>
              <p className="reading-measure mb-6 t-body text-charcoal">
                A high-level view of how the client, services, and data layer fit together. Labels are illustrative and neutral.
              </p>
              <div className="not-prose">
                <ArchitectureDiagram kind={project.diagram} />
              </div>
            </section>

            <CaseStudySection id="capabilities" title="Key capabilities">
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {project.verifiedCapabilities.map((c) => (
                  <li key={c} className="flex items-start gap-2 rounded-lg border border-hairline bg-canvas p-3">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-green-deep" />
                    <span className="t-body-sm text-charcoal">{c}</span>
                  </li>
                ))}
              </ul>
            </CaseStudySection>

            <CaseStudySection id="decisions" title="Engineering decisions">
              <p className="text-slate">General engineering rationale for the technology choices.</p>
              <div className="flex flex-col gap-3">
                {project.engineeringDecisions.map((d) => (
                  <div key={d.tech} className="flex flex-col gap-1 rounded-lg border border-hairline bg-surface-soft p-4">
                    <TechTag tone="accent">{d.tech}</TechTag>
                    <p className="t-body-sm text-charcoal">{d.rationale}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection id="demonstrates" title="What this project demonstrates">
              <div className="flex flex-wrap gap-2">
                {project.demonstrates.map((d) => (
                  <span key={d} className="rounded-full border border-hairline bg-canvas px-3 py-1.5 t-body-sm text-charcoal">
                    {d}
                  </span>
                ))}
              </div>
            </CaseStudySection>

            <div className="flex flex-wrap gap-3 border-t border-hairline pt-8">
              <Button href="/#work" variant="secondary">Back to all work</Button>
              <Button href="/#contact">Get in touch</Button>
            </div>

            <PreviousNextProject
              prev={prev ? { name: prev.name, slug: prev.slug } : undefined}
              next={next ? { name: next.name, slug: next.slug } : undefined}
            />
          </div>

          {/* Right TOC (xl+) */}
          <aside className="hidden xl:sticky xl:top-24 xl:block xl:self-start">
            <TableOfContents items={TOC} />
          </aside>
        </Container>
      </Section>
    </>
  );
}

export default CaseStudyView;
