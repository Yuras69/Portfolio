import { GraduationCap, Code2, Briefcase } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/animations/reveal";

const facts = [
  {
    icon: GraduationCap,
    label: "Final-Year Student",
    detail: "Itahari International College",
    track: "dev" as const,
  },
  {
    icon: Code2,
    label: "Full Stack Developer",
    detail: "React, Next.js, TypeScript & Node.js",
    track: "dev" as const,
  },
  {
    icon: Briefcase,
    label: "Experience Ambassador",
    detail: "Business Development Intern at IIC",
    track: "biz" as const,
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="About"
          title="Building with purpose"
          description="A blend of full-stack development, student leadership, and business development experience."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
          <Reveal delay={0.1} className="space-y-5">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="text-[var(--color-text-muted)] leading-relaxed text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <StaggerGroup className="grid gap-4">
            {facts.map((fact) => (
              <StaggerChild key={fact.label}>
                <div className="glass rounded-2xl p-5 flex items-start gap-4 hover:border-[var(--color-dev)]/50 transition-colors">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      fact.track === "dev" ? "tag-dev" : "tag-biz"
                    }`}
                  >
                    <fact.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium">{fact.label}</p>
                    <p className="text-sm text-[var(--color-text-faint)] mt-0.5">{fact.detail}</p>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
