import React from 'react'
import AnimatedBlobBackground from '../components/AnimatedBlobBackground'

const Hero = () => {
    return (
        <section id="home" className='w-full flex flex-col flex-wrap justify-center items-center p-8 font-mono mt-30 mb-16'>
            
            <p className='lg:text-2xl text-xl text-blue-500 text-center lg:text-left'>Hi , my name is,</p>
            <h1 className='lg:text-7xl md:text-5xl text-[25px] my-5 text-center lg:text-left min-w-0.5 font-bold'>Sulochan Mahajan</h1>
            <p className="text-gray-400 text-lg mb-8 text-justify text-wrap max-w-2xl text-[12px] md:text-[16px]">
                I’m a full-stack developer who loves crafting clean, scalable web
                applications. My goal is to build solutions that offer both
                exceptional performance and a delightful user experience.
            </p>

            {/* CTA Buttons */}

            <div className="flex justify-center space-x-4 font-mono">
                <a
                    href="#projects"
                    className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] duration-500 text-center"
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