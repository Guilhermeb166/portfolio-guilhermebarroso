'use client'

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Timeline() {

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

    return (
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
                <div className="absolute left-4 h-full w-0.5 bg-linear-to-b from-success/50 via-success/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

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
    )
}