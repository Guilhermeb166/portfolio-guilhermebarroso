import { FiAward, FiDollarSign, FiEye, FiLayers, FiShield } from "react-icons/fi";
import { ApiTaskManagerCover } from "./Covers";

export const projects = [
    {
        icon: FiLayers,
        image: "/projects/taskManager.png",
        category: "SaaS",
        year: "2026",
        title: "TaskManager",
        description:
                "Plataforma de gestão de projetos, tarefas e equipes, com controle de permissões por empresa.",
        details: "Escreva aqui o texto completo: o problema que resolve, o que você construiu, desafios técnicos, resultado...",
        tags: ["Next.js", "Firebase", "Tailwind", "googleapis", "Material-UI"],
        href: "https://taskmanager.nextsolve.com.br/",
    },
    {
        icon: FiShield,
        cover: ApiTaskManagerCover,
        category: "API",
        year: "2026",
        title: "API TaskManager",
        description:
            "Serviço de licenciamento e cobrança do TaskManager: valida appKeys, processa assinaturas via Asaas e expira licenças automaticamente.",
        details: "Escreva aqui o texto completo: o problema que resolve, o que você construiu, desafios técnicos, resultado...",
        tags: ["Node.js", "TypeScript", "Prisma", "Redis", "Supabase"],
        href: "https://api-taskmanager.nextsolve.com.br/",
    },
    {
        icon: FiEye,
        image: "/projects/VisioCorp.webp",
        category: "Landing Page",
        year: "2026",
        title: "VisioCorp",
        description:
            "Site institucional para o setor óptico, com foco em conversão e apresentação de serviços.",
        details: "Escreva aqui o texto completo: o problema que resolve, o que você construiu, desafios técnicos, resultado...",
        tags: ["Next.js", "Tailwind", "Material-UI"],
        href: "https://www.visiocorp.com.br/",
    },
    {
        icon: FiAward,
        image: "/projects/medalhasBrasil.png",
        category: "Landing Page",
        year: "2026",
        title: "Medalhas Brasil",
        description:
            "Catálogo institucional de medalhas para eventos esportivos, com apresentação de produtos.",
        details: "Escreva aqui o texto completo: o problema que resolve, o que você construiu, desafios técnicos, resultado...",
        tags: ["Next.js", "Tailwind", "Material-UI"],
        href: "https://www.medalhasbrasil.com/",
    },
    {
        icon: FiDollarSign,
        image: "/projects/controleFinanceiro.png",
        category: "Dashboard",
        year: "2025",
        title: "Controle Financeiro",
        description:
            "Aplicação para controle de entradas, saídas e extratos financeiros pessoais.",
        details: "Escreva aqui o texto completo: o problema que resolve, o que você construiu, desafios técnicos, resultado...",
        tags: ["Next.js", "Tailwind", "Material-UI", "Firebase"],
        href: "https://meu-controle-financeiro-web.vercel.app/",
    },

];