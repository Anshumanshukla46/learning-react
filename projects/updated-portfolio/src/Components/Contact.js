import React from 'react'

const Contact = () => {
    return (
        // name used for using react-scroll
        <div
            name='contact'
            // w-full h-screen
            className=' bg-[#0a192f] flex justify-center items-center pb-4'>

            {/* will get response from getFormIo */}
            <form method='POST'
                action="https://getform.io/f/37ec9e64-5728-4e8e-bafc-3abc6397de8f"
                className='flex flex-col max-w-[600px] w-full'>

                {/* padding */}
                <div className='pb-8'>

                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                        Contact</p>

                    <p
                        className='text-white py-4'>
                        Submit the form below or shoot me an email at 'anshumanshukla46@gmail.com'
                    </p>
                </div>


                {/* bg-[#ccd6f6] */}
                <input
                    className='placeholder:text-white bg-[#253143] p-2 text-white'
                    type="text"
                    placeholder='Name'
                    name='name'
                />


                <input
                    className='placeholder:text-white my-4 p-2 text-white bg-[#253143]'
                    type="email"
                    placeholder='Email'
                    name='email' />

                <textarea
                    className='bg-[#253143] p-2 text-white placeholder:text-white border-0'
                    name="message" rows="10"
                    placeholder='Message'
                    defaultValue="Message will reach me!" ></textarea>

                <button
                    className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
                    Let's Collaborate
                </button>

            </form>
        </div>
    )
}

export default Contact