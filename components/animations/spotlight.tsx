"use client";

import { useRef } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function Spotlight({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const { x, y } = useMousePosition(containerRef);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, #6d5ef822, transparent 70%)`,
      }}
    />
  );
}
