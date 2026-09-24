"use client";

import { useRef } from "react";
import { FiGlobe, FiMonitor, FiSmartphone, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const stats = [
    { value: "8º", label: "Semestre Ciência da Computação" },
    { value: "2", label: "Empresas" },
    { value: "10+", label: "Tecnologias" },
];

const services = [
    {
        icon: FiGlobe,
        title: "Desenvolvimento Web Full-Stack",
        description:
            "Construção de aplicações web rápidas, otimizadas para SEO e altamente interativas, usando Next.js e frameworks modernos.",
    },
    {
        icon: FiSmartphone,
        title: "Desenvolvimento Mobile",
        description:
            "Aplicações multiplataforma com foco em performance e experiência nativa para iOS e Android.",
    },
    {
        icon: FiZap,
        title: "Interfaces Otimizadas",
        description:
            "Interfaces modernas, acessíveis e de alta performance, com foco em experiência do usuário e boas práticas de otimização.",
    },
    {
        icon: FiMonitor,
        title: "SaaS & Aplicações Desktop",
        description:
            "Arquitetura de sistemas back-end escaláveis e aplicações multiplataforma para necessidades corporativas robustas.",
    },
];

const experience = [
    {
        role: "Desenvolvedor Back-End Jr.",
        company: "BM Code",
        period: "Jun 2025 — Atualmente",
        description:
            "Desenvolvimento e manutenção de customizações no ERP Sankhya para clientes de diversos segmentos. Criação e otimização de procedures, functions e triggers em PL/SQL, além de eventos programáveis em Java para extensão das funcionalidades nativas do sistema.",
    },
    {
        role: "Estagiário de TI (Full-Stack)",
        company: "Óticas Visão",
        period: "Jan 2025 — Mai 2025",
        description:
            "Atuação como desenvolvedor full-stack com foco em front-end. Criação de um bot no Telegram com Python para automatizar o controle de frequência dos funcionários e desenvolvimento de um sistema de gestão de clientes que identifica clientes potenciais a partir do banco de dados.",
    },
    {
        role: "Desenvolvedor Front-End Freelancer",
        company: "Medalhas Brasil & Visiocorp",
        period: "Freelance",
        description:
            "Desenvolvimento de landing pages para os clientes Medalhas Brasil e Visiocorp, com foco em performance, responsividade e conversão.",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ServiceCard({
    icon: Icon,
    title,
    description,
    index,
}: {
    icon: typeof FiGlobe;
    title: string;
    description: string;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-[2rem] border border-border bg-card/60 p-8 backdrop-blur-xl transition-colors duration-500 hover:border-success/40"
        >
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-success/25 opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />
            <div
                className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: "linear-gradient(135deg, rgba(16,185,129,0.25) 0%, transparent 60%)",
                }}
                />

            <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-foreground/5 shadow-xl transition-all duration-300 hover:-rotate-6 hover:scale-110 cursor-pointer hover:bg-foreground/10">
                    <Icon className="h-10 w-10 text-success transition-colors" />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">{title}</h4>
                <p className="flex-grow text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export default function About() {
    return (
        <section id="about" className="relative bg-background py-24">
            <div className="mx-auto max-w-7xl px-6 ">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex justify-center items-center"
                >
                    <div className="flex flex-col items-start">
                        <motion.p
                            variants={itemVariants}
                            className="text-sm font-semibold uppercase tracking-wide text-success"
                        >
                            Sobre Mim
                        </motion.p>
                        <motion.h2
                            variants={itemVariants}
                            className="mt-2 max-w-2xl text-3xl font-bold text-foreground sm:text-4xl"
                        >
                            Da lógica de back-end a interfaces front-end
                        </motion.h2>
                    </div>

                    <motion.div variants={itemVariants} className="mt-8 max-w-2xl">
                        <p className="text-muted-foreground">
                            Desenvolvedor Full-Stack Júnior, atuando atualmente na BM Code
                            na criação e otimização de procedures, triggers e eventos
                            programáveis para customizações do ERP Sankhya, além de
                            construir interfaces modernas e responsivas com TypeScript e
                            Next.js. Busco agregar valor às equipes de tecnologia através
                            da automação de fluxos, código limpo e arquiteturas escaláveis.
                        </p>

                        <div className="mt-8 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <p className="text-3xl font-bold text-foreground">{s.value}</p>
                                    <p className="text-sm text-muted-foreground">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>


                </motion.div>

                <div className="mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-10"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.4em] text-success">
                            O Que Eu Faço
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                            Soluções para cada etapa do seu produto
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {services.map((service, i) => (
                            <ServiceCard key={service.title} {...service} index={i} />
                        ))}
                    </div>
                </div>

                <div className="mt-28">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mx-auto max-w-lg text-center"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.4em] text-success">
                            Linha do Tempo
                        </p>
                        <h3 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
                            Minha Trajetória
                        </h3>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Experiências profissionais, estudos e evolução constante na área de tecnologia.
                        </p>
                    </motion.div>

                    <div className="relative mt-16">
                        <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-success/50 via-success/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

                        <div className="space-y-12 md:space-y-0">
                            {experience.map((exp, index) => {
                                const isLeft = index % 2 === 0;
                                return (
                                    <div
                                        key={exp.company}
                                        className="relative flex items-center justify-between md:mb-16 last:mb-0"
                                    >
                                        <div
                                            className={cn(
                                                "hidden md:block w-5/12",
                                                isLeft ? "order-3" : "order-1"
                                            )}
                                        />

                                        <div className="absolute left-4 z-10 -translate-x-1/2 md:left-1/2">
                                            <div className="h-4 w-4 rounded-full border-2 border-background bg-success shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                                            <div className="absolute left-1/2 top-1/2 -z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-success/20 blur-md" />
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.4 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className={cn(
                                                "w-full pl-12 md:w-5/12 md:pl-0",
                                                isLeft ? "order-1 md:text-right" : "order-3 md:text-left"
                                            )}
                                        >
                                            <div className="group rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors duration-500 hover:border-success/30">
                                                <span className="mb-2 block text-sm font-bold text-success">
                                                    {exp.period}
                                                </span>
                                                <h4 className="text-lg font-semibold text-foreground transition-colors group-hover:text-success">
                                                    {exp.role}
                                                </h4>
                                                <p className="mb-3 text-sm text-muted-foreground">{exp.company}</p>
                                                <p className="text-sm leading-relaxed text-muted-foreground">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}