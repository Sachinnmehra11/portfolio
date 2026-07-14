import { GraduationCap } from "lucide-react";
import type { SkillGroupData } from "@/content/skills";
import type { Principle } from "@/content/education";
import type { Education } from "@/content/education";
import { TechTag } from "@/components/content";

/* SkillGroup — capability-grouped skills (no percentage bars) ------------- */
export function SkillGroup({ group }: { group: SkillGroupData }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-xl border border-hairline bg-canvas p-6">
      <h3 className="t-h5 text-ink">{group.title}</h3>
      <div className="flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <TechTag key={item}>{item}</TechTag>
        ))}
      </div>
    </div>
  );
}

/* PrincipleCard — engineering approach ------------------------------------ */
export function PrincipleCard({ principle, index }: { principle: Principle; index: number }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-xl border border-hairline bg-canvas p-6">
      <span className="t-mono text-[13px] font-semibold text-brand-green-deep">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="t-h5 text-ink">{principle.title}</h3>
      <p className="t-body-sm text-slate">{principle.detail}</p>
    </div>
  );
}

/* EducationCard ----------------------------------------------------------- */
export function EducationCard({ education }: { education: Education }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-hairline bg-canvas p-6">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green-deep">
        <GraduationCap aria-hidden className="size-5" />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="t-h5 text-ink">{education.degree}</h3>
        <p className="t-body-sm text-slate">{education.institution}</p>
        <p className="t-caption text-steel">{education.location}</p>
      </div>
    </div>
  );
}
