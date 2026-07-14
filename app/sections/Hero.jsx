import React from 'react'
import RoleBadge from '../components/RoleBadge'
import { FaHashnode, FaXTwitter } from 'react-icons/fa6'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const Hero = () => {
    return (
        <section id="home" className='w-full flex flex-col flex-wrap md:pl-25 md:py-15 px-8 py-5 tracking-tight shadow-[inset_0_-4px_3px_0_rgb(0,0,0,0.1)] dark:shadow-[inset_0_-4px_3px_0_rgb(255,255,255,0.1)]'>

            <p  className='lg:text-xl text-xl text-primary text-left font-semibold'>Hi , my name is,</p>
            <h1 className='lg:text-4xl md:text-3xl text-[25px] my-2 text-left min-w-0.5 text-heading font-semibold text-shadow'>Sulochan Mahajan</h1>
            <p className="text-content mb-2 font-medium  text-justify text-wrap max-w-2xl text-[14px] md:text-[16px]">
                I’m a <RoleBadge /> <br/> focused on creating clean, efficient, and user-friendly web applications. As a fresher, I’m ready to bring my skills, adapt quickly, and contribute to impactful projects.
            </p>

            <p className='dark:text-green-500 text-green-600 font-semibold mb-5 bg-neutral-200/60 dark:bg-neutral-700/50 backdrop-blur-2xl w-fit px-4 py-2 rounded shadow-[2.0px_3.0px_3.0px_rgba(0,0,0,0.38)] dark:shadow-[2.0px_3.0px_3.0px_rgba(255,255,255,0.38)] '>
                <span className='relative inline-flex align-middle mr-2 size-2'>
                    <span className='absolute inline-flex h-full w-full rounded-full bg-green-500 animate-ping'></span>
                    <span className='inline-flex size-2 rounded-full bg-green-500'></span>
                </span>

                Currently Learning, Building and Exploring
            </p>
            

            {/* CTA Buttons */}

            <div className="flex flex-wrap space-x-4">
                <Link
                    href="/studio/projects"
                    className="bg-primary/20 text-text md:py-1 md:px-2 px-2 py-1 rounded font-medium transition relative overflow-hidden hover:bg-primary/80 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] duration-300 text-center flex justify-center items-center"
                >
                    View Projects
                </Link>
                <a
                    href="#contact"
                    className="flex justify-center items-center border border-primary text-primary md:py-1 md:px-2 px-2 py-1 rounded font-medium transition-all duration-300 hover:text-text
                    hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-black/10 text-center"
                >
                    Contact Me
                </a>
            </div>

            <div className="flex  gap-3 mt-6 text-content">
                            <a
                                href="https://github.com/Sulochan36"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition"
                            >
                                <FaGithub size={25} />
                            </a>
                            <a
                                href="https://linkedin.com/in/sulochan-mahajan-81985b247"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition"
                            >
                                <FaLinkedin size={25} />
                            </a>
                            <a
                                href="https://www.instagram.com/sulochanmahajan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition"
                            >
                                <FaInstagram size={25} />
                            </a>
                            <a
                                href="https://x.com/MahajanSulochan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition"
                            >
                                <FaXTwitter size={25} />
                            </a>
                            <a
                                href="https://sulochan.hashnode.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition"
                            >
                                <FaHashnode size={25} />
                            </a>
                            
                        </div>

        </section>
    )
}

export default Hero