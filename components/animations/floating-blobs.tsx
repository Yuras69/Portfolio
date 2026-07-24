"use client";

import { motion } from "framer-motion";

export function FloatingBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--color-dev) 0%, transparent 70%)" }}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-[-120px] h-[380px] w-[380px] rounded-full blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--color-cyan) 0%, transparent 70%)" }}
        animate={{ x: [0, -30, 20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-140px] left-1/3 h-[360px] w-[360px] rounded-full blur-[110px] opacity-70"
        style={{ background: "radial-gradient(circle, var(--color-biz) 0%, transparent 70%)" }}
        animate={{ x: [0, 25, -25, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
