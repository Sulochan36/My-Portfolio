import React from 'react'
import RoleBadge from '../components/RoleBadge'
import { FaHashnode, FaXTwitter } from 'react-icons/fa6'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const Hero = () => {
    return (
        <section id="home" className='w-full flex flex-col justify-center flex-wrap md:pl-25 md:py-15 px-8 py-5 tracking-tight shadow-[inset_0_-4px_3px_0_rgb(0,0,0,0.1)] dark:shadow-[inset_0_-4px_3px_0_rgb(255,255,255,0.1)] gap-3'>
            <div>
                <p className='lg:text-xl text-xl text-primary text-left font-semibold'>Hi , my name is,</p>
                <h1 className='lg:text-4xl md:text-3xl text-[25px] my-1.5 text-left min-w-0.5 text-heading font-semibold text-shadow'>Sulochan Mahajan</h1>
            </div>
    
            <p className="text-foreground/70 font-medium mb-2 text-justify text-wrap max-w-2xl text-base leading-relaxed">
                I’m a <RoleBadge /> <br /> focused on building fast, scalable, and user-friendly web applications. I enjoy transforming ideas into polished digital experiences through clean code, thoughtful design, and smooth interactions.
            </p>

            <p className='dark:text-green-500 text-green-600 font-semibold mb-5 border-dotted border-2 rounded-2xl w-fit px-4 py-2 text-base'>
                <span className='relative inline-flex align-middle mr-2 size-2'>
                    <span className='absolute inline-flex h-full w-full rounded-full bg-green-500 animate-ping'></span>
                    <span className='inline-flex size-2 rounded-full bg-green-500'></span>
                </span>

                Currently Learning, Building and Exploring GenAI
            </p>
            

            {/* CTA Buttons */}

            <div className="flex flex-wrap space-x-4">
                <Link
                    href="/studio/projects"
                    className="bg-foreground text-base text-button-text md:py-1 md:px-2 px-2 py-1 rounded font-bold transition-all relative overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[8px_8px_10px_rgba(0,0,0,0.5)] dark:hover:shadow-[0px_2px_10px_rgba(255,255,255,0.9)] duration-300 text-center flex justify-center items-center"
                >
                    View Projects
                </Link>
                <a
                    href="#contact"
                    className="bg-foreground text-base text-button-text md:py-1 md:px-2 px-2 py-1 rounded font-bold transition-all relative overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[8px_8px_10px_rgba(0,0,0,0.5)] dark:hover:shadow-[0px_2px_10px_rgba(255,255,255,0.9)] duration-300 text-center flex justify-center items-center"
                >
                    Contact Me
                </a>
            </div>

            <div className="flex gap-3 mt-6 text-content/50">
                            <a
                                href="https://github.com/Sulochan36"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-content transition-colors duration-200"
                            >
                                <FaGithub size={30} />
                            </a>
                            <a
                                href="https://linkedin.com/in/sulochan-mahajan-81985b247"
                                target="_blank"
                                rel="noopener noreferrer"
                    className="hover:text-content transition-colors duration-200"
                            >
                                <FaLinkedin size={30} />
                            </a>
                            <a
                                href="https://www.instagram.com/sulochanmahajan"
                                target="_blank"
                                rel="noopener noreferrer"
                    className="hover:text-content transition-colors duration-200"
                            >
                                <FaInstagram size={30} />
                            </a>
                            <a
                                href="https://x.com/MahajanSulochan"
                                target="_blank"
                                rel="noopener noreferrer"
                    className="hover:text-content transition-colors duration-200"
                            >
                                <FaXTwitter size={30} />
                            </a>
                            <a
                                href="https://sulochan.hashnode.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                    className="hover:text-content transition-colors duration-200"
                            >
                                <FaHashnode size={30} />
                            </a>
                            
                        </div>

        </section>
    )
}

export default Hero