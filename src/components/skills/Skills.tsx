"use client";

import type { IconType } from "react-icons";
import { FiBox, FiDatabase, FiServer } from "react-icons/fi";
import { IoLogoFirebase } from "react-icons/io5";
import {
    SiCss,
    SiExpress,
    SiFigma,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMui,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiSupabase,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiSass,
    SiTailwindcss,
    SiTypescript,
    SiWordpress,
} from "react-icons/si";
import SkillCard from "./SkillCard";
import TitleSection from "../ui/TitleSection";
import SkillsIcon from "./SkillsIcon";

type Skill = { name: string; icon: IconType };

export type SkillGroup = {
    file: string;
    title: string;
    description: string;
    skills: Skill[];
};

const groups: SkillGroup[] = [
    {
        file: "frontend.tsx",
        title: "Frontend",
        description: "Interfaces modernas, responsivas e de alto desempenho.",
        skills: [
            { name: "TypeScript", icon: SiTypescript },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: SiReact },
            { name: "JavaScript", icon: SiJavascript },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss },
            { name: "Tailwind", icon: SiTailwindcss },
            { name: "Material UI", icon: SiMui },
            { name: "Sass", icon: SiSass },
        ],
    },
    {
        file: "backend.ts",
        title: "Backend",
        description: "APIs, regras de negócio e bancos de dados.",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "Prisma", icon: SiPrisma },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MySQL", icon: SiMysql },
            { name: "PL/SQL", icon: FiDatabase },
        ],
    },
    {
        file: "tools.config",
        title: "Developer Tools",
        description: "Ferramentas que uso no dia a dia para criar e entregar.",
        skills: [
            { name: "Git", icon: SiGit },
            { name: "Figma", icon: SiFigma },
            { name: "APIs REST", icon: FiServer },
            { name: "WordPress", icon: SiWordpress },
            { name: "ERP Sankhya", icon: FiBox },
            { name: "Firebase", icon: IoLogoFirebase},
            { name: "Supabase", icon: SiSupabase},
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative overflow-hidden bg-background py-24">
            <div className="mx-auto max-w-7xl px-6">
                <TitleSection
                    section="Skills"
                    title="Tecnologias & Ferramentas"
                    description="Do front-end ao banco de dados, uma stack completa para construir aplicações ponta a ponta."
                />

                <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {groups.map((group, i) => (
                        <SkillCard key={group.title} group={group} index={i}  />
                    ))}
                </div>
            </div>

            <div className="relative mt-16">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />
                <SkillsIcon groups={groups}/>
            </div>
        </section>
    );
}