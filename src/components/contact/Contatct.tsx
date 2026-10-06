"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { CONTACT } from "./ContactInfo";

const channels = [
    { icon: FaWhatsapp, label: "WhatsApp", value: CONTACT.phoneLabel, href: CONTACT.whatsappUrl },
    { icon: FiMail, label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: FiLinkedin, label: "LinkedIn", value: "guilherme-barroso", href: CONTACT.linkedin },
    { icon: FiGithub, label: "GitHub", value: "Guilhermeb166", href: CONTACT.github },
];

const inputClass =
    "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-success focus:ring-2 focus:ring-success/20";

export default function Contact() {
    const [sent, setSent] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = String(data.get("name") ?? "");
        const email = String(data.get("email") ?? "");
        const message = String(data.get("message") ?? "");

        const text = `Olá, Guilherme! Me chamo ${name} (${email}).\n\n${message}`;
        window.open(
            `${CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`,
            "_blank",
            "noopener,noreferrer",
        );

        e.currentTarget.reset();
        setSent(true);
    }

    return (
        <section id="contact" className="relative overflow-hidden bg-background py-24">
            <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-160 -translate-x-1/2 rounded-full bg-success/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-medium text-success">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                            </span>
                            Disponível para novos projetos
                        </span>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-success">
                            Contato
                        </p>
                        <h2 className="mt-2 max-w-md text-3xl font-bold text-foreground sm:text-4xl">
                            Vamos construir algo <span className="text-success">juntos?</span>
                        </h2>
                        <p className="mt-4 max-w-md text-muted-foreground">
                            Tem um projeto, uma ideia ou uma vaga em mente? Me chame por qualquer um dos canais
                            abaixo ou use o formulário. Respondo o mais rápido possível.
                        </p>

                        <ul className="mt-8 flex flex-col gap-3">
                            {channels.map(({ icon: Icon, label, value, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-4 transition-colors duration-300 hover:border-success/40"
                                    >
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-foreground/5 text-success transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block text-xs text-muted-foreground">{label}</span>
                                            <span className="block truncate text-sm font-semibold text-foreground">
                                                {value}
                                            </span>
                                        </span>
                                        <FiArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-success" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="relative self-start overflow-hidden rounded-3xl border border-border bg-card/60"
                    >
                        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-success/20 blur-[80px]" />

                        <div className="relative flex items-center gap-2 border-b border-border bg-background/40 px-5 py-3">
                            <span className="h-3 w-3 rounded-full bg-red-500" />
                            <span className="h-3 w-3 rounded-full bg-yellow-400" />
                            <span className="h-3 w-3 rounded-full bg-success" />
                            <span className="ml-3 font-mono text-xs text-muted-foreground">mensagem.tsx</span>
                        </div>

                        <form onSubmit={handleSubmit} className="relative flex flex-col gap-5 p-6 sm:p-8">
                            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                                Nome
                                <input
                                    name="name"
                                    required
                                    placeholder="Como você se chama?"
                                    className={inputClass}
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                                E-mail
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="seu@email.com"
                                    className={inputClass}
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                                Mensagem
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Conte um pouco sobre o seu projeto..."
                                    className={`${inputClass} resize-none`}
                                />
                            </label>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-success px-6 py-3 text-sm font-bold text-background transition-transform hover:scale-[1.02]"
                            >
                                Enviar mensagem
                                <FiSend className="h-4 w-4" />
                            </button>

                            {sent && (
                                <p className="text-center text-xs text-success">
                                    Pronto! Sua mensagem foi aberta no WhatsApp, é só enviar por lá.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}