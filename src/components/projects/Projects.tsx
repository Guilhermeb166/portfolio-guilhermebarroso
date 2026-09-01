"use client";

import { motion } from "framer-motion";
import { projects } from './Projects-list'
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="relative bg-background py-24">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-sm font-semibold uppercase tracking-wide text-success">
                        Projetos
                    </p>
                    <h2 className="mt-2 max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">
                        Trabalhos que já coloquei em produção
                    </h2>
                    <p className="mt-4 max-w-xl text-muted-foreground">
                        Uma seleção de projetos profissionais e freelancers em que atuei.
                    </p>
                </motion.div>

                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} {...project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}