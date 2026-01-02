import React from 'react'
import { cn } from '../lib/utils';

const Container = ({children,className}) => {
    return (
        <div className={cn('lg:w-5xl md:w-4xl w-[52rem] mx-auto',className)}>
            {children}
        </div>
    )
}

export default Container;