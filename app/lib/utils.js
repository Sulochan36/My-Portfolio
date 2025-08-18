import clsx from 'clsx';

export function cn(...args) {
    return clsx(...args);
}

export const normalize = (str) => str.toLowerCase().replace(/[\s.]/g, '');

export const techIconMap = {
    react: '/tech-icons/react.png',
    nextjs: '/tech-icons/nextjs2.png',
    tailwindcss: '/tech-icons/tailwindcss.png',
    shadcnui: '/tech-icons/shadcnui.png',
    javascript: '/tech-icons/js.png',
    mongodb: '/tech-icons/mongodb.png',
    expressjs: '/tech-icons/expressjs.png',
    nodejs: '/tech-icons/nodejs.png',
    socketio: '/tech-icons/socketio.png',
    jwt: '/tech-icons/jwt.png',
    zustand: '/tech-icons/zustand.png',
    daisyui: '/tech-icons/daisyui.png',
    localstorage: '/tech-icons/localstorage.png',
    framer: '/tech-icons/framer.png',
};