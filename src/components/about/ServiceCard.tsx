"use client"

import { FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ServiceCard({
    icon: Icon,
    title,
    description,
    index,
}: Readonly<{
    icon: typeof FiGlobe;
    title: string;
    description: string;
    index: number;
}>) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            className="group relative h-60 w-130 overflow-hidden rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-xl transition-colors duration-500 hover:border-success/40"
        >
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-2xl bg-success/25 opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />
            <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: "linear-gradient(135deg, rgba(16,185,129,0.25) 0%, transparent 60%)",
                }}
            />

            <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 flex p-2 max-w-15 items-center justify-center rounded-2xl border border-border bg-foreground/5 shadow-xl transition-all duration-300 hover:-rotate-6 hover:scale-110 cursor-pointer hover:bg-foreground/10">
                    <Icon className="h-10 w-10 text-success transition-colors" />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">{title}</h4>
                <p className="grow text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}