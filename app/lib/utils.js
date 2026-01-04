import clsx from 'clsx';

export function cn(...args) {
    return clsx(...args);
}

// normalize tech names like "Next.js", "Socket IO", "Node JS"
export const normalize = (str = '') =>
    str.toLowerCase().replace(/[\s.]/g, '');

// Iconify icon map (scalable, no local assets)
export const techIconMap = {
    react: 'logos:react',
    nextjs: 'logos:nextjs-icon',
    tailwindcss: 'logos:tailwindcss-icon',
    shadcnui: 'simple-icons:shadcnui',
    javascript: 'logos:javascript',
    mongodb: 'logos:mongodb-icon',
    expressjs: 'simple-icons:express',
    nodejs: 'logos:nodejs-icon',
    socketio: 'simple-icons:socketdotio',
    jwt: 'simple-icons:jsonwebtokens',
    zustand: 'simple-icons:zustand',
    daisyui: 'simple-icons:daisyui',
    localstorage: 'mdi:database-outline',
    framer: 'simple-icons:framer',
};

// Fallback icon (very important)
export const DEFAULT_TECH_ICON = 'mdi:help-circle-outline';
