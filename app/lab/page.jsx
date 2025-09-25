import React from 'react'
import Container from '../components/Container'
import ComingSoon from '../sections/ComingSoon'

const page = () => {
    return (
        <Container className='flex justify-center items-center flex-grow'> 
            <div>
                <ComingSoon/>
            </div>
        </Container>
        
    )
}

export default page