import React from 'react'

const Experience = () => {
    return (
        <section id="experience" className=' w-full md:max-w-4xl flex flex-col justify-center items-center p-6 mt-30 mb-16 text-[12px] md:text-[18px]'>
            <h2 className='headings'>Work Experience</h2>
            <section className="rounded-xl p-8 hover:-translate-y-1 transition-all w-full ">
                <div className="space-y-4 text-content">

                    <div>
                        <h4 className="font-semibold">
                            {" "}
                            Intern – Java Web Developer
                            <br />
                            Yash Technologies | July 2024 – September 2024{" "}
                        </h4>
                        <br />

                        <ul>
                            <li>Developed a full-stack Expense Manager Tool using Java, Servlets, JSP, and JDBC.</li>
                            <li>Gained hands-on experience in web application architecture, MVC design patterns, and database connectivity with MySQL.</li>
                            <li>Implemented secure user authentication, CRUD operations, and session management.</li>
                            <li>Collaborated with a team using tools like Apache Tomcat, XAMPP.</li>
                            <li>Improved understanding of backend logic, form handling, and dynamic content rendering using JSP.</li>
                        </ul>


                    </div>
                </div>
            </section>
        </section>
    )
}

export default Experience