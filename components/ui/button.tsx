"use client";

import { forwardRef, type ButtonHTMLAttributes, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  magnetic?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", magnetic = true, children, ...props }, forwardedRef) => {
    const innerRef = useRef<HTMLButtonElement>(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
      if (!magnetic || !innerRef.current) return;
      const rect = innerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setOffset({ x: x * 0.25, y: y * 0.25 });
    }

    function handleMouseLeave() {
      setOffset({ x: 0, y: 0 });
    }

    return (
      <motion.button
        ref={(node) => {
          innerRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" &&
            "bg-[var(--color-text)] text-[#07070c] hover:bg-[var(--color-dev-bright)] hover:text-white shadow-[var(--shadow-glow-dev)]",
          variant === "secondary" &&
            "glass text-[var(--color-text)] hover:border-[var(--color-dev)]",
          variant === "ghost" &&
            "text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
          className
        )}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
