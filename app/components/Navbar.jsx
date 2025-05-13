import React from 'react'
import ResumeButton from './ResumeButton'

const Navbar = () => {
  return (
    (
      <nav className="border-b-2 border-white top-0 fixed w-full bg-[rgba(10, 10, 10, 0.5)] backdrop-blur-2xl shadow-lg font-mono z-10 ">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="font-mono text-2xl font-bold text-white">
              {" "}
              Sulochan<span className="text-blue-500"> Mahajan</span>{" "}
            </a>

            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              
            >
              &#9776;
            </div>

            <div className="hidden md:flex justify-center items-center space-x-8 text-xl">
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {" "}
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {" "}
                About{" "}
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {" "}
                Projects{" "}
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {" "}
                Contact{" "}
              </a>
            </div>

            <a
              href="https://drive.google.com/file/d/101O_UHvEXUDLN1D-LKsHABunO1WsuHVs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer group relative flex gap-1.5 px-6 py-3 bg-blue-500 bg-opacity-80 text-white rounded-3xl hover:bg-opacity-70 hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] duration-500 font-semibold shadow-md"
            >
              Resume
            </a>

          </div>
        </div>
      </nav>
    )
  )
}

export default Navbar