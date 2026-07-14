import { profile } from "@/content/profile";
import { education } from "@/content/education";
import { SITE_URL } from "@/lib/metadata";

/** Person JSON-LD built only from verified public details. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: profile.employer,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.institution,
    },
    sameAs: [profile.links.linkedin, profile.links.github],
    knowsAbout: [
      "C#",
      "ASP.NET Core",
      "Angular",
      "REST APIs",
      "Microservices",
      "RabbitMQ",
      "SQL Server",
      "Docker",
      "Clean Architecture",
    ],
  };
}

/** Serialize JSON-LD for safe injection into a <script> tag. */
export function jsonLdScript(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
