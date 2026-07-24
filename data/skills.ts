export type SkillTrack = "dev" | "biz";

export interface SkillGroup {
  category: string;
  track: SkillTrack;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    track: "dev",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
  },
  {
    category: "Backend",
    track: "dev",
    items: ["Node.js", "Express", "REST APIs", "JWT Auth", "Socket.IO"],
  },
  {
    category: "Database",
    track: "dev",
    items: ["MongoDB", "Mongoose", "PostgreSQL", "Firebase"],
  },
  {
    category: "Tools & Workflow",
    track: "dev",
    items: ["Git & GitHub", "Vercel", "Postman", "Figma", "VS Code"],
  },
  {
    category: "Business Development",
    track: "biz",
    items: ["Client Acquisition", "Deal Negotiation", "Sales Pipelines", "Partnership Building"],
  },
  {
    category: "Marketing & Growth",
    track: "biz",
    items: ["Digital Marketing", "Social Media Strategy", "Market Research", "Brand Positioning"],
  },
];
