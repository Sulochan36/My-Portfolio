import React from 'react'

const pc = () => {
    return (


        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src={cover} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{shortDescription}</p>
                
                <div className="flex gap-5">
                    {livePreview && (
                        <a
                            href={livePreview}
                            className="flex gap-2 text-sm text-blue-500 underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:gap-3 md:text-base"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Eye className="w-[18px] md:w-5" />
                            <span>Live Preview</span>
                        </a>
                    )}
                    {githubLink && (
                        <a
                            href={githubLink}
                            className="flex gap-2 text-sm text-blue-500 underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:gap-3 md:text-base"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="w-[18px] md:w-5" />
                            <span>Github Link</span>
                        </a>
                    )}
                </div>

            </div>
        </div>

    )
}

export default pc