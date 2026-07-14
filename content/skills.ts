/** Technical skills grouped by capability (no percentage bars, no invented tech). */

export type SkillGroupData = {
  id: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroupData[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    items: ["C#", "ASP.NET Core", "REST APIs", "Microservices"],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    items: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS"],
  },
  {
    id: "messaging",
    title: "Messaging & Architecture",
    items: [
      "RabbitMQ",
      "Event-Driven Architecture",
      "Clean Architecture",
      "Design Patterns",
    ],
  },
  {
    id: "data",
    title: "Data",
    items: ["SQL Server 2016+", "Relational Modeling"],
  },
  {
    id: "devops",
    title: "DevOps & Delivery",
    items: ["Docker", "Azure DevOps", "CI/CD Pipelines", "Git"],
  },
  {
    id: "foundations",
    title: "Languages & Foundations",
    items: [
      "Object-Oriented Programming",
      "SOLID Principles",
      "Python",
      "VB.NET",
      "Agile / Scrum",
    ],
  },
];

/** Compact expertise strip (immediately scannable). */
export const expertise: string[] = [
  ".NET Backend",
  "Angular Frontend",
  "REST APIs",
  "Event-Driven Systems",
  "SQL Server",
  "Docker & CI/CD",
];

export default skillGroups;
