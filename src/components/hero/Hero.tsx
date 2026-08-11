"use client";

import { FiArrowRight, FiDownload, FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

const socials = [
    { icon: FiGithub, href: "https://github.com/seu-usuario", label: "GitHub" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/seu-usuario", label: "LinkedIn" },
    { icon: FiInstagram, href: "https://instagram.com/seu-usuario", label: "Instagram" },
    { icon: FiMail, href: "mailto:voce@email.com", label: "Email" },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.8,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

export default function Hero() {
    return (
        <section className="relative flex h-screen items-center overflow-hidden bg-background">
            <Image
                src="/euPc.png"
                alt="Guilherme Barroso"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-background/70" />
            <div className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-b from-transparent to-background" />

            <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
                {/* Coluna de texto */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-6"
                >
                    <motion.p variants={itemVariants} className="text-sm text-muted-foreground">
                        Olá, meu nome é{" "}
                        <span className="font-semibold text-success">
                            Guilherme Barroso
                        </span>
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl font-bold leading-tight text-foreground sm:text-5xl"
                    >
                        Desenvolvedor{" "}
                        <span className="text-success">Front-End</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="max-w-md text-muted-foreground">
                        Sou um desenvolvedor com foco em front-end que cria sites modernos, responsivos e de alto desempenho.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-success px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-105"
                        >
                            Veja o meu trabalho
                            <FiArrowRight className="h-4 w-4" />
                        </a>
                        <a
                            href="/cv.pdf"
                            download
                            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                        >
                            Download CV
                            <FiDownload className="h-4 w-4" />
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center gap-3 pt-4">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-success hover:text-success"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Coluna visual (mockup) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
                    className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center"
                >
                    {/* glow de fundo */}
                    <div className="absolute h-64 w-64 rounded-full bg-success/20 blur-3xl" />

                    {/* anel girando */}
                    <div className="orbit-ring absolute h-80 w-80" />

                    {/* losango metálico */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -left-2 top-6 h-14 w-14 bg-gradient-to-br from-muted-foreground/40 to-border [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]"
                    />

                    {/* esferas flutuantes */}
                    <motion.div
                        animate={{ y: [0, -16, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute right-2 top-2 h-9 w-9 rounded-full bg-gradient-to-br from-muted-foreground/60 to-border shadow-lg shadow-black/40"
                    />
                    <motion.div
                        animate={{ y: [0, 14, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -right-6 bottom-16 h-6 w-6 rounded-full bg-gradient-to-br from-success/70 to-success/20 shadow-lg shadow-success/30"
                    />
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-6 left-4 h-5 w-5 rounded-full bg-gradient-to-br from-muted-foreground/50 to-border"
                    />

                    {/* mockup do editor de código */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 w-72 -rotate-3 rounded-lg border border-border bg-card/90 shadow-2xl shadow-black/60 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-success/80" />
                        </div>
                        <div className="space-y-1.5 p-4 font-mono text-[11px] leading-relaxed">
                            <p>
                                <span className="text-primary">const</span>{" "}
                                <span className="text-foreground">dev</span> ={" "}
                                <span className="text-success">"Guilherme"</span>;
                            </p>
                            <p>
                                <span className="text-primary">function</span>{" "}
                                <span className="text-foreground">build</span>() {"{"}
                            </p>
                            <p className="pl-3 text-muted-foreground">
                                return <span className="text-success">"amazing UI"</span>;
                            </p>
                            <p>{"}"}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
                .orbit-ring {
                    border-radius: 9999px;
                    background: conic-gradient(
                        from 0deg,
                        transparent 0deg,
                        var(--success) 50deg,
                        transparent 140deg,
                        transparent 360deg
                    );
                    -webkit-mask: radial-gradient(
                        farthest-side,
                        transparent calc(100% - 2px),
                        #000 calc(100% - 2px)
                    );
                    mask: radial-gradient(
                        farthest-side,
                        transparent calc(100% - 2px),
                        #000 calc(100% - 2px)
                    );
                    filter: drop-shadow(0 0 10px var(--success));
                    animation: orbit-spin 6s linear infinite;
                }
                @keyframes orbit-spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </section>
    );
}