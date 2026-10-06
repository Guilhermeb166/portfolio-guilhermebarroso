"use client";

import { FiGlobe, FiMonitor, FiSmartphone, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import Timeline from "./Timeline";
import AboutMe from "./AboutMe";

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

export default function About() {
    return (
        <section id="about" className="relative bg-background py-24">
            <div className="mx-auto max-w-7xl px-6 ">
                
                <AboutMe/>

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

                    <div className="flex justify-center flex-wrap gap-15">
                        {services.map((service, i) => (
                            <ServiceCard key={service.title} {...service} index={i} />
                        ))}
                    </div>
                </div>

                <Timeline />
                
            </div>
        </section>
    );
}