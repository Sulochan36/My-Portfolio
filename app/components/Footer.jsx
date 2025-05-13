import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="w-full mt-5 border-t text-center border-gray-500 py-8 font-mono bg-black">
            {/* Name */}
            <h2 className="text-3xl font-bold mb-2">
                Sulochan Mahajan
            </h2>

            {/* Email */}
            <p className="text-sm mb-4">
                <a
                    href="mailto:youremail@example.com"
                    className="hover:underline hover:text-blue-600"
                >
                    sulochanmahajan@gmail.com
                </a>
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-4 text-gray-600 dark:text-gray-400">
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                >
                    <FaGithub size={30} />
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                >
                    <FaLinkedin size={30} />
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                >
                    <FaInstagram size={30} />
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
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
