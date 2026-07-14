import React from 'react'
import StudioCard from '../components/StudioCard'
import Link from 'next/link'
import { getLocalStudioItems } from '../studio/lib/getLocalStudioItems'

const Projects = () => {

    const allItems = getLocalStudioItems()
    const items = allItems.filter(i => i.type === 'projects')
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, 4)

    return (
        <section id="projects" className='w-full flex flex-col justify-center items-center md:px-20 md:py-8 px-10 py-4 shadow-[inset_0_-4px_3px_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_-4px_3px_0_rgb(255,255,255,0.1)]'>
            <h2 className='headings'>Projects</h2>
            <div className="max-w-full">
                {/* <hr className="mb-8 mt-4 h-px border-0 bg-blue-500"></hr> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                    {items.map(item => (
                            <StudioCard key={`${item.type}-${item.slug}`}
                                item={item}
                            />
                    ))}
                </div>
            </div>
            <Link href='/studio/projects' className='rounded text-text text-sm px-2 py-2 mt-2 font-semibold bg-primary/20 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] duration-300 hover:bg-primary/80 text-center flex justify-center items-center'>View More Projects</Link>
        </section>
    )
}

export default Projects