import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../projects.js'

const Projects = () => {
    return (
        <section id="projects" className='w-full flex flex-col justify-center items-center p-6 shadow-[inset_1px_2px_8px_1px_rgba(0,0,0,0.3),inset_-1px_-2px_8px_2px_rgb(255,255,255,0.5)] '>
            <h2 className='headings'>Projects</h2>
            <div className="max-w-full">
                {/* <hr className="mb-8 mt-4 h-px border-0 bg-blue-500"></hr> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
                    {projects.map((project,index) => (
                        <ProjectCard key={index} data={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects