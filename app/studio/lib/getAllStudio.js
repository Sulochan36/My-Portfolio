import { getLocalStudioItems } from "./getLocalStudioItems"

export async function getAllStudioItems() {
    const localItems = getLocalStudioItems()

    const allItems = [...localItems]

    return allItems.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    )
}