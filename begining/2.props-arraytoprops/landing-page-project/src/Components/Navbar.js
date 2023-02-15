import React from "react";
import ReactDOM from 'react-dom/client';
import logo from "../images/logo.jpeg";

export default function Navbar() {
    return (

        <div className="flex flex-row space-x-6">

            <a href="#">
                <img src={logo} alt="logo" className="w-20 m-3" />
            </a>

            <a href="#" className="ml-2 mt-6 hover:underline text-gray-500 hover:text-black">Get Free Landing Page</a>

            <a href="#" className="ml-4 mt-6 hover:underline text-gray-500 hover:text-black">Feature</a>

            <a href="#" className="ml-4 mt-6 hover:underline text-gray-500 hover:text-black">Service</a>

            <a href="#" className="ml-4 mt-6 hover:underline text-gray-500 hover:text-black">Contact</a>

            <div className=" ml-4 mt-6">
                <a href="#" className="bg-blue-400 p-2 text-white rounded-full hover:opacity-70">
                    <button>Get Started</button>
                </a>
            </div>

        </div>
    )
}
