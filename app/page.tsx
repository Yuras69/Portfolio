import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { TechStack } from "@/components/sections/tech-stack";

const Projects = dynamic(() => import("@/components/sections/projects").then((m) => m.Projects));
const Experience = dynamic(() =>
  import("@/components/sections/experience").then((m) => m.Experience)
);
const Education = dynamic(() => import("@/components/sections/education").then((m) => m.Education));
const GithubStats = dynamic(() =>
  import("@/components/sections/github-stats").then((m) => m.GithubStats)
);
const Contact = dynamic(() => import("@/components/sections/contact").then((m) => m.Contact));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <GithubStats />
      <Contact />
    </>
  );
}
