/** Education — kept compact. */

export type Education = {
  degree: string;
  institution: string;
  location: string;
};

export const education: Education = {
  degree: "Bachelor of Technology in Mathematics and Computer Science",
  institution: "Delhi Technological University",
  location: "New Delhi, India",
};

/** Engineering approach — four principle cards (brief §12). */
export type Principle = {
  title: string;
  detail: string;
};

export const principles: Principle[] = [
  {
    title: "Maintainable by design",
    detail:
      "OOP, SOLID, and design patterns keep components reusable and easy to change. Clean architecture keeps business logic independent of frameworks and infrastructure.",
  },
  {
    title: "Clear service boundaries",
    detail:
      "Decomposing systems into well-scoped microservices makes ownership, testing, and deployment tractable — and lets each service evolve on its own cadence.",
  },
  {
    title: "Reliable asynchronous communication",
    detail:
      "Event-driven messaging with RabbitMQ decouples producers from consumers, so services stay responsive and resilient under load and partial failure.",
  },
  {
    title: "Incremental modernization",
    detail:
      "Legacy systems improve safely through steady, reviewable steps — containerizing with Docker and shipping through CI/CD rather than risky big-bang rewrites.",
  },
];

export default education;
