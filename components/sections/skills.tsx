import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { StaggerGroup, StaggerChild } from "@/components/animations/reveal";

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="What I actually use, day to day"
          description="Grouped by category, tagged by which side of the work it belongs to."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <StaggerChild key={group.category}>
              <div className="glass h-full rounded-2xl p-6 hover:-translate-y-1 hover:border-[var(--color-dev)]/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg">
                    {group.category}
                  </h3>
                  <Badge track={group.track}>{group.track === "dev" ? "DEV" : "BIZ"}</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-[var(--color-text-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
