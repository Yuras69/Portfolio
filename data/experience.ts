export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  track: "dev" | "biz";
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Business Development Intern & Experience Ambassador",
    organization: "Itahari International College",
    duration: "Present",
    track: "dev",
    points: [
      "Support business development activities and student engagement initiatives.",
      "Represent the student experience and help foster a welcoming college community.",
      "Develop communication, collaboration, and relationship-building skills.",
    ],
  },
];
