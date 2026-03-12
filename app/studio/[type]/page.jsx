import Container from '../../components/Container'
import Link from 'next/link'
import { getAllStudioItems } from '../lib/getAllStudio'
import StudioCard from '@/app/components/StudioCard'

export default async function TypePage({ params }) {
    const { type } = await params

    const allItems = getAllStudioItems()
    const items = allItems.filter(i => i.type === type)

    if (!items.length) {
        return (
            <Container className="flex justify-center items-center flex-grow">
                <p>No items found.</p>
            </Container>
        )
    }

    return (
        <Container className="flex justify-center items-center flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                {items.map(item => (
                    <StudioCard
                        key={`${item.type}-${item.slug}`}
                        item={item}
                    />
                ))}
            </div>
        </Container>
    )
}
