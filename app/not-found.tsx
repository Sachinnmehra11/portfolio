import { Container, Section } from "@/components/foundations";
import { Button } from "@/components/buttons/Button";

export default function NotFound() {
  return (
    <Section spacing="hero">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="t-mono text-brand-green-deep">404</span>
        <h1 className="t-h1 text-ink">This page could not be found.</h1>
        <p className="reading-measure t-subtitle text-slate">
          The link may be broken or the page may have moved.
        </p>
        <Button href="/">Back to home</Button>
      </Container>
    </Section>
  );
}
