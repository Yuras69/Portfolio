"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of both tracks"
          description="Dev work and business development, running in parallel rather than in sequence."
        />

        <div className="relative mt-16 pl-8 sm:pl-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[7px] sm:left-[11px] top-1 bottom-1 w-[2px] bg-gradient-to-b from-[var(--color-dev)] via-[var(--color-cyan)] to-[var(--color-biz)]"
          />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span
                  className={`absolute -left-8 sm:-left-10 top-1.5 h-4 w-4 rounded-full ring-4 ring-[var(--color-bg)] ${
                    item.track === "dev" ? "bg-[var(--color-dev-bright)]" : "bg-[var(--color-biz-bright)]"
                  }`}
                  aria-hidden="true"
                />

                <div className="glass rounded-2xl p-6 hover:border-white/20 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 justify-between">
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                        {item.role}
                      </h3>
                      <p className="text-sm text-[var(--color-text-faint)]">{item.organization}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge track={item.track}>{item.track === "dev" ? "DEV" : "BIZ"}</Badge>
                      <span className="font-mono text-xs text-[var(--color-text-faint)]">
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm text-[var(--color-text-muted)] leading-relaxed"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
