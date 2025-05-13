import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../projects.js'

const Projects = () => {
    return (
        <section id="projects" className='w-full flex flex-col justify-center items-center p-6 font-mono'>
            <h2 className='headings'>🚀 Projects</h2>
            <div className="max-w-[1200px]">
                {/* <hr className="mb-8 mt-4 h-px border-0 bg-blue-500"></hr> */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-8">
                    {projects.map((project,index) => (
                        <ProjectCard key={index} data={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects