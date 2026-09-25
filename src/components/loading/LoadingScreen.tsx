"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function LoadingScreen() {
    const [visible, setVisible] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const duration = 3000
        const start = performance.now()
        let frameId: number

        const tick = (now: number) => {
            const elapsed = now - start
            const pct = Math.min(100, Math.round((elapsed / duration) * 100))
            setProgress(pct)
            if (elapsed < duration) {
                frameId = requestAnimationFrame(tick);
            }
        }
        frameId = requestAnimationFrame(tick)
        const timer = setTimeout(() => setVisible(false), duration)
        return () => {
            cancelAnimationFrame(frameId)
            clearTimeout(timer)
        }
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-background"
                >
                    <div className="h-12 w-12 animate-spin rounded-full border-2 border-muted-foreground/20 border-t-success" />
                    <div className="flex w-48 flex-col items-center gap-2">
                        <span className="text-sm font-medium text-foreground">{progress}%</span>
                        <div className="h-1 w-full overflow-hidden rounded-full bg-muted-foreground/20">
                            <div
                                className="h-full rounded-full bg-success"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}