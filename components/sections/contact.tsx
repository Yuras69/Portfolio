"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const senderEmail = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email: senderEmail,
          message,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error ?? "Message could not be delivered");
      }
      if (result.success !== true) {
        throw new Error(result.error ?? "Message could not be delivered");
      }
      form.reset();
      setStatus("sent");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Could not send message. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Whether it's a product to build or a partnership to discuss — I read every message."
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="glass rounded-3xl p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 group"
              >
                <span className="tag-dev flex h-11 w-11 items-center justify-center rounded-xl">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">
                  {profile.email}
                </span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-4 group"
              >
                <span className="tag-dev flex h-11 w-11 items-center justify-center rounded-xl">
                  <Github className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">
                  GitHub
                </span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-4 group"
              >
                <span className="tag-biz flex h-11 w-11 items-center justify-center rounded-xl">
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">
                  LinkedIn
                </span>
              </a>
            </div>

            <a href={profile.resumeUrl} download className="mt-8 block">
              <Button variant="secondary" className="w-full">
                <Download className="h-4 w-4" /> Download Resume
              </Button>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-[var(--color-text-muted)]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl bg-white/5 border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-cyan)] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-[var(--color-text-muted)]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl bg-white/5 border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-cyan)] transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-[var(--color-text-muted)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl bg-white/5 border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-cyan)] transition-colors"
                  placeholder="Tell me about the project or opportunity..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full" disabled={status === "submitting"}>
                {status === "idle" && (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
                {status === "submitting" && "Sending..."}
              </Button>
              {status === "sent" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} role="status" className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" /> Message sent — thank you!
                </motion.p>
              )}
              {status === "error" && (
                <p role="alert" className="text-sm text-red-400">
                  {errorMessage}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
