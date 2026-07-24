import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Yuras69";

export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`GitHub API responded with ${res.status}`);
    }

    const data = await res.json();

    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      { headers: { Accept: "application/vnd.github+json" }, next: { revalidate: 3600 } }
    );
    const repos = reposRes.ok ? await reposRes.json() : [];
    const totalStars = Array.isArray(repos)
      ? repos.reduce((sum: number, r: { stargazers_count?: number }) => sum + (r.stargazers_count ?? 0), 0)
      : 0;

    return NextResponse.json({
      username: GITHUB_USERNAME,
      followers: data.followers ?? 0,
      publicRepos: data.public_repos ?? 0,
      totalStars,
      avatarUrl: data.avatar_url ?? null,
      profileUrl: data.html_url ?? `https://github.com/${GITHUB_USERNAME}`,
    });
  } catch {
    // Graceful fallback so the section still renders something sensible
    // if the GitHub API is rate-limited or unreachable at build/runtime.
    return NextResponse.json({
      username: GITHUB_USERNAME,
      followers: 0,
      publicRepos: 0,
      totalStars: 0,
      avatarUrl: null,
      profileUrl: `https://github.com/${GITHUB_USERNAME}`,
      fallback: true,
    });
  }
}
