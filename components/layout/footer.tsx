import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-[var(--color-border)] pb-8">
      <svg
        viewBox="0 0 1440 80"
        className="pointer-events-none absolute -top-[1px] left-0 w-full text-[var(--color-bg-elevated)]"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,32 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-[family-name:var(--font-display)] text-lg">
          <span className="text-gradient">yuras</span>
          <span className="text-[var(--color-text-muted)]">.dev</span>
        </p>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="glass flex h-10 w-10 items-center justify-center rounded-full hover:border-[var(--color-dev)] transition-colors"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="glass flex h-10 w-10 items-center justify-center rounded-full hover:border-[var(--color-dev)] transition-colors"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="glass flex h-10 w-10 items-center justify-center rounded-full hover:border-[var(--color-dev)] transition-colors"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <p className="text-sm text-[var(--color-text-faint)]">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
