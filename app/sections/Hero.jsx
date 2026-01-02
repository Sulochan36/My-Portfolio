import React from 'react'
import AnimatedBlobBackground from '../components/AnimatedBlobBackground'
import RoleBadge from '../components/RoleBadge'
import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
    return (
        <section id="home" className='w-full flex flex-col flex-wrap px-8 py-15 tracking-tight shadow-[inset_1px_2px_8px_1px_rgba(0,0,0,0.3),inset_-1px_-2px_8px_2px_rgb(255,255,255,0.5)]'>

            <p  className='lg:text-xl text-xl text-primary text-left font-semibold'>Hi , my name is,</p>
            <h1 className='lg:text-5xl md:text-3xl text-[25px] my-5 text-left min-w-0.5 text-heading font-bold text-shadow'>Sulochan Mahajan</h1>
            <p className="text-content text-lg mb-8 text-justify text-wrap max-w-2xl text-[12px] md:text-[16px]">
                I’m a <RoleBadge /> focused on creating clean, efficient, and user-friendly web applications. As a fresher, I’m ready to bring my skills, adapt quickly, and contribute to impactful projects.
            </p>

            {/* CTA Buttons */}

            <div className="flex flex-wrap space-x-4">
                <a
                    href="#projects"
                    className="bg-primary text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] duration-500 text-center"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-500 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 text-center"
                >
                    Contact Me
                </a>
            </div>

        </section>
    )
}

export default Hero