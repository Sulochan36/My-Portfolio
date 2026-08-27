import { DollarSign, Eye, Github, Heart, Star, Timer } from 'lucide-react';
import React from 'react';
import { normalize, techIconMap, DEFAULT_TECH_ICON } from '../lib/utils';

import { Icon } from '@iconify/react';


const IconText = ({ icon: Icon }) => (
    <li className="flex gap-2 text-foreground">
        <Icon className="w-[18px] md:w-5" />
    </li>
);

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
        <div className="relative w-[340px] h-[340px] rounded-lg bg-transparent flex flex-col gap-5 group hover:shadow-[0_3px_10px_rgb(21,93,252,0.3)] transition-all duration-500 overflow-hidden">

            <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/40 rounded-tl-lg transition-all duration-500 group-hover:w-0 group-hover:h-0" />

            <span className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/40 rounded-tr-lg transition-all duration-500 group-hover:w-0 group-hover:h-0" />


            <span className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/40 rounded-bl-lg transition-all duration-500 group-hover:w-0 group-hover:h-0" />


            <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/40 rounded-br-lg transition-all duration-500 group-hover:w-0 group-hover:h-0" />

            <div className='relative w-[340px] h-[340px] rounded-lg overflow-hidden group'>
                <a href="#">
                    <img className="w-full md:h-64 h-48 rounded-xl object-cover transition-normal duration-300" src={cover} alt="" />


                    <div className="absolute inset-x-0 bottom-0 bg-neutral-900/90 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] p-4">

                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-neutral-100">{title}</h5>

                        <p className="max-w-xs mt-2 text-[14px] text-neutral-200 tracking-tight text-justify">{shortDescription}</p>

                        <div className="my-1 flex flex-wrap ">
                            <div className="flex flex-wrap gap-2 p-1 w-fit h-auto rounded-full ">
                                {techstack.map((tech, index) => {
                                    const iconName =
                                        techIconMap[normalize(tech)] || DEFAULT_TECH_ICON;

                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center justify-center rounded-full ring-1 ring-primary/50 bg-black/5 dark:bg-white/10 p-1"
                                            title={tech}
                                        >
                                            <Icon
                                                icon={iconName}
                                                className="w-5 h-5 shrink-0 text-foreground"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    );
                                })}

                            </div>
                        </div>
                    </div>
                </a>
            </div>


            <div className="p-3">


                <div className="flex justify-end items-center flex-row gap-2 mt-1">
                    {livePreview && (
                        <a
                            href={livePreview}
                            className="flex gap-0.5 text-primary underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-[1.03] dark:hover:text-white text-[0.8rem]"
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
                            className="flex gap-0.5 text-primary underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 dark:hover:text-white text-[0.8rem]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="w-[18px] md:w-5" />
                            <span>Github Link</span>
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;
