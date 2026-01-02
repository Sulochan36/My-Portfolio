import React from 'react'

const About = () => {
    const frontendSkills = [
        "React", ,
        "JavaScript",
        "TailwindCSS",
        "NextJS",
    ];

    const backendSkills = ["Node.js", "ExpressJS", "MongoDB",];
    const others = ["UI/UX Design", "Git", "REST API", "Performance Optimization"];


    return (
        
        <section id="about" className='w-full flex flex-col p-8 text-justify items-center whitespace-wrap text-[14px] md:text-[18px] shadow-[inset_1px_2px_8px_1px_rgba(0,0,0,0.3),inset_-1px_-2px_8px_2px_rgb(255,255,255,0.5)]'>
            <h2 className='headings'>About Me</h2>
            <div className='flex flex-col flex-wrap gap-x-5 lg:flex-nowrap '>
            
                <section className="rounded-xl py-2 hover:-translate-y-1 transition-all w-full ">
                <p className="text-content mb-6">

                    Hi, I'm a <strong>frontend developer</strong> who loves blending <strong>creativity</strong> with
                    <strong> problem-solving</strong> to craft engaging web experiences. My journey began before BTech, and
                    I’ve since explored the <strong>MERN stack</strong> to build modern, user-friendly interfaces.
                    <br />

                    While my focus is on frontend, I’ve also worked with <strong>MongoDB, Node.js, and Next.js </strong>
                    to strengthen my backend skills. I’m currently building a <strong>healthcare capstone project</strong>
                    and previously interned at Yash Techs using Java and Servlets.
                    <br />
                    <br />
                    I'm looking for opportunities at <strong>startups or product-based companies</strong> where I can
                    grow as a developer and help build <strong>impactful, accessible apps</strong>.
                    <br />
                    <br />

                </p>


            </section>

            {/************************************************************************************************************* ************/}

            <section className="rounded-xl py-8 hover:-translate-y-1 transition-all w-full text-left md:mt-0 mt-8 ">
                <h3 className="text-xl font-bold mb-4 text-neutral-600 dark:text-neutral-200"> Education </h3>
                    <ul className="list-disc list-inside text-content space-y-2">
                    <li>
                        <strong> B.Tech in Computer Science & Engineering </strong> - VIT Bhopal University
                        (2021-2025)
                    </li>
                    <li>
                        Certification Courses: Ethnus MERN Internship,HTML5 and CSS3,Javascript,Google Cloud
                        Computing Foundations
                    </li>
                </ul>
            </section>
            </div>    

            {/************************************************************************************************************* ************/}

            {/* <section className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all w-full m-8 ">
                <h3 className='subheading'>Tech Stack</h3>
                <li><strong>Frontend:</strong>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">

                        <div className="flex flex-wrap gap-2 ">
                            {frontendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="tech-stack"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </li>
                <li><strong>Backend:</strong>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="tech-stack"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </li>
                <li><strong>Other:</strong>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <div className="flex flex-wrap gap-2">
                            {others.map((tech, key) => (
                                <span
                                    key={key}
                                    className="tech-stack"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </li>
            </section> */}

            {/************************************************************************************************************* ************/}

            


        </section>


    )
}

export default About