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

    return(
        <article className="max-w-4xl mx-auto py-16 px-4 rounded-2xl bg-neutral-500/10">
            <h1 className="text-3xl font-bold mb-2">
                {studio.frontmatter.title}
            </h1>

            <div className="flex gap-3 text-sm text-text mb-8">
                {studio.frontmatter.tags?.map(tag => (
                    <span key={tag}>#{tag}</span>
                ))}
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <MDXRemote source={studio.content} />
            </div>
        </article>
    )
}