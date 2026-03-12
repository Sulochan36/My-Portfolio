import Container from '../components/Container'
import Link from 'next/link'
import { getAllStudioItems } from './lib/getAllStudio'

export default function StudioPage() {
    const items = getAllStudioItems() // all items from experiments, learnings, components

    if (!items.length) {
        return (
            <Container className="flex justify-center items-center flex-grow">
                <p>No items found.</p>
            </Container>
        )
    }

    return (
        <Container className="flex justify-center items-center flex-grow text-text">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {items.map(item => (
                    <Link
                        key={`${item.type}-${item.slug}`}
                        href={`/studio/${item.type}/${item.slug}`}
                        className="border rounded-lg p-4 hover:shadow-md transition"
                    >
                        <span className="text-xs uppercase">{item.type}</span>
                        <h2 className="text-lg font-semibold mt-1">{item.title}</h2>
                        <p className="text-sm text-muted-foreground mt-1">{item.tags?.join(', ')}</p>
                    </Link>
                ))}
            </div> */}
            <p className='max-w-4xl'>This is my studio page where I share all of my projects , experiments , learnings , blogs/articles , and also I share daily or frequent logs of my learnings or what currently I am working on.</p>
        </Container>
    )
}
