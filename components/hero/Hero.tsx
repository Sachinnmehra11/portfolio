"use client";

import { motion, type Variants } from "motion/react";
import { Container } from "@/components/foundations";
import { Button } from "@/components/buttons/Button";
import { ArrowButton } from "@/components/buttons/ArrowButton";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { HeroPortraitLarge, HeroPortraitCircle } from "@/components/content/HeroPortrait";
import { HeroScene } from "@/components/hero/HeroScene";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  return (
    <section aria-labelledby="hero-h" className="relative overflow-hidden">
      <div aria-hidden className="hero-atmosphere-warm absolute inset-0 -z-10" />
      <Container className="grid grid-cols-1 items-center gap-12 py-[clamp(56px,10vw,104px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Text column — staggered on load */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-5"
        >
          <motion.div variants={item} className="lg:hidden">
            <HeroPortraitCircle />
          </motion.div>

          <motion.div variants={item}>
            <div className="t-mono inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-canvas/70 px-3 py-1.5 text-[13px] text-charcoal backdrop-blur">
              <span aria-hidden className="size-1.5 rounded-full bg-brand-green" />
              {profile.hero.statusChip}
            </div>
          </motion.div>

          <motion.p
            variants={item}
            className="font-accent-serif text-[clamp(2.25rem,5vw,3.25rem)] leading-none text-ink"
          >
            {profile.hero.greeting}
          </motion.p>

          <motion.h1
            variants={item}
            id="hero-h"
            className="flex flex-wrap items-end gap-x-4 gap-y-1 text-balance"
          >
            <span className="text-[clamp(2.5rem,7vw,4.5rem)] font-black uppercase leading-[0.95] tracking-tight text-ink">
              {profile.hero.nameDisplay}
            </span>
            <span className="pb-1 text-[clamp(1.1rem,2.2vw,1.5rem)] font-bold uppercase leading-tight tracking-tight text-charcoal">
              {profile.hero.titleDisplay}
            </span>
          </motion.h1>

          <motion.p variants={item} className="t-mono max-w-md text-[13px] text-slate">
            {profile.hero.specializedIn}
          </motion.p>

          <motion.p variants={item} className="reading-measure t-body text-charcoal">
            {profile.hero.supporting}
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-ink">{profile.experienceYears}</span>
              <span className="t-caption text-slate">Years experience</span>
            </div>
            <div className="h-9 w-px bg-hairline" aria-hidden />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-ink">{projects.length}</span>
              <span className="t-caption text-slate">Featured case studies</span>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-1">
            <ArrowButton href="/#work">{profile.hero.primaryCta}</ArrowButton>
            <Button href={profile.config.resumePdfPath} download variant="secondary" size="lg">
              {profile.hero.secondaryCta}
            </Button>
            <Button href={profile.links.github} external variant="ghost" size="lg">
              <GithubIcon className="size-4" />
              {profile.hero.tertiaryCta}
            </Button>
          </motion.div>
        </motion.div>

        {/* Portrait column — 3D scene behind, portrait fades + lifts in */}
        <div className="relative hidden w-full lg:block lg:justify-self-end">
          <HeroScene className="absolute -inset-x-8 -top-24 -bottom-6 -z-0" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            className="relative z-10"
          >
            <HeroPortraitLarge />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
