import React from "react";

export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center mt-10">

            <span className="text-gray-400 text-2xl">Present Your Service</span>

            <p className="text-5xl font-bold">Make landing page</p>
            <p className="text-5xl font-bold ">fast and easily.</p>

            <p className="text-gray-500 mt-3 text-3xl">Create custom landing page with shades that</p>
            <p className="text-gray-500 text-3xl">convert more visitors than any website, no coding is required.</p>

            <form>
                <input type="text" placeholder="Enter email" className="mt-3 rounded-lg mr-6 p-2 w-64" />

                <input type="button" value="Subscribe" className="p-2 bg-orange-600 rounded-lg text-white hover:opacity-80 hover:cursor-pointer" />
            </form>


            <span className="text-gray-400 mt-5">Present Your Service</span>


        </div>
    )
}