import React from "react";
import logo from "../images/Troll Face.png";

export default function Navbar() {
    return (
        <div className="nav flex flex-row">
            <img src={logo} alt="logo" className="w-20 h-18 p-3" />
            <span className="name font-bold text-white tracking-tighter text-2xl text-right mt-4 ml-10">MemeGenerator</span>
        </div>
    )
}