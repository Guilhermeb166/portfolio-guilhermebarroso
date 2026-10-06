import React from 'react'
import {motion} from "framer-motion"
type sectionInfo = Readonly<{
    section: string,
    title: string,
    description: string
}>
export default function TitleSection({section,title,description}: sectionInfo) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <p className="text-sm font-semibold uppercase tracking-wide text-success">
                {section}
            </p>
            <h2 className="mt-2 max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">
                {title}
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
                {description}
            </p>
        </motion.div>
    )
}