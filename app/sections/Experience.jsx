import React from 'react'
import { Icon } from '@iconify/react';
import {workExperience} from '../workExperience.js';

const Experience = () => {
    return (
        <section id="experience" className=' w-full flex flex-col justify-center items-center px-15 py-8 shadow-[inset_0_-4px_3px_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_-4px_3px_0_rgb(255,255,255,0.1)]'>
            <h2 className='headings'>Work Experience</h2>
            <section className="rounded-xl p-8 hover:-translate-y-1 transition-all w-full ">
                <div className="space-y-4 text-content">

                    <div className="flex flex-col gap-8">
                        {workExperience.map((work) => (
                            <div key={work.id} className="flex flex-col md:flex-row bg-transparent rounded-lg p-6 hover:shadow-xl transition duration-300">

                                {/* Left side */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold">{work.role}</h3>
                                    <p className="text-gray-500">{work.company} | {work.duration}</p>
                                    <p className="text-gray-400 text-sm mb-3">{work.location}</p>

                                    {/* Description bullets */}
                                    <ul className="list-disc ml-5 tracking-tight text-text/70">
                                        {work.description.map((desc, idx) => (
                                            <li key={idx}>{desc}</li>
                                        ))}
                                    </ul>

                                    {/* Tech stack badges */}
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {work.techStack.map((tech, idx) => (
                                            <div key={idx} className="flex items-center w-10 h-10 gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm ring-1 ring-primary/50">
                                                <Icon icon={tech.icon} className="w-6 h-6 rounded-full saturation-200" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right side */}

                                {work.logo && (
                                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 flex items-start justify-center">
                                        <img src={work.logo} alt={work.company} className="w-24 h-24 object-contain rounded-md" />
                                    </div>
                                )}

                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Experience