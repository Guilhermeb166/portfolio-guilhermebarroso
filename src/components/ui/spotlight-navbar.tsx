"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { cn } from "@/lib/utils";

export interface NavItem {
    readonly label: string;
    readonly href: string;
}/*
interface: Aqui estamos criando as "regras" do que esse componente aceita. 
Um NavItem tem que ter um nome (label) e um link (href).*/

export interface SpotlightNavbarProps {
    readonly items?: NavItem[]; // o '?' significa que a propriedade é opcional
    readonly className?: string;
    readonly onItemClick?: (item: NavItem, index: number) => void;
    readonly defaultActiveIndex?: number;
}

export function SpotlightNavbar({
    items = [
        { label: "Home", href: "#home" },
        /**Isso é um valor padrão (Default Parameter). Se nenhum item for passado, ele usa essa lista de exemplo. */
    ],
    className,
    onItemClick,
    defaultActiveIndex = 0,
}: SpotlightNavbarProps) {
    const navRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
    const [hoverX, setHoverX] = useState<number | null>(null);
    //const [isDark, setIsDark] = useState(false);

    // Refs for the "light" positions so we can animate them imperatively
    const spotlightX = useRef(0);
    const ambienceX = useRef(0);

    // useEffect(() => {
    //     const checkTheme = () => {
    //         setIsDark(document.documentElement.classList.contains('dark'));
    //     };
    //     checkTheme();
    //     const observer = new MutationObserver(checkTheme);
    //     observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    //     return () => observer.disconnect();
    // }, []);

    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = nav.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setHoverX(x);
            // Direct update for immediate feedback (no spring for the mouse itself, feels snappier)
            spotlightX.current = x;
            nav.style.setProperty("--spotlight-x", `${x}px`);
        };

        const handleMouseLeave = () => {
            setHoverX(null);
            // When mouse leaves, spring the spotlight back to the active item
            const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
            if (activeItem) {
                const navRect = nav.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();
                const targetX = itemRect.left - navRect.left + itemRect.width / 2;

                animate(spotlightX.current, targetX, {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    onUpdate: (v) => {
                        spotlightX.current = v;
                        nav.style.setProperty("--spotlight-x", `${v}px`);
                    }
                });
            }
        };

        nav.addEventListener("mousemove", handleMouseMove);
        nav.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            nav.removeEventListener("mousemove", handleMouseMove);
            nav.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [activeIndex]);

    // Handle the "Ambience" (Active Item) Movement
    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;
        const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

        if (activeItem) {
            const navRect = nav.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            const targetX = itemRect.left - navRect.left + itemRect.width / 2;

            animate(ambienceX.current, targetX, {
                type: "spring",
                stiffness: 200,
                damping: 20,
                onUpdate: (v) => {
                    ambienceX.current = v;
                    nav.style.setProperty("--ambience-x", `${v}px`);
                },
            });
        }
    }, [activeIndex]);

    const handleItemClick = (item: NavItem, index: number) => {
        setActiveIndex(index);
        onItemClick?.(item, index);
        const target = document.querySelector(item.href);
        target?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={cn("fixed top-0 left-1/2 -translate-x-1/2 z-20 flex justify-center pt-3", className)}>
            <nav
                ref={navRef}
                className={cn(
                    "relative h-11 rounded-full overflow-hidden transition-all duration-300",
                    "bg-card/70 backdrop-blur-md border border-border shadow-lg shadow-black/40"
                )}
            >
                <ul className="relative flex items-center h-full px-2 gap-0 z-10">
                    {items.map((item, idx) => (
                        <li key={item.href} className="relative h-full flex items-center justify-center">
                            <a
                                href={item.href}
                                data-index={idx}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleItemClick(item, idx);
                                }}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                                    activeIndex === idx
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-1 opacity-0 transition-opacity duration-300"
                    style={{
                        opacity: hoverX !== null ? 1 : 0,
                        background: `
                            radial-gradient(
                                120px circle at var(--spotlight-x) 100%, 
                                var(--spotlight-color, rgba(255,255,255,0.15)) 0%, 
                                transparent 50%
                            )
                        `
                    }}
                />

                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-0.5 z-2"
                    style={{
                        background: `
                            radial-gradient(
                                60px circle at var(--ambience-x) 0%, 
                                var(--ambience-color, rgba(255,255,255,1)) 0%, 
                                transparent 100%
                            )
                        `
                    }}
                />
            </nav>
        </div>
    );
    
}
