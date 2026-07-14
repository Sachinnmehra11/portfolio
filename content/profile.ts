/**
 * Verified personal + positioning data. Single source of truth for identity.
 * PRIVACY: phone is intentionally NOT surfaced on public pages (see brief §1).
 * It is kept here only for an optional, off-by-default resume detail block.
 */

export const profile = {
  name: "Sachin Mehra",
  title: "Software Engineer",
  location: "New Delhi, India",
  experienceYears: "4+",
  employer: "Symplr",
  roleDuration: "June 2021 – Present",
  email: "sachinmehra1398@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/sachin-mehra-5bab43197",
    github: "https://github.com/Sachinnmehra11",
  },
  /** Off by default; only rendered where showPhone is explicitly enabled. */
  phone: "+91 9560965388",

  /** Optional configuration flags (all conservative defaults). */
  config: {
    openToWork: false, // never render "available" copy unless true
    showPhone: false, // keep phone out of public content
    resumePdfPath: "/resume.pdf", // configurable; falls back to print view
    contactEndpoint: "", // empty => contact form builds a mailto link
  },

  hero: {
    greeting: "Hey, I'm Sachin",
    eyebrow: "Software Engineer · New Delhi",
    nameDisplay: "SACHIN MEHRA",
    titleDisplay: "SOFTWARE ENGINEER",
    headline:
      "I build reliable enterprise software with .NET, Angular, and event-driven systems.",
    supporting:
      "A software engineer with 4+ years of experience developing and modernizing enterprise applications using C#, ASP.NET Core, Angular, SQL Server, RabbitMQ, Docker, and clean architecture principles.",
    specializedIn: "Specialized in .NET, Angular, REST APIs, and event-driven systems.",
    statusChip: "Software Engineer @ Symplr",
    primaryCta: "View my work",
    secondaryCta: "Download résumé",
    tertiaryCta: "GitHub profile",
  },

  about: [
    "I design, develop, and modernize enterprise-grade software across the full delivery surface — backend services, web interfaces, messaging, data, and deployment. Most of my work centers on C#, ASP.NET Core, and SQL Server, with Angular on the frontend.",
    "A lot of engineering value lives in maintainability. I lean on object-oriented design, SOLID principles, and well-known design patterns to keep systems reusable and easy to change, and I use REST APIs to give internal and external consumers a stable, predictable contract.",
    "I also work on modernization: decomposing legacy systems into microservices, wiring reliable asynchronous communication with RabbitMQ, and containerizing services with Docker so they ship consistently through CI/CD. Throughout, I collaborate with cross-functional teams, review code, and mentor junior engineers.",
  ],

  /** One-line positioning statement (used in metadata + JSON-LD). */
  positioning:
    "Sachin builds scalable, maintainable enterprise software across the backend, frontend, messaging, database, and deployment layers.",

  contactHeadline: "Let's build software that remains reliable as it grows.",
  contactSupporting:
    "Open to conversations about enterprise .NET and Angular engineering. Email is the fastest way to reach me.",
} as const;

export type Profile = typeof profile;
export default profile;
