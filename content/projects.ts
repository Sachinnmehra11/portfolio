/**
 * Featured projects / case studies.
 * Only verified facts appear in `verifiedCapabilities` and `responsibilities`.
 * `engineeringRationale` is general engineering explanation, labeled as such.
 * No live URLs, repos, metrics, or client data are invented.
 */

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type EngineeringDecision = {
  tech: string;
  rationale: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  projectType: string;
  status: string; // e.g. "Case Study", "Enterprise Project"
  stack: string[];
  /** Homepage card bullets — verified capabilities only. */
  verifiedCapabilities: string[];
  /** Detail page: overview / problem. */
  overview: CaseStudySection;
  /** Detail page: what Sachin verifiably did. */
  responsibilities: string[];
  /** Detail page: technical approach, grouped. */
  technicalApproach: CaseStudySection[];
  /** Why each technology fits — general engineering rationale. */
  engineeringDecisions: EngineeringDecision[];
  /** What the project demonstrates. */
  demonstrates: string[];
  /** Architecture diagram kind for the visual component. */
  diagram: "task-management" | "expense-tracker";
};

export const projects: Project[] = [
  {
    slug: "enterprise-task-management",
    name: "Enterprise Task Management System",
    tagline: "Role-based task management for enterprise teams.",
    summary:
      "An enterprise task-management application with secure role-based access, built on ASP.NET Core REST services and an Angular frontend, following clean architecture principles.",
    role: "Software Engineer — design & development",
    projectType: "Enterprise application",
    status: "Enterprise Project · Case Study",
    stack: ["Angular", "ASP.NET Core", "SQL Server", "REST APIs", "Clean Architecture"],
    verifiedCapabilities: [
      "Secure role-based access control",
      "ASP.NET Core backend services and REST APIs",
      "Angular single-page frontend",
      "Clean architecture separation of concerns",
    ],
    overview: {
      heading: "Overview",
      body: [
        "The Enterprise Task Management System helps teams within an organization create, assign, and track work with permissions that match each user's role.",
        "The core problem it addresses is coordinating tasks across an enterprise without over-exposing data — different roles need different levels of access to the same underlying system.",
      ],
    },
    responsibilities: [
      "Designed and developed the task-management application for enterprise users.",
      "Implemented secure role-based access so permissions align with user responsibilities.",
      "Built backend services and REST APIs using ASP.NET Core.",
      "Structured the solution around clean architecture principles for maintainability.",
    ],
    technicalApproach: [
      {
        heading: "Frontend",
        body: [
          "Angular provides the single-page interface for task creation, assignment, and tracking, communicating with the backend over REST.",
        ],
      },
      {
        heading: "Backend",
        body: [
          "ASP.NET Core hosts the REST services and business logic. Clean architecture keeps domain rules independent of delivery and infrastructure concerns.",
        ],
      },
      {
        heading: "Authorization",
        body: [
          "Role-based access control governs what each user can see and do, enforced at the service layer rather than only in the UI.",
        ],
      },
      {
        heading: "Data",
        body: [
          "SQL Server stores tasks, assignments, and role relationships with a relational model suited to structured, transactional enterprise data.",
        ],
      },
    ],
    engineeringDecisions: [
      {
        tech: "ASP.NET Core",
        rationale:
          "A performant, well-supported framework for building structured REST services with strong tooling and a clear middleware pipeline for cross-cutting concerns like authorization.",
      },
      {
        tech: "Angular",
        rationale:
          "A batteries-included frontend framework that suits data-dense enterprise UIs with typed models, dependency injection, and predictable structure.",
      },
      {
        tech: "Role-based access control",
        rationale:
          "Maps naturally to how enterprises think about permissions, and centralizing enforcement at the service layer keeps the rules consistent across clients.",
      },
      {
        tech: "Clean architecture",
        rationale:
          "Keeps business logic isolated from frameworks and databases, so the system stays testable and adaptable as requirements change.",
      },
    ],
    demonstrates: [
      "Enterprise application design",
      "Full-stack delivery across Angular and ASP.NET Core",
      "Secure, role-aware access",
      "Structured, maintainable backend services",
    ],
    diagram: "task-management",
  },
  {
    slug: "expense-tracker",
    name: "Expense Tracker & Budget Management System",
    tagline: "Finance management with secure JWT authentication.",
    summary:
      "A finance-management system for expense tracking, budgeting, and reporting, with secure authentication and authorization implemented using JWT.",
    role: "Software Engineer — full-stack development",
    projectType: "Finance management application",
    status: "Case Study",
    stack: ["ASP.NET Core", "Angular", "JWT Authentication", "REST APIs"],
    verifiedCapabilities: [
      "Expense tracking",
      "Budget management",
      "Reporting",
      "Secure authentication & authorization with JWT",
    ],
    overview: {
      heading: "Overview",
      body: [
        "The Expense Tracker & Budget Management System lets users record expenses, set and manage budgets, and review reporting on their spending.",
        "The user problem is staying on top of personal or team finances — capturing expenses reliably, comparing them against budgets, and seeing where the money goes, all behind secure access.",
      ],
    },
    responsibilities: [
      "Developed the finance-management system end to end.",
      "Implemented expense tracking, budgeting, and reporting capabilities.",
      "Built secure authentication and authorization using JWT.",
    ],
    technicalApproach: [
      {
        heading: "Frontend",
        body: [
          "Angular delivers the interface for entering expenses, managing budgets, and viewing reports, attaching JWTs to authenticated API calls.",
        ],
      },
      {
        heading: "Backend",
        body: [
          "ASP.NET Core exposes REST APIs for expenses, budgets, and reporting, applying validation and authorization on each request.",
        ],
      },
      {
        heading: "Authentication",
        body: [
          "JSON Web Tokens carry authenticated identity and claims between client and server, so protected endpoints can authorize requests statelessly.",
        ],
      },
    ],
    engineeringDecisions: [
      {
        tech: "JWT authentication",
        rationale:
          "Stateless tokens let API servers authorize requests without server-side session storage, which fits a REST backend serving a single-page Angular client.",
      },
      {
        tech: "ASP.NET Core",
        rationale:
          "Provides first-class support for token validation and policy-based authorization, keeping protected endpoints consistent and secure.",
      },
      {
        tech: "Angular",
        rationale:
          "Its HTTP interceptors and typed services make it straightforward to attach tokens and model expense, budget, and reporting data on the client.",
      },
    ],
    demonstrates: [
      "Full-stack delivery of a finance application",
      "Secure token-based authentication and authorization",
      "Structured REST backend for expenses, budgets, and reporting",
      "Maintainable frontend and backend responsibilities",
    ],
    diagram: "expense-tracker",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const confidentialityNote =
  "Project details are presented at a high level to respect confidentiality.";

export default projects;
