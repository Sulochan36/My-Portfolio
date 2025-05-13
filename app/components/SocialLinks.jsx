import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
    return (
        <div className="border-2 rounded-3xl fixed lg:top-1/2 transform -translate-y-1/2 left-5 z-10 flex lg:flex-col flex-row gap-4 sm:left-2 top-23 lg:left-5 bg-[rgba(10, 10, 10, 0.5)] backdrop-blur-2xl shadow-lg">
            {/* GitHub Link */}
            <a
                href="https://github.com/Sulochan36"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full shadow-lg hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] duration-500 hover:text-blue-600 transition text-[10px] md:text-2xl"
            >
                <FaGithub size={30} />
            </a>

            {/* LinkedIn Link */}
            <a
                href="https://www.linkedin.com/in/sulochan-mahajan-81985b247/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full shadow-lg hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] duration-500 hover:text-blue-600 transition text-[10px] md:text-2xl"
            >
                <FaLinkedin size={30} />
            </a>

            {/* Instagram Link */}
            <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full shadow-lg hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] duration-500 hover:text-pink-600 transition text-[10px] md:text-2xl"
            >
                <FaInstagram size={30} />
            </a>

            {/* X Link */}
            <a
                href="https://x.com/MahajanSulochan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full shadow-lg hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] duration-500 hover:text-blue-600 transition text-[10px] md:text-2xl"
            >
                <FaXTwitter size={30} />
            </a>
        </div>
    );
};

export default SocialLinks;
