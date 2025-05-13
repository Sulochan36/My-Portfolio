import React from 'react'

const Herobg = () => {
    return (
        <div className="relative w-full h-full">
            <img
                src="/herobg.png"
                alt="webdevtechs"
                className="object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent opacity-50"></div>
        </div>
    )
}

export default Herobg
