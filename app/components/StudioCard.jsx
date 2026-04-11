import { Eye, Github } from "lucide-react"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { normalize, techIconMap, DEFAULT_TECH_ICON } from "../lib/utils"
import StudioCoverFallback from "./StudioCoverFallback"

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

    const isExternal = item.source === "hashnode"

    const href = isExternal
        ? item.url
        : `/studio/${type}/${slug}`

    const imageSrc = cover || PLACEHOLDER_IMAGE

    const Wrapper = ({ children }) =>
        isExternal ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ) : (
            <Link href={href}>{children}</Link>
        )

    return (
        <div className="group relative max-w-sm h-[340px] overflow-hidden rounded-2xl transition-all duration-500 border-2 border-neutral-700 shadow-[0_8px_30px_rgb(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgb(255,255,255,0.1)]">

            <div className="group relative mx-auto h-[340px] w-[340px] overflow-hidden bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.08),0px_1px_2px_-1px_rgba(9,9,11,0.5),0px_2px_4px_0px_rgba(9,9,11,0.5)]">

                    {/* image */}
                    <Wrapper>
                    {cover ? (
                        <img
                            src={imageSrc}
                            alt={title}
                            width={300}
                            height={300}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <StudioCoverFallback title={title} />
                    )}
                </Wrapper>

                {/* sliding glass panel */}
                <div
                    className="
        absolute bottom-18 w-full border-t border-neutral-700 bg-[url('/noise.png')] bg-[size:220px] bg-repeat bg-white/10 backdrop-blur-3xl
        px-[14px] pt-[10px] pb-[13px] text-[13px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08),0px_1px_2px_-1px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.04)] translate-y-[calc(100%+7px)] transition-transform duration-[500ms] ease-[cubic-bezier(0.19,1,0.22,1)]
        group-hover:translate-y-18"
                >
                    {/* type */}
                    <span className="text-[10px] uppercase tracking-wider font-bold text-primary">
                        {TYPE_LABELS[type]}
                    </span>

                    {/* title */}
                    <h3 className="text-xl font-semibold text-neutral-100 text-shadow-2xs text-shadow-white">{title}</h3>

                    {/* description */}
                    {description && (
                        <p className="mt-[4px] text-[14px] text-neutral-400">
                            {description}
                        </p>
                    )}

                    {/* tech stack */}
                    {techstack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
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

                    {/* links */}
                    <div className="flex gap-3 mt-3">
                        {type === "projects" && livePreview && (
                            <Link
                                href={livePreview}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-primary hover:text-white text-[16px] underline">
                                <Eye className="w-4 h-4" />
                                Live
                            </Link>
                        )}

                        {type === "projects" && githubLink && (
                            <Link
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-primary hover:text-white text-[16px] underline">
                                <Github className="w-4 h-4" />
                                Code
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            
            
        </div>
        
    )
}