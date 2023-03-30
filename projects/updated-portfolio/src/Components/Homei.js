import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {

    return (
        <div name="home"
            className='bg-[#0a192f] w-full h-screen'>

            <div className='card'>

                {/* <div className='border border-b-green-50 w-2/6 h-2/6 mx-auto px-28 flex flex-col justify-center'> */}
                <div className='card-image'>
                    <img src="" alt="photo"
                    />
                </div>
                {/* </div> */}


                {/* Container */}
                <div className='card-text w-4/6 mx-auto  flex flex-col justify-center h-full'>

                    {/* taken same color with of logo */}
                    <p className='text-pink-600'>Hi, my name is</p>

                    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Anshuman Shukla</h1>

                    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Front End Developer.</h2>

                    {/* should add problem solving : sde */}
                    <p className='text-[#8892b0] py-4 max-w-[700px]'>
                        I'm Front End Developer specializing in building digital experience websites. Currently, I'm focused on building full-stack web application.
                    </p>

                    <div>
                        <button className='group text-white border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>

                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home
