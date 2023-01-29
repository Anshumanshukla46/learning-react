import React from "react";
import world from "./images/world.png";
import { FaGlobe } from "react-icons/fa";
// 1. npm install react-icons
// 2. import { IconName } from "react-icons/fa"; => use that as components




export default function Navbar() {
    return (
        <div className="nav">
            <FaGlobe />
            <span className="title">my travel journal.</span>

        </div>
    )
}