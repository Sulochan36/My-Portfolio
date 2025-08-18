"use client"

import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a75b40a0-b675-4c56-a062-c095b0bdea0f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <section id="contact" className='w-full md:max-w-4xl flex flex-col justify-center items-center p-2 mt-30 mb-16 '>
            <h2 className='headings'>Get In Touch</h2>
            <div>
                <form onSubmit={onSubmit} className='flex flex-col flex-wrap gap-5 min-w-[130px] md:min-w-xl lg:min-w-2xl mt-10 dark:text-white'>
                    <div className='flex flex-row flex-wrap gap-5'>
                        <input type="text" placeholder='Enter Your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-2xl focus:border-primary' name='name' />
                        <input type="email" name="email" id="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-2xl focus:border-primary' />
                    </div>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Write Your message here....' className='w-full p-4 outline-none border-[0.5px] border-gray-400 mb-6 rounded-2xl focus:border-primary'></textarea>

                    <button type="submit" className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-primary font-semibold text-white rounded-4xl mx-auto hover:bg-blue-400 hover:cursor-pointer hover:text-black duration-500'>Submit Now</button>

                    <p className='mt-4'>{result}</p>
                </form>
            </div>
        </section>
    )
}

export default Contact