"use client";

import {
  Atom,
  Triangle,
  FileCode,
  Wind,
  Server,
  Route,
  Leaf,
  Flame,
  GitBranch,
  PenTool,
  Sparkles,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { techStack } from "@/data/techstack";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerChild } from "@/components/animations/reveal";

const iconMap: Record<string, LucideIcon> = {
  atom: Atom,
  triangle: Triangle,
  fileCode: FileCode,
  wind: Wind,
  server: Server,
  route: Route,
  leaf: Leaf,
  flame: Flame,
  gitBranch: GitBranch,
  penTool: PenTool,
  sparkles: Sparkles,
  cloud: Cloud,
};

export function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Tech Stack" title="Tools I build with" />

        <StaggerGroup className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech) => {
            const Icon = iconMap[tech.icon] ?? Atom;
            return (
              <StaggerChild key={tech.name}>
                <div className="glass group flex flex-col items-center gap-3 rounded-2xl p-5 text-center hover:border-[var(--color-cyan)]/50 hover:shadow-[var(--shadow-glow-dev)] transition-all duration-300">
                  <Icon
                    className="h-7 w-7 text-[var(--color-text-muted)] group-hover:text-[var(--color-cyan)] transition-colors"
                    aria-hidden="true"
                  />
                  <span className="text-xs text-[var(--color-text-muted)]">{tech.name}</span>
                </div>
              </StaggerChild>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
