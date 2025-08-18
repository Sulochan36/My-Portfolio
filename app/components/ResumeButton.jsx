import React from 'react'

const ResumeButton = () => {
    return (
        <div>

            <button  autoCorrect='' className="cursor-pointer group relative flex gap-1.5 px-6 py-3 bg-blue-500 bg-opacity-80 text-white rounded-3xl hover:bg-opacity-70 hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] duration-500 font-semibold shadow-md">
                <span className='shadow-[0_0_15px_rgba(0, 0, 0, 0.4)]'>Resume</span>
            </button>
        </div>
    )
}

export default ResumeButton