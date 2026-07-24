import { GraduationCap, Award } from "lucide-react";
import { education, certificates } from "@/data/education";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerChild } from "@/components/animations/reveal";

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <StaggerChild key={item.institution}>
              <div className="glass h-full rounded-2xl p-6 hover:border-[var(--color-dev)]/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="tag-dev flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-semibold">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-[var(--color-text-faint)] mt-0.5">
                      {item.institution} · {item.duration}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 pl-1">
                  {item.achievements.map((a) => (
                    <li key={a} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerChild>
          ))}
        </StaggerGroup>

        <div id="certificates" className="mt-20">
          <p className="eyebrow mb-3">Certificates</p>
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-8">
            Continued learning
          </h3>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map((cert) => (
              <StaggerChild key={cert.title}>
                <div className="glass h-full rounded-2xl p-5 hover:border-[var(--color-biz)]/40 transition-colors">
                  <Award className="h-5 w-5 text-[var(--color-biz-bright)] mb-3" aria-hidden="true" />
                  <p className="font-medium text-sm leading-snug">{cert.title}</p>
                  <p className="text-xs text-[var(--color-text-faint)] mt-2">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
