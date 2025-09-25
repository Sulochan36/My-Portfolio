import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../projects.js'

const Projects = () => {
    return (
        <section id="projects" className='w-full md:max-w-4xl flex flex-col justify-center items-center p-6 mt-10 mb-10 '>
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