'use client'
import { motion, Variants } from "framer-motion";

export default function AboutMe() {

    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };


    return (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex justify-center items-center"
            >
                <div className="flex flex-col items-start">
                    <motion.p
                        variants={itemVariants}
                        className="text-sm font-semibold uppercase tracking-wide text-success"
                    >
                        Sobre Mim
                    </motion.p>
                    <motion.h2
                        variants={itemVariants}
                        className="mt-2 max-w-2xl text-3xl font-bold text-foreground sm:text-4xl"
                    >
                        Da lógica de back-end a interfaces front-end
                    </motion.h2>
                </div>

                <motion.div variants={itemVariants} className=" mt-8 flex flex-col gap-7 max-w-2xl">
                    <p className="text-muted-foreground">
                        Desenvolvedor Full-Stack Júnior, atuando atualmente na BM Code
                        na criação e otimização de procedures, triggers e eventos
                        programáveis para customizações do ERP Sankhya, além de
                        construir interfaces modernas e responsivas com TypeScript e
                        Next.js. Busco agregar valor às equipes de tecnologia através
                        da automação de fluxos, código limpo e arquiteturas escaláveis.
                    </p>
                </motion.div>


            </motion.div>
    )
}