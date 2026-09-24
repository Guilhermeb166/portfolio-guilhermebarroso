"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import HeroContent from "./HeroContent";
import HeroMockup from "./HeroMockup";
import { HERO_SCROLL_VH, SCRUB_END } from "./heroScrollConfig";

const socials = [
    { icon: FiGithub, href: "https://github.com/seu-usuario", label: "GitHub" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/seu-usuario", label: "LinkedIn" },
    { icon: FiInstagram, href: "https://instagram.com/seu-usuario", label: "Instagram" },
    { icon: FiMail, href: "mailto:voce@email.com", label: "Email" },
];

// Interpola `p` dentro de [x0, x1] pra um valor entre y0 e y1,
// sempre travado (clampado) fora desse intervalo.
function mapRange(p: number, x0: number, x1: number, y0: number, y1: number) {
    if (p <= x0) return y0;
    if (p >= x1) return y1;
    const t = (p - x0) / (x1 - x0);
    return y0 + t * (y1 - y0);
}

function overlayFor(p: number) {
    if (p <= 0.06) return mapRange(p, 0, 0.06, 0.15, 0.5);
    if (p <= SCRUB_END) return 0.5;
    if (p <= 0.8) return mapRange(p, SCRUB_END, 0.8, 0.5, 0.68);
    return 0.68;
}

function welcomeFor(p: number) {
    if (p <= 0.1) return 0;
    if (p <= 0.2) return mapRange(p, 0.1, 0.2, 0, 1);
    if (p <= 0.45) return 1;
    if (p <= 0.55) return mapRange(p, 0.45, 0.55, 1, 0);
    return 0;
}

function contentFor(p: number) {
    return mapRange(p, SCRUB_END, SCRUB_END + 0.1, 0, 1);
}

export default function HeroVideo() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const welcomeRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [duration, setDuration] = useState(0);
    const targetTimeRef = useRef(0);
    const [contentInteractive, setContentInteractive] = useState(false);

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateDuration = () => {
            if (Number.isFinite(video.duration) && video.duration > 0) {
                setDuration(video.duration);
            }
        };

        const handleLoadedMetadata = () => {
            if (!Number.isFinite(video.duration)) {
                video.currentTime = 1e9;
                const onSeeked = () => {
                    video.currentTime = 0;
                    video.removeEventListener("seeked", onSeeked);
                    updateDuration();
                };
                video.addEventListener("seeked", onSeeked);
            } else {
                updateDuration();
            }
            video.play().then(() => video.pause()).catch(() => {});
        };

        if (video.readyState >= 1) {
            handleLoadedMetadata();
        }

        video.addEventListener("loadedmetadata", handleLoadedMetadata);
        video.addEventListener("durationchange", updateDuration);

        return () => {
            video.removeEventListener("loadedmetadata", handleLoadedMetadata);
            video.removeEventListener("durationchange", updateDuration);
        };
    }, []);

    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        if (duration) {
            const videoProgress = Math.min(progress / SCRUB_END, 1);
            targetTimeRef.current = videoProgress >= 0.995 ? duration : videoProgress * duration;
        }

        if (overlayRef.current) {
            overlayRef.current.style.opacity = String(overlayFor(progress));
        }

        const welcomeOpacity = welcomeFor(progress);
        if (welcomeRef.current) {
            welcomeRef.current.style.opacity = String(welcomeOpacity);
            welcomeRef.current.style.transform = `translateY(${(1 - mapRange(progress, 0.1, 0.2, 0, 1)) * 24}px)`;
        }

        const contentOpacity = contentFor(progress);
        if (contentRef.current) {
            contentRef.current.style.opacity = String(contentOpacity);
            contentRef.current.style.transform = `translateY(${(1 - contentOpacity) * 24}px)`;
        }
        setContentInteractive(contentOpacity > 0.5);
    });

    useEffect(() => {
        let frameId: number;

        const tick = () => {
            const video = videoRef.current;
            if (video && duration) {
                const diff = targetTimeRef.current - video.currentTime;
                if (Math.abs(diff) > 0.02) {
                    video.currentTime += diff * 0.15;
                } else if (diff !== 0) {
                    video.currentTime = targetTimeRef.current;
                }
            }
            frameId = requestAnimationFrame(tick);
        };

        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, [duration]);

    return (
        <div
            ref={wrapperRef}
            className="relative bg-background"
            style={{ height: `${HERO_SCROLL_VH}vh` }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="sticky top-0 h-screen w-full overflow-hidden"
            >
                <video
                    ref={videoRef}
                    src="/eu-programando2-scroll.mp4"
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div ref={overlayRef} className="absolute inset-0 bg-background" style={{ opacity: 0.15 }} />

                <div
                    ref={welcomeRef}
                    className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
                    style={{ opacity: 0 }}
                >
                    <p className="text-lg text-muted-foreground sm:text-xl">Bem-vindo</p>
                    <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-6xl">
                        Meu nome é <span className="text-success">Guilherme</span>
                    </h1>
                </div>

                <div
                    ref={contentRef}
                    className="absolute inset-0 flex items-center"
                    style={{ opacity: 0, pointerEvents: contentInteractive ? "auto" : "none" }}
                >
                    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
                        <HeroContent socials={socials} />
                        <HeroMockup />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}