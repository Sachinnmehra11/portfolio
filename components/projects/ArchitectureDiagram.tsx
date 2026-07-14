import { cn } from "@/lib/cn";

/**
 * Original architecture diagrams (HTML/CSS) for the case-study pages.
 * Dark technical panel, monospace labels, neutral naming — no proprietary
 * system names. Decorative connectors are aria-hidden; structure is readable
 * as a labeled node list to assistive tech.
 */

function Node({
  title,
  sub,
  tone = "surface",
}: {
  title: string;
  sub?: string;
  tone?: "surface" | "mint" | "solid";
}) {
  const tones = {
    surface: "border-hairline-dark bg-[#0d1412] text-on-dark",
    mint: "border-brand-green/50 bg-[#0c1a16] text-brand-green",
    solid: "border-transparent bg-brand-green text-primary",
  };
  return (
    <div className={cn("rounded-lg border px-3 py-2.5 text-center", tones[tone])}>
      <div className="t-mono text-[12px] font-medium">{title}</div>
      {sub && <div className="t-mono text-[10px] text-on-dark/50">{sub}</div>}
    </div>
  );
}

function Connector() {
  return (
    <div aria-hidden className="flex items-center justify-center py-1.5">
      <span className="h-6 w-px bg-gradient-to-b from-brand-green/60 to-brand-green/10" />
    </div>
  );
}

export function ArchitectureDiagram({
  kind,
}: {
  kind: "task-management" | "expense-tracker";
}) {
  const isTasks = kind === "task-management";
  return (
    <figure className="overflow-hidden rounded-xl border border-hairline-dark bg-surface-code p-5 sm:p-7">
      <figcaption className="t-mono mb-5 flex items-center gap-2 text-[11px] uppercase tracking-wide text-on-dark/50">
        <span className="size-1.5 rounded-full bg-brand-green" />
        {isTasks ? "Request & role-based access flow" : "Authenticated request flow"}
      </figcaption>

      <div className="mx-auto flex max-w-md flex-col">
        <Node title="Angular client" sub={isTasks ? "SPA · task board" : "SPA · finance UI"} />
        <Connector />
        <Node
          title={isTasks ? "REST API · ASP.NET Core" : "REST API · ASP.NET Core"}
          sub={isTasks ? "role-based access control" : "JWT validation · policies"}
          tone="mint"
        />
        <Connector />
        {isTasks ? (
          <div className="grid grid-cols-2 gap-3">
            <Node title="Domain layer" sub="clean architecture" />
            <Node title="Application layer" sub="use cases" />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            <Node title="Expenses" sub="service" />
            <Node title="Budgets" sub="service" />
            <Node title="Reporting" sub="service" />
          </div>
        )}
        <Connector />
        <Node title="SQL Server" sub="relational store" tone="solid" />
      </div>
    </figure>
  );
}

export default ArchitectureDiagram;
