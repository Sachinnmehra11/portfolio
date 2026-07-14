import Link from "next/link";
import { profile } from "@/content/profile";
import { Container } from "@/components/foundations";
import { SocialLink } from "./SocialLink";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="no-print border-t border-hairline bg-surface-soft">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-md bg-ink text-canvas t-mono text-[13px] font-semibold">
              SM
            </span>
            <span className="text-sm font-semibold text-ink">{profile.name}</span>
          </div>
          <p className="t-body-sm text-slate">
            {profile.title} · {profile.location}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2 t-body-sm">
          <a href={`mailto:${profile.email}`} className="text-charcoal hover:text-ink focus-visible:outline-none">
            {profile.email}
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer noopener" className="text-charcoal hover:text-ink focus-visible:outline-none">
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer noopener" className="text-charcoal hover:text-ink focus-visible:outline-none">
            GitHub
          </a>
          <Link href="/resume" className="text-charcoal hover:text-ink focus-visible:outline-none">
            Résumé
          </Link>
        </nav>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <SocialLink kind="github" href={profile.links.github} label="GitHub profile (opens in a new tab)" />
            <SocialLink kind="linkedin" href={profile.links.linkedin} label="LinkedIn profile (opens in a new tab)" />
            <SocialLink kind="email" href={`mailto:${profile.email}`} label={`Email ${profile.name}`} />
          </div>
          <p className="t-caption text-steel">
            © {year} {profile.name}. Built with Next.js and TypeScript.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
