"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover" | "text" | "hidden";

const ringStyles: Record<CursorState, { scale: number; opacity: number; backgroundColor: string; borderColor: string }> = {
    default: { scale: 1, opacity: 1, backgroundColor: "rgba(16,185,129,0)", borderColor: "rgba(250,250,250,0.35)" },
    hover: { scale: 1.8, opacity: 1, backgroundColor: "rgba(16,185,129,0.15)", borderColor: "rgba(16,185,129,0.9)" },
    text: { scale: 1, opacity: 0, backgroundColor: "rgba(16,185,129,0)", borderColor: "rgba(250,250,250,0.35)" },
    hidden: { scale: 1, opacity: 0, backgroundColor: "rgba(16,185,129,0)", borderColor: "rgba(250,250,250,0.35)" },
};

const spring = { stiffness: 250, damping: 24, mass: 0.6 };

export default function CustomCursor() {
    const [state, setState] = useState<CursorState>("hidden");
    const [pressed, setPressed] = useState(false);
    const firstMove = useRef(true);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const ringX = useSpring(x, spring);
    const ringY = useSpring(y, spring);

    useEffect(() => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

        const root = document.documentElement;
        root.classList.add("custom-cursor");

        const onMove = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
            if (firstMove.current) {
                ringX.jump(e.clientX);
                ringY.jump(e.clientY);
                firstMove.current = false;
            }
        };

        const onOver = (e: MouseEvent) => {
            const target = e.target as Element | null;
            if (target?.closest("input, textarea, select")) setState("text");
            else if (target?.closest("a, button, [role='button'], label")) setState("hover");
            else setState("default");
        };

        const onLeave = () => setState("hidden");
        const onDown = () => setPressed(true);
        const onUp = () => setPressed(false);

        window.addEventListener("mousemove", onMove);
        document.addEventListener("mouseover", onOver);
        document.addEventListener("mousedown", onDown);
        document.addEventListener("mouseup", onUp);
        root.addEventListener("mouseleave", onLeave);

        return () => {
            root.classList.remove("custom-cursor");
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onOver);
            document.removeEventListener("mousedown", onDown);
            document.removeEventListener("mouseup", onUp);
            root.removeEventListener("mouseleave", onLeave);
        };
    }, [x, y, ringX, ringY]);

    const visible = state === "default" || state === "hover";
    const ring = ringStyles[state];

    return (
        <>
            <motion.div
                style={{ x: ringX, y: ringY }}
                animate={{ ...ring, scale: pressed ? ring.scale * 0.8 : ring.scale }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="pointer-events-none fixed left-0 top-0 z-[200] -ml-[18px] -mt-[18px] h-9 w-9 rounded-full border"
            />
            <motion.div
                style={{ x, y }}
                animate={{ opacity: visible ? 1 : 0, scale: state === "hover" ? 0.5 : 1 }}
                transition={{ duration: 0.15 }}
                className="pointer-events-none fixed left-0 top-0 z-[200] -ml-1 -mt-1 h-2 w-2 rounded-full bg-success"
            />
        </>
    );
}