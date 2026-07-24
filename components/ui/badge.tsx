import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  track?: "dev" | "biz" | "neutral";
  className?: string;
}

export function Badge({ children, track = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-mono tracking-wide",
        track === "dev" && "tag-dev",
        track === "biz" && "tag-biz",
        track === "neutral" && "glass text-[var(--color-text-muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}
