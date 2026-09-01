
import {
    FiArrowUpRight,
    type FiLayers,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = Readonly<{
    icon: typeof FiLayers;
    image?: string;
    cover?: React.ComponentType;
    category: string;
    year: string;
    title: string;
    description: string;
    tags: readonly string[]; // Marking the array itself as readonly is also good practice
    href?: string;
    index: number;
}>;

export function ProjectCard({
    icon: Icon,
    image,
    cover: Cover,
    category,
    year,
    title,
    description,
    tags,
    href,
    index,
}: ProjectCardProps) {
    const Wrapper = href ? "a" : "div";

    const imageProject = () =>{
        if (image) {
            return (
                    <>
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-card via-card/10 to-transparent" />
                    </>
                )
        } else if (Cover) {
            return (
                <Cover />
            )
        }
        else return null
    } 

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            className="h-full"
        >
            <Wrapper
                {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/60 transition-colors duration-500 hover:border-success/40"
            >
                <div className="relative h-56 w-full overflow-hidden">
                    {imageProject()}
                </div>


                <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-success">
                            <Icon className="h-3.5 w-3.5" />
                            {category}
                        </span>
                        <span className="text-xs text-muted-foreground">{year}</span>
                    </div>

                    <h4 className="mb-2 text-lg font-bold text-foreground">{title}</h4>
                    <p className="mb-6 flex-1 text-sm text-muted-foreground">{description}</p>

                    <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <FiArrowUpRight className="h-5 w-5 shrink-0 text-success transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                </div>
            </Wrapper>
        </motion.div>
    );
}