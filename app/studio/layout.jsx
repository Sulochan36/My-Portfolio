
import Link from 'next/link'


const StudioLayout = ({ children }) => {

    const sections = [
        { label: 'Studio', href: '/studio' },
        { label: 'Projects', href: '/studio/projects' },
        { label: 'Experiments', href: '/studio/experiments' },
        { label: 'Components', href: '/studio/components' },
        { label: 'Learnings', href: '/studio/learnings' },
        { label: 'Blogs', href: '/studio/blogs' },
    ];



    return (
        <div className="flex flex-col min-h-screen text-text">
            {/* Labs Header */}
            <div className="border-b top-0 z-10">
                <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-extrabold">My Studio</h1>
                    <p className="text-md text-text">
                        Experiments, components, and learnings.
                    </p>
                    {/* Filters / Tabs */}
                    <div className="flex gap-4 mt-4">
                        {sections.map((s) => (
                            <Link
                                key={s.label}
                                href={s.href}
                                className="text-sm text-text px-3 py-1 rounded hover:text-primary transition"
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