import React from "react";
import logo from "./airbnb3.jpg"


export default function NavBar() {
    return (
        <nav className="navbar">
            <img id="logo" src={logo} />
        </nav>
    );
}