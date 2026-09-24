"use client";

import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

import Image from "next/image";
import HeroContent from "./HeroContent";
import HeroMockup from "./HeroMockup";

const socials = [
    { icon: FiGithub, href: "https://github.com/seu-usuario", label: "GitHub" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/seu-usuario", label: "LinkedIn" },
    { icon: FiInstagram, href: "https://instagram.com/seu-usuario", label: "Instagram" },
    { icon: FiMail, href: "mailto:voce@email.com", label: "Email" },
];

export default function Hero() {
    return (
        <section className="relative flex h-screen items-center overflow-hidden bg-background">
            <Image
                src="/hero-final-frame.jpg"
                alt="Guilherme Barroso"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-background/70" />
            <div className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-b from-transparent to-background" />

            <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
                {/* Coluna de texto */}
                <HeroContent 
                    socials={socials}
                />

                {/* Coluna visual (mockup) */}
                <HeroMockup/>
            </div>

            <style jsx>{`
                .orbit-ring {
                    border-radius: 9999px;
                    background: conic-gradient(
                        from 0deg,
                        transparent 0deg,
                        var(--success) 50deg,
                        transparent 140deg,
                        transparent 360deg
                    );
                    -webkit-mask: radial-gradient(
                        farthest-side,
                        transparent calc(100% - 2px),
                        #000 calc(100% - 2px)
                    );
                    mask: radial-gradient(
                        farthest-side,
                        transparent calc(100% - 2px),
                        #000 calc(100% - 2px)
                    );
                    filter: drop-shadow(0 0 10px var(--success));
                    animation: orbit-spin 6s linear infinite;
                }
                @keyframes orbit-spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </section>
    );
}