import { DollarSign, Eye, Github, Heart, Star, Timer } from 'lucide-react';
import React from 'react';
import { normalize, techIconMap } from '../lib/utils';

const IconText = ({ icon: Icon, text }) => (
    <li classNameName="flex gap-2 text-white">
        <Icon classNameName="w-[18px] md:w-5" />
        <span classNameName="text-sm">{text}</span>
    </li>
);

const ProjectCard = ({ data }) => {
    const {
        title,
        shortDescription,
        visitors,
        earned,
        ratings,
        githubStars,
        numberOfSales,
        livePreview,
        githubLink,
        siteAge,
        techstack,
        cover,
    } = data;

    return (
        <div className="max-w-sm rounded-lg shadow-lg shadow-neutral-400 bg-transparent flex flex-col gap-5">
            <div>
                <a href="#">
                    <img height={300} width={300} className="w-full rounded-xl object-cover transition duration-300 hover:scale-3d" src={cover} alt="" />
                </a>
            </div>
            
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">{title}</h5>
                </a>
                <p className="max-w-xs mt-2 text-[16px] text-content tracking-tight text-justify">{shortDescription}</p>

                <div className="my-4">
                    <div className="flex flex-wrap gap-2">
                        {techstack.map((tech, index) => {
                            const iconSrc = techIconMap[normalize(tech)] || '/tech-icons/default.png';
                            return (
                                <div key={index} className="flex items-center gap-1 bg-transparent px-2 py-1 rounded-md">
                                    <img
                                        src={iconSrc}
                                        alt={tech}
                                        className="h-5 w-5 rounded-full object-contain bg-white p-0.5"
                                        loading="lazy"
                                        title={tech}
                                    />
                                    <span className="text-sm text-text">{tech}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-row gap-2 mt-5">
                    {livePreview && (
                        <a
                            href={livePreview}
                            className="flex gap-2 text-sm text-primary underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 dark:hover:text-white md:gap-3 md:text-base"
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
                            className="flex gap-2 text-sm text-primary underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 dark:hover:text-white md:gap-3 md:text-base"
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
