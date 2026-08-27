import React from 'react'
import { getAllStudioItems } from '../studio/lib/getAllStudio'
import StudioCard from '../components/StudioCard'
import Link from 'next/link'

const Blogs = async() => {
    const allItems = await getAllStudioItems()
    const items = allItems
        .filter(i => ["blogs", "learnings", "experiments"].includes(i.type))
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 4)
    
    return (
        <section id="studio" className='w-full flex flex-col justify-center items-center md:px-20 md:py-8 px-10 py-4 shadow-[inset_0_-4px_3px_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_-4px_3px_0_rgb(255,255,255,0.1)]'>
                    <h2 className='headings'>Latest From Studio</h2>
                    <div className="max-w-full mb-5">
                        {/* <hr className="mb-8 mt-4 h-px border-0 bg-blue-500"></hr> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
                            {items.map(item => (
                                    <StudioCard key={`${item.type}-${item.slug}`}
                                        item={item}
                                    />
                            ))}
                        </div>
                    </div>
            <Link href='/studio' className='bg-foreground text-base text-button-text md:py-1 md:px-2 px-2 py-1 rounded font-medium transition-all relative overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[8px_8px_10px_rgba(0,0,0,0.5)] dark:hover:shadow-[0px_2px_10px_rgba(255,255,255,0.9)] duration-300 text-center flex justify-center items-center'>View More</Link>
                </section>
    )
}

export default Blogs