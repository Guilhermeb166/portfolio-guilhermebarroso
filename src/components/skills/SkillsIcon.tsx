'use client'
import {
    motion,
} from "framer-motion";
import { SkillGroup } from "./Skills";


export default function SkillsIcon({groups}: Readonly<{ groups: SkillGroup[]; }>) {
    const allSkills = groups.flatMap((group) => group.skills);
    const marquee = [...allSkills, ...allSkills];
    return (
        <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
            className="flex w-max"
        >
            {marquee.map((skill, i) => (
                <div
                    key={`${skill.name}-${i}`}
                    className="mr-10 flex items-center gap-3 text-muted-foreground/60"
                >
                    <skill.icon className="h-6 w-6" />
                    <span className="text-lg font-semibold">{skill.name}</span>
                </div>
            ))}
        </motion.div>
    )
}