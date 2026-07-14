import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getProject } from "@/content/projects";
import { CaseStudyView } from "@/components/projects/CaseStudyView";

const SLUG = "enterprise-task-management";
const project = getProject(SLUG);

export const metadata: Metadata = buildMetadata({
  title: project?.name,
  description: project?.summary,
  path: `/projects/${SLUG}`,
});

export default function Page() {
  if (!project) notFound();
  return <CaseStudyView project={project} />;
}
