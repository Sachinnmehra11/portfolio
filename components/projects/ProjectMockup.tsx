import { cn } from "@/lib/cn";

/**
 * Original, abstract UI mockups built with HTML/CSS (no stock screenshots,
 * no proprietary data). Neutral placeholder labels only.
 */

function Bar({ w, tone = "muted" }: { w: string; tone?: "muted" | "ink" | "mint" }) {
  const tones = { muted: "bg-hairline", ink: "bg-charcoal/70", mint: "bg-brand-green" };
  return <span className={cn("block h-2 rounded-full", tones[tone])} style={{ width: w }} />;
}

/* Task-management: a kanban-style board preview -------------------------- */
export function TaskManagementMockup() {
  const columns = [
    { title: "Backlog", count: 4, accent: "bg-stone" },
    { title: "In Progress", count: 2, accent: "bg-brand-blue" },
    { title: "Review", count: 3, accent: "bg-brand-warning" },
    { title: "Done", count: 5, accent: "bg-brand-green" },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-ink">Team board</span>
          <div className="flex items-center gap-2">
            <span className="t-mono rounded border border-hairline bg-surface px-1.5 py-0.5 text-[11px] text-slate">
              role: admin
            </span>
            <span className="t-mono rounded border border-hairline bg-surface px-1.5 py-0.5 text-[11px] text-slate">
              14 tasks
            </span>
          </div>
        </div>
        <span className="inline-flex size-8 items-center justify-center rounded-full bg-ink text-canvas text-[11px] font-semibold">
          +
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-2 rounded-lg border border-hairline bg-surface-soft p-2.5">
            <div className="flex items-center gap-1.5">
              <span className={cn("size-1.5 rounded-full", col.accent)} />
              <span className="text-[11px] font-semibold text-charcoal">{col.title}</span>
              <span className="ml-auto text-[11px] text-steel">{col.count}</span>
            </div>
            {Array.from({ length: col.title === "Done" ? 3 : 2 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-1.5 rounded-md border border-hairline bg-canvas p-2">
                <Bar w={`${70 - i * 12}%`} tone="ink" />
                <Bar w={`${45 + i * 10}%`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Expense tracker: a budget dashboard preview ---------------------------- */
export function ExpenseTrackerMockup() {
  const categories = [
    { label: "Housing", pct: 78, tone: "bg-brand-blue" },
    { label: "Food", pct: 54, tone: "bg-brand-green" },
    { label: "Transport", pct: 32, tone: "bg-accent-orange" },
    { label: "Utilities", pct: 21, tone: "bg-brand-warning" },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { k: "Spent", v: "₹42,180" },
          { k: "Budget", v: "₹60,000" },
          { k: "Left", v: "₹17,820" },
        ].map((s, i) => (
          <div key={s.k} className="flex flex-col gap-1 rounded-lg border border-hairline bg-surface-soft p-3">
            <span className="t-mono text-[10px] uppercase tracking-wide text-steel">{s.k}</span>
            <span className={cn("text-sm font-semibold tabular", i === 2 ? "text-brand-green-deep" : "text-ink")}>
              {s.v}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 rounded-lg border border-hairline bg-canvas p-3">
        <span className="text-[11px] font-semibold text-charcoal">By category</span>
        {categories.map((c) => (
          <div key={c.label} className="flex items-center gap-3">
            <span className="w-16 shrink-0 text-[11px] text-slate">{c.label}</span>
            <span className="relative h-2 flex-1 overflow-hidden rounded-full bg-hairline">
              <span className={cn("absolute inset-y-0 left-0 rounded-full", c.tone)} style={{ width: `${c.pct}%` }} />
            </span>
            <span className="w-8 shrink-0 text-right text-[11px] tabular text-steel">{c.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectMockup({ kind }: { kind: "task-management" | "expense-tracker" }) {
  return kind === "task-management" ? <TaskManagementMockup /> : <ExpenseTrackerMockup />;
}

export default ProjectMockup;
