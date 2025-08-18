import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import SocialLinks from './components/SocialLinks'


const page = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      {/* <SocialLinks className="hidden md:block"/> */}
      <Hero/>
      <Projects />
      <Experience />
      <About/>
      <Contact/>
      
    </div>
  )
}

export default page