import React from 'react'

function SingleProject({ gif, title, demoLink, codeLink, }) {
    return (
        // <div>
        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contentDiv'
            style={{ backgroundImage: `url(${gif})` }}>

            <div className='opacity-0 group-hover:opacity-100'>

                <span className='text-2xl font-semibold text-[#0a192f] tracking-wider text-left'>
                    {title}</span>

                <div className='pt-8 text-center'>

                    <a href={demoLink}>
                        <button className='text-center rounded-lg p-3 m-2 bg-[#0a192f] text-white font-mono'>Demo</button>
                    </a>

                    <a href={codeLink}>
                        <button className='text-center rounded-lg p-3 m-2 bg-[#0a192f] text-white font-mono'>Code</button>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default SingleProject
