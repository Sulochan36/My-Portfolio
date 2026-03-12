import fs from "fs"
import path from "path"
import matter from "gray-matter"

const STUDIO_PATH = path.join(process.cwd(), "app/studio/data")

const TYPES = ["experiments", "learnings", "components", "projects", "blogs"]

export function getAllStudioItems() {
    const items = []

    for(const type of TYPES) {
        const dir = path.join(STUDIO_PATH, type)

        if(!fs.existsSync(dir)) continue

        const files = fs.readdirSync(dir)

        for(const file of files){
            if(!file.endsWith(".mdx")) continue

            const slug = file.replace(".mdx","")
            const fullPath = path.join(dir,file)
            const source = fs.readFileSync(fullPath, "utf8")

            const {data} = matter(source)

            items.push({
                type,
                slug,
                title: data.title || slug,
                description: data.description || "",
                cover: data.cover || null,
                techstack: data.techstack || [],
                livePreview: data.livePreview || null,
                githubLink: data.githubLink || null,
                tags: data.tags || [],
                date: data.date || null,
            })
        }
    }
    return items
}
