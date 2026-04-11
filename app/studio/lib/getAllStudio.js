import { getLocalStudioItems } from "./getLocalStudioItems"
import { getHashnodeBlogs } from "./getHashnodeBlogs"

export async function getAllStudioItems() {
    const localItems = getLocalStudioItems()
    const hashnodeItems = await getHashnodeBlogs()

    const allItems = [...localItems, ...hashnodeItems]

    return allItems.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    )
}