import React from 'react';
import { Icon } from '@iconify/react';

const About = () => {
    const frontendSkills = [
        { name: "React", icon: "logos:react" },
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
        { name: "NextJS", icon: "logos:nextjs-icon" },
    ];

    const backendSkills = [
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "ExpressJS", icon: "simple-icons:express" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
    ];

    const others = [
        { name: "UI/UX Design", icon: "mdi:palette" },
        { name: "Git", icon: "logos:git-icon" },
        { name: "REST API", icon: "mdi:api" },
        { name: "Performance Optimization", icon: "mdi:speedometer" },
    ];

    return (
        <section
            id="about"
            className="w-full flex flex-col px-8 md:px-20 py-8 text-justify items-center text-[14px] md:text-[16px] dark:text-neutral-200 shadow-[inset_0_-4px_3px_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_-4px_3px_0_rgb(255,255,255,0.1)]"
        >
            <h2 className="headings mb-6 text-center">About Me</h2>

            {/* Intro Text */}
            <div className="max-w-3xl space-y-4">
                <p>
                    Hi, I'm a <strong>frontend developer</strong> passionate about blending <strong>creativity</strong> with{' '}
                    <strong>problem-solving</strong> to craft engaging web experiences. My journey began before B.Tech, and I’ve since
                    explored the <strong>MERN stack</strong> to build modern, user-friendly interfaces.
                </p>
                <p>
                    While my focus is frontend, I’ve also worked with <strong>MongoDB, Node.js, and Next.js</strong> to strengthen my
                    backend skills. I’m currently building a <strong>healthcare capstone project</strong> and previously interned at
                    <strong> Yash Technologies</strong> using Java and Servlets.
                </p>
                <p>
                    I'm looking for opportunities at <strong>startups or product-based companies</strong> where I can grow as a developer
                    and help build <strong>impactful, accessible apps</strong>.
                </p>
            </div>

            {/* Education */}
            <section className="w-full max-w-3xl mt-8">
                <h3 className="text-xl font-bold mb-3 text-neutral-600 dark:text-neutral-200">Education & Certifications</h3>
                <ul className="list-disc list-inside space-y-2 text-[14px] md:text-[15px]">
                    <li>
                        <strong>B.Tech in Computer Science & Engineering</strong> - VIT Bhopal University (2021–2025)
                    </li>
                    <li>
                        Certification Courses: Ethnus MERN Internship, HTML5 & CSS3, JavaScript, Google Cloud Computing Foundations
                    </li>
                </ul>
            </section>

            {/* Tech Stack */}
            <section className="w-full max-w-3xl mt-10">
                <h3 className="text-xl font-bold mb-4 text-neutral-600 dark:text-neutral-200">Tech Stack</h3>

                <div className="flex flex-col gap-6">
                    {/* Frontend */}
                    <div>
                        <h4 className="font-semibold mb-2">Frontend</h4>
                        <div className="flex flex-wrap gap-6">
                            {frontendSkills.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center justify-center text-center p-2 hover:-translate-y-1 transition-all"
                                >
                                    <Icon icon={tech.icon} className="w-8 h-8 text-primary" />
                                    <span className="mt-1 text-sm">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div>
                        <h4 className="font-semibold mb-2">Backend</h4>
                        <div className="flex flex-wrap gap-6">
                            {backendSkills.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center justify-center text-center p-2 hover:-translate-y-1 transition-all"
                                >
                                    <Icon icon={tech.icon} className="w-8 h-8 text-primary" />
                                    <span className="mt-1 text-sm">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Others */}
                    <div>
                        <h4 className="font-semibold mb-2">Other</h4>
                        <div className="flex flex-wrap gap-6">
                            {others.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center justify-center text-center p-2 hover:-translate-y-1 transition-all"
                                >
                                    <Icon icon={tech.icon} className="w-8 h-8 text-primary" />
                                    <span className="mt-1 text-sm">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;
