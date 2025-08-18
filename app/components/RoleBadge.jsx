'use client';

import React, { useEffect, useState } from 'react'

const RoleBadge = () => {

    const roles = ["Frontend Developer" , "Fullstack Developer" , "Software Engineer"]
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setFade(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <span className='border-[2px] border-neutral-700 inline-block px-2 py-0.5 w-[200px] items-center justify-center rounded-2xl bg-transparent transition duration-500 shadow shadow-neutral-500 '>
                <span className={` font-bold transition-opacity translate-y-10 duration-500 ${fade ? ' opacity-100' : 'opacity-0'
                    }`}>
                    {roles[currentRoleIndex]}
                </span>
            </span>
        </>
    )
}

export default RoleBadge