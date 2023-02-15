import React from "react";
import ReactDOM from 'react-dom/client';

import About from './About';
import Interest from './Interest';

export default function Descript() {
    return (
        <div className="description">
            <h2 className="descrip-name">Anshuman Shukla</h2>

            <p className="descrip-designation">Frontend Developer</p>

            <p className="descrip-email">Github/Anshumanshukla46</p>

            <button className="descrip-button">
                <i className="fa">&#xf0e0;</i>
                Email
            </button>

            <About />
            <Interest />
        </div >
    )
}