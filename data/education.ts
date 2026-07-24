export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  achievements: string[];
}

export const education: EducationItem[] = [
  {
    institution: "Itahari International College",
    degree: "Bachelor's Degree — Final Year",
    duration: "Present",
    achievements: [
      "Final-year student with a focus on full-stack web development.",
      "Building practical projects with modern web technologies.",
    ],
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
}

export const certificates: Certificate[] = [
  { title: "Full-Stack Web Development", issuer: "Self-directed / Project-based", year: "2024" },
  { title: "React & Next.js Advanced Patterns", issuer: "Self-directed / Project-based", year: "2025" },
  { title: "Digital Marketing Fundamentals", issuer: "Business Development Training", year: "2024" },
  { title: "Sales & Negotiation Essentials", issuer: "Business Development Training", year: "2023" },
];
