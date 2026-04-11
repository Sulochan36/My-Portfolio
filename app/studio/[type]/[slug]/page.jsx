import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getStudioBySlug } from "../../lib/getStudioBySlug"

export async function generateMetaData({params}) {
    const { type, slug } = await params
    const studio = await getStudioBySlug(type,slug)

    if(!studio) return {}

    return{
        title: studio.frontmatter.title,
        description: studio.frontmatter.description,
    }
}


export default async function StudioPage({params}) {
    const { type, slug } = await params

    const studio = await getStudioBySlug(type, slug)

    if(!studio) return notFound()

    return (
        <article className="mx-auto max-w-3xl px-6 py-16 lg:py-24 text-justify">
            <header className="mb-10">
                <h1 className="text-4xl font-semibold tracking-tight mb-3 flex flex-wrap">
                    {studio.frontmatter.title}
                </h1>

                <div className="flex flex-wrap gap-3 text-sm text-neutral-500">
                    {studio.frontmatter.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-medium bg-neutral-100  dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2.5 py-1 rounded-lg"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </header>

            <div className="prose prose-sm md:prose-mase lg:prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-h2:mt-12 prose-h3:mt-8 prose-p:text-[17px] prose-p:leading-7 prose-li:leading-7 prose-pre:rounded-xl prose-img:rounded-2xl prose-pre:overflow-x-auto prose-img:shadow-lg prose-pre:shadow-lg prose-pre:border prose-pre:border-neutral-200 dark:prose-pre:border-neutral-800 mb-8">
                <MDXRemote source={studio.content} />
            </div>
        </article>
    )
}