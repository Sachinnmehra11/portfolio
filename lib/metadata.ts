import type { Metadata } from "next";
import { profile } from "@/content/profile";

/** Configurable site origin (set NEXT_PUBLIC_SITE_URL at deploy time). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const defaultTitle = `${profile.name} — ${profile.title}`;
const defaultDescription = profile.positioning;

/** Build page metadata with sensible Open Graph + Twitter defaults. */
export function buildMetadata(options?: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  // metadata.title stays raw so the root layout's title template appends the
  // "· Sachin Mehra" suffix exactly once. Open Graph has no template, so it
  // uses the fully-composed title.
  const metaTitle = options?.title ?? defaultTitle;
  const ogTitle = options?.title ? `${options.title} · ${profile.name}` : defaultTitle;
  const description = options?.description ?? defaultDescription;
  const url = `${SITE_URL}${options?.path ?? "/"}`;

  return {
    title: metaTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: options?.path ?? "/" },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: `${profile.name} — Portfolio`,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    authors: [{ name: profile.name }],
    creator: profile.name,
  };
}

export const rootMetadata: Metadata = {
  ...buildMetadata(),
  title: {
    default: defaultTitle,
    template: `%s · ${profile.name}`,
  },
  keywords: [
    ".NET",
    "ASP.NET Core",
    "C#",
    "Angular",
    "Software Engineer",
    "Microservices",
    "RabbitMQ",
    "SQL Server",
    "Docker",
    "New Delhi",
  ],
  robots: { index: true, follow: true },
};
