export interface TechItem {
  name: string;
  icon: string; // key used to look up a lucide-react icon
}

export const techStack: TechItem[] = [
  { name: "React", icon: "atom" },
  { name: "Next.js", icon: "triangle" },
  { name: "TypeScript", icon: "fileCode" },
  { name: "Tailwind CSS", icon: "wind" },
  { name: "Node.js", icon: "server" },
  { name: "Git", icon: "gitBranch" },
];
