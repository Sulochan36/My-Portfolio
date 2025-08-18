'use client';
import React, { useEffect, useState } from 'react';

const DarkToggle = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
        setDark(isDark);
    }, []);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(prev => !prev)}
            className={`w-5 h-5 text-neutral-800 dark:text-neutral-100 transition-transform duration-300 ${dark ? 'rotate-180' : 'rotate-0'}`}
            aria-label="Toggle Dark Mode"
        >
            {dark ? (
                // Light Mode Icon (Sun)
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-neutral-800 dark:text-neutral-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36l-1.42 1.42M7.05 16.95l-1.42 1.42M16.95 16.95l1.42 1.42M7.05 7.05L5.63 5.63M12 8a4 4 0 100 8 4 4 0 000-8z"
                    />
                </svg>
            ) : (
                // Dark Mode Icon (Moon)
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-neutral-800 dark:text-neutral-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                    />
                </svg>
            )}
        </button>
    );
};

export default DarkToggle;
