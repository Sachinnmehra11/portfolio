import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Container, Section } from "@/components/foundations";
import { Button } from "@/components/buttons/Button";
import { CopyButton } from "@/components/buttons/CopyButton";
import { SectionHeading, Prose } from "@/components/content";
import { Reveal } from "@/components/interactive/Reveal";
import { Hero } from "@/components/hero/Hero";
import { HeroArtwork } from "@/components/projects/HeroArtwork";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Timeline } from "@/components/cards/Timeline";
import { SkillGroup, PrincipleCard, EducationCard } from "@/components/cards/InfoCards";
import { ContactForm } from "@/components/interactive/ContactForm";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { skillGroups, expertise } from "@/content/skills";
import { education, principles } from "@/content/education";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── Expertise strip ──────────────────────────────────────────── */}
      <div className="border-y border-hairline bg-surface-soft">
        <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5">
          {expertise.map((item) => (
            <span key={item} className="t-mono text-[13px] text-slate">
              {item}
            </span>
          ))}
        </Container>
      </div>

      {/* ── About ────────────────────────────────────────────────────── */}
      <Section id="about" spacing="lg">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-8">
            <Reveal>
              <SectionHeading eyebrow="About" title="Enterprise software, built to last." />
            </Reveal>
            <Reveal delay={100} className="hidden lg:block">
              <HeroArtwork />
            </Reveal>
          </div>
          <Reveal delay={80}>
            <Prose className="max-w-none">
              {profile.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </Prose>
          </Reveal>
        </Container>
      </Section>

      {/* ── Featured projects ────────────────────────────────────────── */}
      <Section id="work" spacing="lg" className="bg-surface-soft">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Featured projects"
              lead="Two enterprise case studies — full-stack delivery across Angular, ASP.NET Core, and SQL Server. Presented at a high level to respect confidentiality."
            />
          </Reveal>
          <div className="flex flex-col gap-6">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Experience ───────────────────────────────────────────────── */}
      <Section id="experience" spacing="lg">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow="Experience"
              title="A focused engineering track record"
              lead="Delivering and modernizing enterprise applications end to end."
            />
          </Reveal>
          <Reveal delay={80}>
            <Timeline roles={experience} />
          </Reveal>
        </Container>
      </Section>

      {/* ── Skills ───────────────────────────────────────────────────── */}
      <Section id="skills" spacing="lg" className="bg-surface-soft">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Technical skills, grouped by strength"
              lead="Strongest in .NET backend and Angular, with messaging, data, and delivery across the stack."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.id} delay={i * 60}>
                <SkillGroup group={group} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Engineering approach ─────────────────────────────────────── */}
      <Section spacing="lg">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow="Engineering approach"
              title="Principles that keep systems reliable"
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 60}>
                <PrincipleCard principle={principle} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Education ─────────────────────────────────────────────────── */}
      <Section spacing="md" className="bg-surface-soft">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-[0.5fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Education" title="Foundations" />
          </Reveal>
          <Reveal delay={80}>
            <EducationCard education={education} />
          </Reveal>
        </Container>
      </Section>

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <Section id="contact" spacing="lg">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <SectionHeading eyebrow="Contact" title={profile.contactHeadline} lead={profile.contactSupporting} />
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <Button href={`mailto:${profile.email}`} size="md">
                  <Mail aria-hidden className="size-4" />
                  Email me
                </Button>
                <CopyButton value={profile.email} label="Copy email" copiedLabel="Email copied" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button href={profile.links.linkedin} external variant="secondary" size="md">
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                </Button>
                <Button href={profile.links.github} external variant="secondary" size="md">
                  <GithubIcon className="size-4" />
                  GitHub
                </Button>
              </div>
              <p className="t-mono text-[13px] text-steel">{profile.email}</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="rounded-xl border border-hairline bg-canvas p-6 sm:p-8">
            <ContactForm />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
