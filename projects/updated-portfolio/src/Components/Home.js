import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {

    return (
        <div name="home"
            className='bg-[#0a192f] w-full h-screen'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

                {/* taken same color with of logo */}
                <p className='text-pink-600'>Hi, my name is</p>

                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Anshuman Shukla</h1>

                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer.</h2>

                {/* should add problem solving : sde */}
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I'm Front End Developer primarily on creating websites with interactive elements.Currently, Currently, I am working on full-stack web application.
                </p>

                <div>

                    <Link to='work' smooth={true} duration={500}>
                        <button
                            className='group text-white border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Home
