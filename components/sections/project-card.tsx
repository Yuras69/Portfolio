"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group glass overflow-hidden rounded-2xl hover:border-[var(--color-dev)]/50 transition-colors duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070c] via-transparent to-transparent opacity-70" />
      </div>

      <div className="p-5">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} track="neutral">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <Github className="h-4 w-4" /> Code
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="ml-auto text-sm font-medium text-[var(--color-cyan)] hover:underline">
                Details
              </button>
            </DialogTrigger>
            <DialogContent open={open}>
              <DialogTitle className="font-[family-name:var(--font-display)] text-2xl font-semibold pr-8">
                {project.title}
              </DialogTitle>
              <div className="relative mt-4 aspect-video overflow-hidden rounded-xl">
                <Image src={project.image} alt="" fill className="object-cover" />
              </div>
              <DialogDescription className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
                {project.longDescription}
              </DialogDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} track="neutral">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={project.github} target="_blank" rel="noreferrer noopener">
                  <Button variant="secondary">
                    <Github className="h-4 w-4" /> View Code
                  </Button>
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer noopener">
                    <Button variant="primary">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.div>
  );
}
