import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Container, Section } from "@/components/foundations";
import { Button } from "@/components/buttons/Button";
import { CopyButton } from "@/components/buttons/CopyButton";
import { SectionHeading, Prose } from "@/components/content";
import { HeroPortraitLarge } from "@/components/content/HeroPortrait";
import { Reveal } from "@/components/interactive/Reveal";
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
      <section aria-labelledby="hero-h" className="relative overflow-hidden">
        <div aria-hidden className="hero-atmosphere-warm absolute inset-0 -z-10" />
        <Container className="grid grid-cols-1 items-center gap-12 py-[clamp(56px,10vw,104px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex flex-col gap-5">
            <Reveal>
              <div className="t-mono inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-canvas/70 px-3 py-1.5 text-[13px] text-charcoal backdrop-blur">
                <span aria-hidden className="size-1.5 rounded-full bg-brand-green" />
                {profile.hero.statusChip}
              </div>
            </Reveal>

            <Reveal delay={60}>
              <p className="font-accent-serif text-[clamp(2.25rem,5vw,3.25rem)] leading-none text-ink">
                {profile.hero.greeting}
              </p>
            </Reveal>

            <Reveal delay={110}>
              <h1
                id="hero-h"
                className="flex flex-wrap items-end gap-x-4 gap-y-1 text-balance"
              >
                <span className="text-[clamp(2.5rem,7vw,4.5rem)] font-black uppercase leading-[0.95] tracking-tight text-ink">
                  {profile.hero.nameDisplay}
                </span>
                <span className="pb-1 text-[clamp(1.1rem,2.2vw,1.5rem)] font-bold uppercase leading-tight tracking-tight text-charcoal">
                  {profile.hero.titleDisplay}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="t-mono max-w-md text-[13px] text-slate">
                {profile.hero.specializedIn}
              </p>
            </Reveal>

            <Reveal delay={190}>
              <p className="reading-measure t-body text-charcoal">
                {profile.hero.supporting}
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-ink">{profile.experienceYears}</span>
                  <span className="t-caption text-slate">Years experience</span>
                </div>
                <div className="h-9 w-px bg-hairline" aria-hidden />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-ink">{projects.length}</span>
                  <span className="t-caption text-slate">Featured case studies</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={270}>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button href="/#work" size="lg">
                  {profile.hero.primaryCta}
                  <ArrowRight aria-hidden className="size-4" />
                </Button>
                <Button href={profile.config.resumePdfPath} download variant="secondary" size="lg">
                  {profile.hero.secondaryCta}
                </Button>
                <Button href={profile.links.github} external variant="ghost" size="lg">
                  <GithubIcon className="size-4" />
                  {profile.hero.tertiaryCta}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="mx-auto w-full lg:mx-0 lg:justify-self-end">
            <HeroPortraitLarge />
          </Reveal>
        </Container>
      </section>

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
