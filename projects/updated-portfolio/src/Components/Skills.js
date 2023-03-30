import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Java from "../assets/java.png"
import Redux from "../assets/redux.png"
import Android from "../assets/android.png"
import Mui from "../assets/mui.png"
import pug from "../assets/pugjs.png"
import express from "../assets/expressjs.png"
import sql from "../assets/sql.png"



const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div>

                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>

                    <p className='py-4'>I have experience working with the following technologies </p>

                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 h-20 mx-auto' src={Java} alt="HTML icon" />

                        <p className='my-4'>Java</p>

                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />

                        <p className='my-4'>HTML</p>

                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />

                        <p className='my-4'>CSS</p>

                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />

                        <p className='my-4'>JAVASCRIPT</p>

                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />

                        <p className='my-4'>REACT</p>

                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 mx-auto' src={Redux} alt="redux icon" />

                        <p className='my-4'>REDUX</p>

                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 h-20 mx-auto' src={Android} alt="Android icon" />

                        <p className='my-4'>Android Development</p>

                    </div>




                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />

                        <p className='my-4'>GITHUB</p>

                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />

                        <p className='my-4'>TAILWINDCSS</p>

                    </div>



                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 h-20 mx-auto' src={Mui} alt="MUI icon" />

                        <p className='my-4'>Material UI</p>

                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 mx-auto' src={Node} alt="HTML icon" />

                        <p className='my-4'>NODE JS</p>

                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />

                        <p className='my-4'>MongoDB</p>

                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 mx-auto' src={express} alt="HTML icon" />

                        <p className='my-4'>Express.js</p>

                    </div>



                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 mx-auto' src={pug} alt="HTML icon" />

                        <p className='my-4'>Pug (Template Engine)</p>

                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 mx-auto' src={sql} alt="HTML icon" />

                        <p className='my-4'>SQL</p>

                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                        <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />

                        <p className='my-4'>FIREBASE</p>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Skills;