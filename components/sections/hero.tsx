"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/animations/text-reveal";
import { FloatingBlobs } from "@/components/animations/floating-blobs";
import { Particles } from "@/components/animations/particles";
import { Spotlight } from "@/components/animations/spotlight";
import { TiltCard } from "@/components/animations/tilt-card";
import { useTypewriter } from "@/hooks/use-typewriter";
import { ResumePDF } from "@/components/ResumePDF";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const typed = useTypewriter(profile.roles, { pauseDuration: 1800 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <FloatingBlobs />
      <Particles count={36} />
      <Spotlight containerRef={containerRef} />

      <div className="section-container relative z-10 grid gap-14 md:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="eyebrow mb-5 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-cyan)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-cyan)]" />
            </span>
            {profile.availability}
          </motion.p>

          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            <TextReveal text="Hi, I'm" delay={0.15} />
            <br />
            <TextReveal text={profile.name} delay={0.3} className="text-gradient" />
          </h1>

          <div className="mt-6 h-8 font-mono text-lg sm:text-xl text-[var(--color-text-muted)]">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-[var(--color-cyan)] animate-pulse" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 max-w-lg text-[var(--color-text-muted)] leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {isClient && (
              <PDFDownloadLink
                document={<ResumePDF />}
                fileName="Yuras_Pokharel_Resume.pdf"
              >
                {({ loading }) => (
                  <Button variant="primary" disabled={loading}>
                    <Download className="h-4 w-4" aria-hidden="true" />
                    {loading ? "Generating..." : "Download Resume"}
                  </Button>
                )}
              </PDFDownloadLink>
            )}
            <a href="#contact">
              <Button variant="secondary">Get in touch</Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-9 flex items-center gap-4"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <TiltCard className="relative aspect-[4/5] w-full rounded-3xl">
            <div className="glass-strong noise relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/yuras.jpeg"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 768px) 320px, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070c]/60 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-strong absolute -left-6 top-8 flex items-center gap-2 rounded-2xl px-4 py-2.5"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-dev-bright)]" />
              <span className="text-xs font-mono">React / Next.js</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass-strong absolute -right-4 bottom-16 flex items-center gap-2 rounded-2xl px-4 py-2.5"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-biz-bright)]" />
              <span className="text-xs font-mono">Biz Development</span>
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-faint)] hover:text-[var(--color-text)]"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}