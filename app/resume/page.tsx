import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { buildMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/foundations";
import { PrintButton } from "@/components/interactive/PrintButton";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import { education } from "@/content/education";
import { projects } from "@/content/projects";

export const metadata: Metadata = buildMetadata({
  title: "Résumé",
  description: `${profile.name} — ${profile.title}. Résumé and experience overview.`,
  path: "/resume",
});

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="t-micro-upper mb-3 border-b border-hairline pb-2 text-steel">{children}</h2>
  );
}

export default function ResumePage() {
  return (
    <Section spacing="md">
      <Container className="max-w-3xl print-full">
        {/* Toolbar (hidden in print) */}
        <div className="no-print mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 t-body-sm text-slate hover:text-ink focus-visible:outline-none"
          >
            <ArrowLeft aria-hidden className="size-4" />
            Back to portfolio
          </Link>
          <div className="flex items-center gap-2">
            <a
              href={profile.config.resumePdfPath}
              download
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-canvas transition-colors hover:bg-charcoal focus-visible:outline-none"
            >
              <Download aria-hidden className="size-4" />
              Download PDF
            </a>
            <PrintButton label="Print" />
          </div>
        </div>

        <article className="flex flex-col gap-8">
          {/* Header */}
          <header className="flex flex-col gap-3">
            <h1 className="t-h1 text-ink">{profile.name}</h1>
            <p className="t-subtitle text-charcoal">
              {profile.title} · {profile.experienceYears} years experience
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 t-body-sm text-slate">
              <span className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden className="size-4" /> {profile.location}
              </span>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-ink">
                <Mail aria-hidden className="size-4" /> {profile.email}
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 hover:text-ink">
                <LinkedinIcon className="size-4" /> LinkedIn
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 hover:text-ink">
                <GithubIcon className="size-4" /> GitHub
              </a>
              {profile.config.showPhone && <span>{profile.phone}</span>}
            </div>
          </header>

          {/* Summary */}
          <section>
            <Rule>Summary</Rule>
            <p className="t-body text-charcoal">{profile.positioning}</p>
          </section>

          {/* Experience */}
          <section>
            <Rule>Experience</Rule>
            <div className="flex flex-col gap-5">
              {experience.map((role) => (
                <div key={`${role.company}-${role.period}`} className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="t-h5 text-ink">
                      {role.role} · {role.company}
                    </h3>
                    <span className="t-mono text-[13px] text-steel">{role.period}</span>
                  </div>
                  <ul className="flex list-disc flex-col gap-1 pl-5 t-body-sm text-charcoal marker:text-brand-green">
                    {role.themes.map((t) => (
                      <li key={t.title}>
                        <span className="font-medium text-ink">{t.title}.</span> {t.detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <Rule>Selected projects</Rule>
            <div className="flex flex-col gap-3">
              {projects.map((p) => (
                <div key={p.slug} className="flex flex-col gap-0.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="t-body-sm font-semibold text-ink">{p.name}</h3>
                    <span className="t-mono text-[12px] text-steel">{p.stack.join(" · ")}</span>
                  </div>
                  <p className="t-body-sm text-charcoal">{p.summary}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <Rule>Technical skills</Rule>
            <dl className="flex flex-col gap-2">
              {skillGroups.map((g) => (
                <div key={g.id} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                  <dt className="w-48 shrink-0 t-body-sm font-semibold text-ink">{g.title}</dt>
                  <dd className="t-body-sm text-charcoal">{g.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Education */}
          <section>
            <Rule>Education</Rule>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="t-body-sm font-semibold text-ink">{education.degree}</h3>
              <span className="t-body-sm text-slate">{education.institution}, {education.location}</span>
            </div>
          </section>
        </article>
      </Container>
    </Section>
  );
}
