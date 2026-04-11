import Link from "next/link"

export default function ComponentsPage() {
    return (
        <section className="w-full flex flex-col items-center justify-center px-6 py-12 gap-10">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-center">
                Components Library
            </h1>

            {/* Preview */}
            <div className="w-full max-w-5xl rounded-2xl overflow-hidden border shadow-lg">
                <video
                    src="/studio/components-preview.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full object-cover"
                />
            </div>

            {/* OR IMAGE fallback (if no video) */}
            {/* 
            <img 
                src="/studio/components-preview.png"
                className="w-full max-w-5xl rounded-2xl border"
            />
            */}

            {/* Description */}
            <p className="max-w-2xl text-center text-muted-foreground text-lg">
                A curated collection of reusable UI components built with React,
                Tailwind CSS, and modern animation patterns. Focused on simplicity,
                reusability, and clean design.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center">
                <Link
                    href="https://your-components-website.com"
                    target="_blank"
                    className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:scale-105 transition"
                >
                    Visit Website
                </Link>

                <Link
                    href="/studio"
                    className="px-6 py-3 rounded-xl border font-semibold hover:bg-white/10 transition"
                >
                    Back to Studio
                </Link>
            </div>

        </section>
    )
}