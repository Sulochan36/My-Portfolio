export const projects = [
    
    {
        priority: 1,
        title: 'Target Booster',
        shortDescription: "A goal management cum motivation app.",
        description:
            'A minimalist, responsive web app built to help users set clear goals, break them down into actionable substeps, and track progress visually. Users can create and manage multiple goals, each with its own to-do list, purpose, timelines, and progress bar. The interface supports editing, status updates (Not Started, Ongoing, Completed), and a focused dashboard view for productivity insights.🔧 Currently powered by LocalStorage. Backend functionality (with user auth, database storage, analytics) will be integrated soon to enable persistence and multi-user support.',
        cover:
            '/Targetbooster.png',
        livePreview: 'https://targetbooster.onrender.com/',
        githubLink: 'https://github.com/Sulochan36/TargetBooster',
        techstack: ['React', 'TailwindCSS', 'ShadCN UI', 'LocalStorage(Backend coming soon)'],
    },
    {
        priority: 2,
        title: 'QuickTalk',
        shortDescription: "A real time chat app with many features like group chat , video chat , ai agent chat..",
        description:
            '💬 A real-time chat application built using the MERN stack, integrating WebSockets via Socket.io for seamless two-way communication. Includes user authentication, real-time messaging, and a modern responsive UI with Tailwind CSS and DaisyUI themes. Built as a hands - on project to strengthen my full - stack skills.I am currently exploring new features like emoji reactions, group chats, and file sharing to make the app more interactive and production-ready.',
        cover:
            '/quicktalk.png',
        livePreview: 'https://quick-talk-one.vercel.app/',
        githubLink: 'https://github.com/Sulochan36/QuickTalk',
        techstack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Tailwind CSS", "DaisyUI", "JWT", "Zustand"],
    },
    {
        priority: 3,
        title: 'This Portfolio',
        shortDescription: "This is my portfolio which currently open infront of you.",
        description:
            '💬 A responsive and minimal personal portfolio built with Next.js to showcase my skills, projects, and experience as a web developer. It features smooth navigation, clean UI, and a dynamic “About Me” section designed for clarity and engagement. Focused on performance and accessibility, this project reflects my ability to create production-ready frontend applications.',
        cover:
            '/portfolio.png',
        livePreview: 'https://sulochan-mahajan.vercel.app/',
        githubLink: 'https://github.com/Sulochan36/My-Portfolio',
        techstack: ['Next.js', 'JavaScript', 'Tailwind CSS','Framer'],
    },
]