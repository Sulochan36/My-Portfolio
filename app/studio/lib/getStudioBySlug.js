import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { devNull } from "os"

const STUDIO_PATH = path.join(process.cwd(), "app/studio/data")

export function getStudioBySlug(type,slug) {
    const fullPath = path.join(STUDIO_PATH,type,`${slug}.mdx`)

    if(!fs.existsSync(fullPath)){
        return null 
    }

    const file = fs.readFileSync(fullPath,"utf8")
    const {content,data} = matter(file)

    return {
        content,
        frontmatter: {
            title: data.title || slug,
            description: data.description || "",
            cover: data.cover || null,
            techstack: data.techstack || [],
            livePreview: data.livePreview || null,
            githubLink: data.githubLink || null,
            tags: data.tags || [],
            date: data.date || null,
        },
        slug,
        type,
    }
}