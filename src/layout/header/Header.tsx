"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { SpotlightNavbar } from "@/components/ui/spotlight-navbar";
import { HERO_SCROLL_VH } from "@/components/hero/heroScrollConfig";

export default function Header() {
    const [heroHeightPx, setHeroHeightPx] = useState(Number.POSITIVE_INFINITY);

    useEffect(() => {
        const updateHeight = () => setHeroHeightPx((window.innerHeight * HERO_SCROLL_VH) / 100);
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [heroHeightPx - 300, heroHeightPx], [0, 1]);
    const [interactive, setInteractive] = useState(false);

    useMotionValueEvent(opacity, "change", (v) => setInteractive(v > 0.5));

    return (
        <motion.div style={{ opacity, pointerEvents: interactive ? "auto" : "none" }}>
            <SpotlightNavbar
                items={[
                    { label: "Sobre", href: "#about" },
                    { label: "Projetos", href: "#projects" },
                    { label: "Skills", href: "#skills" },
                    { label: "Contato", href: "#contact" },
                ]}
            />
        </motion.div>
    );
}