import { DollarSign, Eye, Github, Heart, Star, Timer } from 'lucide-react';
import React from 'react';

const IconText = ({ icon: Icon, text }) => (
    <li className="flex gap-2 text-white">
        <Icon className="w-[18px] md:w-5" />
        <span className="text-sm">{text}</span>
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
        <div className="rounded-[10px] border border-[#444444]  p-5 text-white">
            <div className="flex items-center justify-between gap-2">
                <div className="flex-1">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-medium sm:text-2xl font-bold">{title}</h3>
                        <div className='flex flex-row flex-wrap gap-2 text-[12px] md:text-[18px]'>
                            {techstack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="tech-stack"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                    </div>
                    <ul className="mt-4 flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-4">
                        {(visitors || numberOfSales) && (
                            <IconText text={(visitors || numberOfSales)?.toString() || ''} icon={Heart} />
                        )}
                        {siteAge && <IconText text={siteAge} icon={Timer} />}
                        {earned && <IconText text={earned} icon={DollarSign} />}
                        {(ratings || githubStars) && (
                            <IconText text={(ratings || githubStars)?.toString() || ''} icon={Star} />
                        )}
                    </ul>
                </div>
                <figure className="flex h-[150px] w-[200px] justify-end overflow-hidden">
                    <img
                        src={cover}
                        alt="Project Cover"
                        className="h-full w-full rounded-md object-contain border-2 border-gray-800"
                    />
                </figure>
            </div>
            <div className="mb-7 mt-5 rounded-2xl border border-[#444444]  p-4 text-[12px] md:text-[18px]">
                <p className="text-base font-light">{shortDescription}</p>
            </div>
            <div className="flex gap-5">
                {livePreview && (
                    <a
                        href={livePreview}
                        className="flex gap-2 text-sm text-blue-500 underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:gap-3 md:text-base"
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
                        className="flex gap-2 text-sm text-blue-500 underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:gap-3 md:text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github className="w-[18px] md:w-5" />
                        <span>Github Link</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
