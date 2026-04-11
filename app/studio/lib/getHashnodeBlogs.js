export async function getHashnodeBlogs() {
    const res = await fetch("https://gql.hashnode.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
                query {
                    publication(host: "sulochan.hashnode.dev") {
                    posts(first: 10) {
                    edges {
                        node {
                        title
                        slug
                        brief
                        publishedAt
                        url
                        tags {
                            name
                        }
                        coverImage {
                            url
                        }
                        }
                    }
                    }
                }
                }
            `,
        }),
        next: { revalidate: 60 }, // ISR
    })

    const json = await res.json()

    return json.data.publication.posts.edges.map(({ node }) => ({
        type: "blogs",
        slug: node.slug,

        // ✅ normalize to your frontmatter
        title: node.title,
        description: node.brief,
        cover: node.coverImage?.url || null,
        tags: node.tags?.map(t => t.name) || [],
        date: node.publishedAt,

        // ✅ keep structure consistent
        techstack: [],
        livePreview: null,
        githubLink: null,

        // ✅ extra for routing
        url: node.url,
        source: "hashnode",
    }))
}