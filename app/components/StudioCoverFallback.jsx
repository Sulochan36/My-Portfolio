const GRADIENTS = [
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-cyan-500 via-blue-500 to-indigo-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
    "from-orange-500 via-amber-500 to-yellow-500",
    "from-fuchsia-500 via-pink-500 to-rose-500",
]

function getStableGradient(seed) {
    let hash = 0
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash)
    }
    return GRADIENTS[Math.abs(hash) % GRADIENTS.length]
}

export default function StudioCoverFallback({ title }) {
    const gradient = getStableGradient(title)

    return (
        <div
            className={`w-full md:h-64 h-48 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-center px-4`}
        >
            <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight drop-shadow-md">
                {title}
            </h3>
        </div>
    )
}
