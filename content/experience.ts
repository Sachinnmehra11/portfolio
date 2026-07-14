/** Professional experience — grouped into themes (no fabricated metrics). */

export type ExperienceTheme = {
  title: string;
  detail: string;
};

export type ExperienceRole = {
  role: string;
  company: string;
  period: string;
  summary: string;
  themes: ExperienceTheme[];
};

export const experience: ExperienceRole[] = [
  {
    role: "Software Engineer",
    company: "Symplr",
    period: "June 2021 – Present",
    summary:
      "Designing, developing, and modernizing enterprise applications across backend, frontend, messaging, and deployment.",
    themes: [
      {
        title: "Enterprise application development",
        detail:
          "Build and maintain enterprise-grade applications with C#, ASP.NET Core, and SQL Server, applying OOP, SOLID, and design patterns for reusable, maintainable components.",
      },
      {
        title: "API and backend design",
        detail:
          "Design and consume RESTful APIs for internal and external users, keeping contracts stable and predictable across services.",
      },
      {
        title: "Event-driven architecture",
        detail:
          "Implement asynchronous, event-driven communication with RabbitMQ to decouple services and improve resilience.",
      },
      {
        title: "Legacy modernization",
        detail:
          "Modernize legacy systems by decomposing them into microservices with clearer service boundaries.",
      },
      {
        title: "Containerization & delivery",
        detail:
          "Containerize applications with Docker and contribute to CI/CD pipelines in Azure DevOps for consistent, repeatable releases.",
      },
      {
        title: "Collaboration & mentorship",
        detail:
          "Work with cross-functional teams to turn business requirements into technical solutions, conduct code reviews, and mentor junior engineers within Agile/Scrum.",
      },
    ],
  },
];

export default experience;
