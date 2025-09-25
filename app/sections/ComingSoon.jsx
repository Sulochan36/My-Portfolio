import Image from 'next/image'
import React from 'react'

const ComingSoon = () => {
    return (
        <section className='flex flex-col gap-y-20 justify-center items-center'>
            <h2 className='text-6xl text-black dark:text-white '>CONTENT WILL BE VISIBLE SOON</h2>
            <Image
                src="/working-with-laptop.svg"
                width={400}
                height={400}
                alt="Working on it"
            />
        </section>
    )
}

export default ComingSoon