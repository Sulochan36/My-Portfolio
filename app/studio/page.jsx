import Container from '../components/Container'
import Link from 'next/link'
import { getAllStudioItems } from './lib/getAllStudio'
import StudioCard from '../components/StudioCard'

export default async function StudioPage() {
    const items = await getAllStudioItems()// all items from experiments, learnings, components

    if (!items.length) {
        return (
            <Container className="flex justify-center items-center flex-grow">
                <p>No items found.</p>
            </Container>
        )
    }

    return (
        <div className="flex justify-center items-center flex-grow text-text">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {items.map(item => (
                    <StudioCard
                        key={`${item.type}-${item.slug}`}
                        item={item}
                        className="border rounded-lg p-4 hover:shadow-md transition"
                    >
                        <span className="text-xs uppercase">{item.type}</span>
                        <h2 className="text-lg font-semibold mt-1">{item.title}</h2>
                        <p className="text-sm text-muted-foreground mt-1">{item.tags?.join(', ')}</p>
                    </StudioCard>
                ))}
            </div>
        </div>
    )
}
