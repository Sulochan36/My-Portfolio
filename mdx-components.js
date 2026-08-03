import CodeBlock from "./app/components/CodeBlock";


const components = {
    pre: CodeBlock,
    h2: (props) => (
        <h2
            className="mt-12 mb-4 scroll-mt-24 border-b border-neutral-200 pb-2 text-3xl font-bold dark:border-neutral-800"
            {...props}
        />
    ),

    h3: (props) => (
        <h3
            className="mt-10 mb-3 text-2xl font-semibold"
            {...props}
        />
    ),

    p: (props) => (
        <p
            className="leading-8 text-neutral-700 dark:text-neutral-300"
            {...props}
        />
    ),

    a: (props) => (
        <a
            className="font-medium text-blue-600 underline underline-offset-4 transition hover:text-blue-500 dark:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        />
    ),

    img: (props) => (
        <img
            className="my-8 rounded-2xl border border-neutral-200 shadow-lg dark:border-neutral-800"
            loading="lazy"
            {...props}
        />
    ),

    blockquote: (props) => (
        <blockquote
            className="my-6 rounded-r-xl border-l-4 border-blue-500 bg-blue-50 px-6 py-4 italic dark:bg-blue-950/30"
            {...props}
        />
    ),

    ul: (props) => (
        <ul
            className="my-5 list-disc space-y-2 pl-6"
            {...props}
        />
    ),

    ol: (props) => (
        <ol
            className="my-5 list-decimal space-y-2 pl-6"
            {...props}
        />
    ),

    hr: () => (
        <hr className="my-10 border-neutral-300 dark:border-neutral-700" />
    ),

    table: (props) => (
        <div className="my-8 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-700">
            <table
                className="w-full border-collapse"
                {...props}
            />
        </div>
    ),

    th: (props) => (
        <th
            className="border-b border-neutral-300 bg-neutral-100 px-8 py-3 text-left font-semibold dark:border-neutral-700 dark:bg-neutral-800"
            {...props}
        />
    ),

    td: (props) => (
        <td
            className="border-b border-neutral-200 px-4 py-3 dark:border-neutral-800"
            {...props}
        />
    ),
};

export function useMDXComponents() {
    return components;
}