import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="w-full mt-5 border-t-[2px] border-neutral-600 text-center py-8">
            {/* Name */}
            <h2 className="text-3xl text-content font-bold mb-2">
                Sulochan Mahajan
            </h2>

            {/* Email */}
            <p className="text-sm mb-4">
                <a
                    href="mailto:youremail@example.com"
                    className="text-content hover:underline hover:text-primary"
                >
                    sulochanmahajan@gmail.com
                </a>
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-4 text-content">
                <a
                    href="https://github.com/Sulochan36"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                >
                    <FaGithub size={30} />
                </a>
                <a
                    href="https://linkedin.com/in/sulochan-mahajan-81985b247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                >
                    <FaLinkedin size={30} />
                </a>
                <a
                    href="https://www.instagram.com/sulochanmahajan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                >
                    <FaInstagram size={30} />
                </a>
                <a
                    href="https://x.com/MahajanSulochan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                >
                    <FaXTwitter size={30} />
                </a>
                
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500 dark:text-gray-500">
                &copy; {new Date().getFullYear()} Sulochan Mahajan. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
