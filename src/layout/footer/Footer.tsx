import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/components/contact/ContactInfo";
import Link from "next/link";

const links = [
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contato", href: "#contact" },
];

const socials = [
    { icon: FiGithub, href: CONTACT.github, label: "GitHub" },
    { icon: FiLinkedin, href: CONTACT.linkedin, label: "LinkedIn" },
    { icon: FaWhatsapp, href: CONTACT.whatsappUrl, label: "WhatsApp" },
    { icon: FiMail, href: `mailto:${CONTACT.email}`, label: "E-mail" },
];

export default function Footer() {
    return (
        <footer className="relative mt-auto border-t border-border bg-background">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-success/60 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 py-14">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    <div>
                        <p className="text-2xl font-bold text-foreground">
                            Guilherme<span className="text-success">.</span>
                        </p>
                        <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                            Desenvolvedor Full-Stack criando experiências web modernas, rápidas e escaláveis.
                        </p>
                    </div>

                    <nav aria-label="Rodapé">
                        <p className="text-xs font-semibold uppercase tracking-wide text-success">Navegação</p>
                        <ul className="mt-4 flex flex-col gap-2">
                            {links.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-success"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-success">Redes</p>
                        <div className="mt-4 flex items-center gap-3">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-success hover:text-success"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Guilherme Barroso. Feito com Next.js, Tailwind e muito café.
                    </p>

                    <Link
                        href="#about"
                        className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-success"
                    >
                        Voltar ao topo
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:-translate-y-1 group-hover:border-success">
                            <FiArrowUp className="h-4 w-4" />
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}