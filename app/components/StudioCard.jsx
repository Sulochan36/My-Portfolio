import { Eye, Github } from "lucide-react"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { normalize, techIconMap, DEFAULT_TECH_ICON } from '../lib/utils';
import StudioCoverFallback from "./StudioCoverFallback";

const TYPE_LABELS = {
    projects: "Project",
    experiments: "Experiment",
    learnings: "Learning",
    blogs: "Blog",
}

const PLACEHOLDER_IMAGE = "/studio/placeholder.png"

export default function StudioCard({ item }) {
    const {
        type,
        slug,
        title,
        description,
        cover,
        techstack = [],
        livePreview,
        githubLink,
    } = item

    const imageSrc = cover || PLACEHOLDER_IMAGE
    const href = `/studio/${type}/${slug}`

    return (
        <Link
            href={href}
            className="relative max-w-sm rounded-lg bg-transparent flex flex-col gap-5 group hover:shadow-[0_3px_10px_rgb(21,93,252,0.3)] transition-all duration-500"
        >
            {/* animated borders */}
            <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/40 rounded-tl-lg transition-all duration-500 group-hover:w-0 group-hover:h-0" />
            <span className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/40 rounded-tr-lg transition-all duration-500 group-hover:w-0 group-hover:h-0" />
            <span className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/40 rounded-bl-lg transition-all duration-500 group-hover:w-0 group-hover:h-0" />
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/40 rounded-br-lg transition-all duration-500 group-hover:w-0 group-hover:h-0" />

            {/* image */}
            <div className="transition-transform duration-300 group-hover:scale-y-[1.05]">
                {cover ? (
                    <img
                        src={cover}
                        alt={title}
                        className="w-full md:h-64 h-48 rounded-xl object-cover"
                    />
                ) : (
                    <StudioCoverFallback title={title} />
                )}
            </div>

            {/* content */}
            <div className="p-3">
                <span className="text-[10px] uppercase tracking-wider text-primary/70">
                    {TYPE_LABELS[type]}
                </span>

                <h3 className="mt-1 text-xl font-semibold tracking-tight text-heading/80">
                    {title}
                </h3>

                {description && (
                    <p className="mt-2 text-[14px] text-content tracking-tight text-justify">
                        {description}
                    </p>
                )}

                {/* tech stack */}
                {techstack.length > 0 && (
                    <div className="my-3 flex flex-wrap gap-2">
                        {techstack.map((tech, i) => {
                            const iconName =
                                techIconMap[normalize(tech)] || DEFAULT_TECH_ICON

                            return (
                                <div
                                    key={i}
                                    title={tech}
                                    className="flex items-center justify-center rounded-full ring-1 ring-primary/50 p-1 bg-white"
                                >
                                    <Icon icon={iconName} className="w-5 h-5" />
                                </div>
                            )
                        })}
                    </div>
                )}

                {/* footer links (only if they exist) */}
                <div className="flex justify-end gap-3 mt-4">
                    {livePreview && (
                        <span className="flex items-center gap-1 text-primary text-xs underline">
                            <Eye className="w-4 h-4" />
                            Live
                        </span>
                    )}

                    {githubLink && (
                        <span className="flex items-center gap-1 text-primary text-xs underline">
                            <Github className="w-4 h-4" />
                            Code
                        </span>
                    )}
                </div>
            </div>
        </Link>
    )
}
