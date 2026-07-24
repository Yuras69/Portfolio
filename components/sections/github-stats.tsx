"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight, Code2, Star, GitFork, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useCounter } from "@/hooks/use-counter";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

interface GithubData {
  username: string;
  followers: number;
  publicRepos: number;
  starredRepos: number;
  profileUrl: string;
}

const fallbackStats: GithubData = {
  username: "Yuras69",
  publicRepos: 15,
  starredRepos: 11,
  followers: 4,
  profileUrl: "https://github.com/Yuras69",
};

const topLanguages = ["TypeScript", "JavaScript", "React", "Next.js", "CSS"];
const featuredRepositories = projects.filter((project) =>
  ["UserManagementSystem", "Smart-Waste-Management-System"].includes(project.title)
);

function StatCounter({ label, value, icon: Icon, start }: {
  label: string;
  value: number;
  icon: typeof Star;
  start: boolean;
}) {
  const count = useCounter(value, start);
  return (
    <div className="glass rounded-2xl p-6 text-center">
      <Icon className="mx-auto h-5 w-5 text-[var(--color-cyan)] mb-3" aria-hidden="true" />
      <p className="font-[family-name:var(--font-display)] text-3xl font-semibold">{count}</p>
      <p className="text-sm text-[var(--color-text-faint)] mt-1">{label}</p>
    </div>
  );
}

export function GithubStats() {
  const [data, setData] = useState<GithubData>(fallbackStats);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const username = profile.github.split("/").pop() ?? "Yuras69";

  useEffect(() => {
    async function loadGithubStats() {
      try {
        const [profileResponse, repositoriesResponse, starredResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
          fetch(`https://api.github.com/users/${username}/starred?per_page=100`),
        ]);

        if (!profileResponse.ok || !repositoriesResponse.ok || !starredResponse.ok) {
          throw new Error("GitHub API request failed");
        }

        const githubProfile = await profileResponse.json();
        await repositoriesResponse.json();
        const starredRepositories: unknown[] = await starredResponse.json();

        setData({
          username,
          followers: githubProfile.followers ?? 0,
          publicRepos: githubProfile.public_repos ?? 0,
          starredRepos: starredRepositories.length,
          profileUrl: githubProfile.html_url ?? profile.github,
        });
      } catch {
        setData(fallbackStats);
      }
    }

    loadGithubStats();
  }, [username]);

  return (
    <section id="github" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="GitHub Statistics"
          title="Open-source activity"
          description="Pulled live from the GitHub API — repositories, stars, and followers update automatically."
        />

        <div ref={ref} className="mt-12 grid gap-4 sm:grid-cols-3">
          <StatCounter
            label="Public Repositories"
            value={data.publicRepos}
            icon={GitFork}
            start={inView && !!data}
          />
          <StatCounter
            label="Starred Repositories"
            value={data.starredRepos}
            icon={Star}
            start={inView && !!data}
          />
          <StatCounter
            label="Followers"
            value={data.followers}
            icon={Users}
            start={inView}
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <Code2 className="h-5 w-5 text-[var(--color-cyan)]" aria-hidden="true" />
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">Top Technologies</h3>
            </div>
            <p className="mt-2 text-sm text-[var(--color-text-faint)]">The tools I use most in my projects.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {topLanguages.map((language) => (
                <span key={language} className="tag-dev rounded-full px-3 py-1.5 text-sm">
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 text-[var(--color-cyan)]" aria-hidden="true" />
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">Featured Repositories</h3>
            </div>
            <div className="mt-4 space-y-3">
              {featuredRepositories.map((repository) => (
                <a
                  key={repository.slug}
                  href={repository.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 transition-colors hover:border-[var(--color-cyan)]/60"
                >
                  <span className="text-sm font-medium">{repository.title}</span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--color-cyan)]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
