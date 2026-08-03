import React from 'react';
import { Icon } from '@iconify/react';

const About = () => {
    const frontendSkills = [
        { name: "React", icon: "logos:react" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "Motion", icon: "bxl:motion-js" },
        { name: "Shadcn/UI", icon: "simple-icons:shadcnui" },
    ];

    const backendSkills = [
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "Express.js", icon: "simple-icons:express" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
        { name: "Redis", icon: "logos:redis" },
        { name: "WebSockets", icon: "mdi:web" },
        { name: "Clerk", icon: "simple-icons:clerk" },
    ];

    const toolsAndTechnologies = [
        { name: "Git", icon: "logos:git-icon" },
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "Prisma", icon: "material-icon-theme:prisma" },
        { name: "TanStack Query", icon: "simple-icons:reactquery" },
        { name: "Zustand", icon: "devicon:zustand" },
        { name: "REST APIs", icon: "mdi:api" },
        { name: "Generative AI", icon: "mdi:robot-outline" },
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
                    Hi, I'm a <strong>Full Stack Developer</strong> with a passion for building modern, scalable, and user-centric web applications. I enjoy combining clean architecture, intuitive design, and seamless interactions to create products that are both functional and enjoyable to use.
                </p>
                <p>
                    My primary expertise lies in{" "}
                    <strong>React, Next.js, TypeScript, and the MERN stack</strong>. While I
                    enjoy building across the full stack, I'm especially drawn to{" "}
                    <strong>Frontend Development</strong>, where engineering meets creativity
                    to deliver intuitive and delightful user experiences.
                </p>
                <p>
                    Lately, I've been exploring <strong>Design Engineering</strong> to better
                    bridge the gap between design and development, with a focus on motion,
                    interactions, and design systems. Alongside this, I'm currently deepening
                    my knowledge of <strong>Generative AI</strong> through a hands-on cohort,
                    exploring AI integrations, LLMs, and modern AI application development.
                </p>

                <p>
                    Beyond that, I enjoy exploring modern technologies such as real-time
                    systems, authentication, performance optimization, and AI-powered
                    applications. I'm always eager to learn, collaborate with ambitious teams,
                    and build products that create meaningful impact.
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
                        <strong>Certification Courses: </strong> Ethnus MERN Internship, HTML5 & CSS3, JavaScript, Google Cloud Computing Foundations
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
                        <h4 className="font-semibold mb-2">Tools</h4>
                        <div className="flex flex-wrap gap-6">
                            {toolsAndTechnologies.map((tech, idx) => (
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
