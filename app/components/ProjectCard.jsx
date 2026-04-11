import { Eye, Github } from 'lucide-react';
import React from 'react';
import { normalize, techIconMap, DEFAULT_TECH_ICON } from '../lib/utils';
import { Icon } from '@iconify/react';

const ProjectCard = ({ data }) => {
    const {
        title,
        shortDescription,
        livePreview,
        githubLink,
        techstack,
        cover,
    } = data;

    return (
        <div className="relative max-w-sm h-[340px] rounded-2xl flex flex-col gap-5 group transition-all duration-500 overflow-hidden hover:cursor-pointer border-2 border-neutral-700 shadow-[0_8px_30px_rgb(0,0,0,0.2)] dark:shadow-[0_2px_10px_rgb(255,255,255,0.12)] ">

            <div className="group relative mx-auto h-[340px] w-[340px] overflow-hidden bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.08),0px_1px_2px_-1px_rgba(9,9,11,0.5),0px_2px_4px_0px_rgba(9,9,11,0.5)]">

                <img
                    src={cover}
                    alt={title}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />

                <div
                    className="absolute bottom-12 border-t-2 border-neutral-600 w-full rounded-b-lg bg-[url('/noise.png')] bg-[size:220px] bg-repeat opacity-92 bg-white/10 backdrop-blur-3xl px-[14px] pt-[10px] pb-[13px] text-[13px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08),0px_1px_2px_-1px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.04)] translate-y-[calc(100%+7px)] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-12"
                >
                    <h3 className="text-xl font-semibold text-neutral-100 text-shadow-2xs text-shadow-white">{title}</h3>

                    <p className="mt-[4px] text-[14px] text-neutral-400">
                        {shortDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        {techstack.map((tech, index) => {
                            const iconName =
                                techIconMap[normalize(tech)] || DEFAULT_TECH_ICON;

                            return (
                                <div
                                    key={index}
                                    className="flex items-center justify-center rounded-full ring-1 ring-primary/50 p-1 bg-white"
                                    title={tech}
                                >
                                    <Icon icon={iconName} className="w-5 h-5" />
                                </div>
                            );
                        })}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-3">
                        {livePreview && (
                            <a
                                href={livePreview}
                                className="flex items-center gap-0.5 text-primary underline underline-offset-[3px] transition-all duration-300 ease-linear hover:scale-[1.03] text-[0.8rem]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Eye className="w-[18px] md:w-5" />
                                <span>Live Preview</span>
                            </a>
                        )}

                        {githubLink && (
                            <a
                                href={githubLink}
                                className="flex items-center gap-0.5 text-primary underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105  text-[0.8rem]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-[18px] md:w-5" />
                                <span>Github</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;