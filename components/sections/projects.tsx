import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/sections/project-card";

export function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="section-container">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built end to end"
          description="Full-stack systems, not just landing pages — designed, built, and deployed."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
