'use client'
import type { IconType } from "react-icons";
import {  FiArrowRight,  FiDownload } from "react-icons/fi";
import { motion, type Variants } from "framer-motion";


type SocialItem = {
    icon: IconType,
    href: string,
    label:string
}
type Props = {
    readonly socials:SocialItem[]
}

export default function HeroContent({socials}: Props) {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.8,
                delayChildren: 0.1,
            },
        },
    };
    
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    return (
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
    )
}