"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import Image from "next/image";
import type { projects } from "./Projects-list";

type Project = (typeof projects)[number];

type ProjectModalProps = Readonly<{
    project: Project | null;
    onClose: () => void;
}>;

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    const Icon = project?.icon;
    const Cover = project?.cover;

    useEffect(() => {
        if (!project) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [project, onClose]);

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
                >
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label={project.title}
                        initial={{ opacity: 0, y: 24, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.97 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-card"
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Fechar"
                            className="absolute right-4 top-4 z-10 rounded-full bg-background/70 p-2 text-foreground transition-colors hover:bg-background"
                        >
                            <FiX className="h-5 w-5" />
                        </button>

                        <div className="relative h-56 w-full overflow-hidden sm:h-72">
                            {project.image ? (
                                <>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 672px"
                                        className="object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/10 to-transparent" />
                                </>
                            ) : Cover ? (
                                <Cover />
                            ) : null}
                        </div>

                        <div className="p-6 sm:p-8">
                            <div className="mb-3 flex items-center justify-between">
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-success">
                                    {Icon && <Icon className="h-3.5 w-3.5" />}
                                    {project.category}
                                </span>
                                <span className="text-xs text-muted-foreground">{project.year}</span>
                            </div>

                            <h3 className="mb-3 text-2xl font-bold text-foreground">{project.title}</h3>
                            <p className="text-muted-foreground">{project.details}</p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-success px-6 py-3 text-sm font-bold text-success-foreground transition-opacity hover:opacity-90"
                            >
                                Visitar projeto
                                <FiArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}