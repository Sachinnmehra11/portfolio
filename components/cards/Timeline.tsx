import type { ExperienceRole } from "@/content/experience";
import { TechTag } from "@/components/content";

/** Polished technical timeline (not a resume table). */
export function Timeline({ roles }: { roles: ExperienceRole[] }) {
  return (
    <ol className="relative flex flex-col gap-10">
      {roles.map((role) => (
        <li key={`${role.company}-${role.period}`} className="relative pl-8 sm:pl-10">
          {/* Rail */}
          <span
            aria-hidden
            className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-brand-green/60 via-hairline to-transparent"
          />
          <span
            aria-hidden
            className="absolute left-0 top-1.5 inline-flex size-3.5 items-center justify-center rounded-full border-2 border-brand-green bg-canvas"
          />

          <div className="flex flex-col gap-1">
            <span className="t-mono text-[13px] text-brand-green-deep">{role.period}</span>
            <h3 className="t-h4 text-ink">
              {role.role} · <span className="text-charcoal">{role.company}</span>
            </h3>
            <p className="t-body text-slate">{role.summary}</p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {role.themes.map((theme) => (
              <div key={theme.title} className="flex flex-col gap-1.5 rounded-lg border border-hairline bg-surface-soft p-4">
                <div className="flex items-center gap-2">
                  <TechTag tone="accent">{theme.title}</TechTag>
                </div>
                <p className="t-body-sm text-charcoal">{theme.detail}</p>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
