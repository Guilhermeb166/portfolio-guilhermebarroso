'use client'
import { motion } from "framer-motion";

export default function HeroMockup() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
            className="relative mx-auto flex h-105 w-full max-w-md items-center justify-center"
        >
            {/* glow de fundo */}
            <div className="absolute h-64 w-64 rounded-full bg-success/20 blur-3xl" />

            {/* anel girando */}
            <div className="orbit-ring absolute h-80 w-80" />

            {/* losango metálico */}
            <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-2 top-6 h-14 w-14 bg-linear-to-br from-muted-foreground/40 to-border [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]"
            />

            {/* esferas flutuantes */}
            <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-2 top-2 h-9 w-9 rounded-full bg-linear-to-br from-success/70 to-success/20 shadow-lg shadow-black/40"
            />
            <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 bottom-16 h-6 w-6 rounded-full bg-linear-to-br from-muted-foreground/60 to-border shadow-lg shadow-black/30"
            />
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-4 h-5 w-5 rounded-full bg-linear-to-br from-success/70 to-success/20 shadow-success/30"
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
                        <span className="text-success">"Guilherme"</span>
                    </p>
                    <p>
                        <span className="text-primary">function</span>{" "}
                        <span className="text-foreground">build</span>() {"{"}
                    </p>
                    <p className="pl-3 text-muted-foreground">
                        return <span className="text-success">"amazing UI"</span>
                    </p>
                    <p>{"}"}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}