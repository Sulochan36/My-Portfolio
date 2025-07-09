import React from 'react';

const AnimatedBlobBackground = () => {
    return (
        <div className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] -z-10 animate-blob-move pointer-events-none">
            <svg
                className="w-full h-full blur-3xl opacity-40"
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#9333ea" stopOpacity="0.8" />
                    </linearGradient>
                </defs>
                <path fill="url(#grad1)">
                    <animate
                        attributeName="d"
                        dur="15s"
                        repeatCount="indefinite"
                        values="
              M421.5,316.5Q430,383,365,416Q300,449,252.5,399.5Q205,350,176.5,300Q148,250,198.5,205Q249,160,324.5,140Q400,120,431.5,185Q463,250,421.5,316.5;
              M405,321Q390,392,325,412Q260,432,226.5,377Q193,322,150,286Q107,250,163.5,202Q220,154,301,150Q382,146,419.5,198Q457,250,405,321;
              M421.5,316.5Q430,383,365,416Q300,449,252.5,399.5Q205,350,176.5,300Q148,250,198.5,205Q249,160,324.5,140Q400,120,431.5,185Q463,250,421.5,316.5
            "
                    />
                </path>
            </svg>
        </div>
    );
};

export default AnimatedBlobBackground;
