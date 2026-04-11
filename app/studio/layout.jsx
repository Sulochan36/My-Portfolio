
import Link from 'next/link'


const StudioLayout = ({ children }) => {

    const sections = [
        { label: 'All', href: '/studio' },
        { label: 'Projects', href: '/studio/projects' },
        { label: 'Experiments', href: '/studio/experiments' },
        // { label: 'Components', href: '/studio/components' },
        { label: 'Learnings', href: '/studio/learnings' },
        { label: 'Blogs', href: '/studio/blogs' },
    ];



    return (
        <div className="flex flex-col flex-wrap min-h-screen text-text ">
            {/* Labs Header */}
            <div className="border-b w-full top-0 z-10">
                <div className="lg:max-w-6xl max-w-2xl mx-auto px-4 py-4 flex flex-col justify-center items-center">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4">My Studio</h1>
                    <p className="md:text-lg text-primary text-wrap max-w-2xl text-[14px] text-center md:mx-20 ">
                        This is my studio page where I share all of my projects , experiments , learnings , blogs/articles , and also I share daily or frequent logs of my learnings or what currently I am working on.
                    </p>
                    {/* Filters / Tabs */}
                    <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                        {sections.map((s) => (
                            <Link
                                key={s.label}
                                href={s.href}
                                className="text-md text-primary hover:text-text dark:hover:text-white font-semibold px-3 py-1 rounded transition-colors duration-300"
                            >
                                {s.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/* Dynamic content */}
            <main className="flex-grow max-w-6xl mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    )
}

export default StudioLayout