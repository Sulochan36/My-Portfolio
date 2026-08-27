import clsx from 'clsx';

export function cn(...args) {
    return clsx(...args);
}


export const normalize = (str = '') =>
    str.toLowerCase().replace(/[\s./_-]/g, '');

// Iconify icon map 
export const techIconMap = {
    react: 'logos:react',
    nextjs: 'logos:nextjs-icon',
    tailwindcss: 'logos:tailwindcss-icon',
    shadcnui: 'simple-icons:shadcnui',
    javascript: 'logos:javascript',
    typescript: 'logos:typescript-icon',
    html: 'logos:html-5',
    css: 'logos:css-3',
    mongodb: 'logos:mongodb-icon',
    expressjs: 'simple-icons:express',
    nodejs: 'logos:nodejs-icon',
    socketio: 'simple-icons:socketdotio',
    jwt: 'simple-icons:jsonwebtokens',
    zustand: 'devicon:zustand',
    daisyui: 'simple-icons:daisyui',
    localstorage: 'mdi:database-outline',
    framer: 'simple-icons:framer',
    motion: 'simple-icons:framer',
    prisma: 'logos:prisma',
    redis: 'logos:redis',
    clerk: 'simple-icons:clerk',
    tanstackquery: 'simple-icons:tanstack',
    websockets: 'mdi:web',
    restapis: 'mdi:api',

};

// Fallback icon
export const DEFAULT_TECH_ICON = 'mdi:help-circle-outline';
