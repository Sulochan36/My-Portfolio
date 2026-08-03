"use client";

import { useState } from "react";
import { Icon } from '@iconify/react';

export default function CodeBlock({ children }) {
    const [copied, setCopied] = useState(false);

    const code = children.props.children;

    async function copyCode() {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div className="relative my-6">
            <button
                onClick={copyCode}
                className="absolute right-3 top-3 rounded-md bg-neutral-800 px-3 py-1 text-xs text-white hover:bg-neutral-700 hover:cursor-pointer"
            >
                {copied ? "Copied!" : <Icon icon="solar:copy-bold" />}
            </button>

            <pre className="overflow-x-auto rounded-xl bg-[#0d1117] p-5">
                {children}
            </pre>
        </div>
    );
}