import React from "react";
import ReactDOM from 'react-dom/client';
import image from './react.png'

export default function Nav() {
    return (
        <nav>
            <img src={image} className="nav--icon" />

            <h3 className="nav--logo_text">ReactFacts</h3>

            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    );
}