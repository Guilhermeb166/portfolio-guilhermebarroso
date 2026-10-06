'use client'

import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { SkillGroup } from "./Skills";

const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };

export default function SkillCard({ group, index }: Readonly<{ group: SkillGroup; index: number }>) {
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), springConfig);
    const contentX = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), springConfig);
    const contentY = useSpring(useTransform(mouseY, [0, 1], [-6, 6]), springConfig);

    const glareX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [0, 1], ["0%", "100%"]);
    const glare = useMotionTemplate`radial-gradient(320px circle at ${glareX} ${glareY}, rgba(16,185,129,0.22), transparent 60%)`;

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    }

    function handleMouseLeave() {
        mouseX.set(0.5);
        mouseY.set(0.5);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
            className="h-full select-none"
        >
            <motion.div
                style={{ rotateX, rotateY }}
                className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/60 transition-colors duration-500 will-change-transform hover:border-success/40"
            >
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-success/25 opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />

                <motion.div
                    style={{ background: glare }}
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative flex items-center gap-2 border-b border-border bg-background/40 px-5 py-3">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-success" />
                    <span className="ml-3 font-mono text-xs text-muted-foreground">{group.file}</span>
                </div>

                <motion.div style={{ x: contentX, y: contentY }} className="relative p-6">
                    <h3 className="text-xl font-bold text-foreground">
                        <span className="text-success">&lt;</span>
                        {group.title}
                        <span className="text-success"> /&gt;</span>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{group.description}</p>

                    <ul className="mt-6 flex flex-wrap gap-2.5">
                        {group.skills.map((skill, i) => (
                            <motion.li
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 0.3, delay: index * 0.1 + i * 0.05 },
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -3 }}
                                className="group/skill inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-2 text-sm text-foreground transition-colors hover:border-success/50 hover:bg-success/10"
                            >
                                <skill.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover/skill:text-success" />
                                {skill.name}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}