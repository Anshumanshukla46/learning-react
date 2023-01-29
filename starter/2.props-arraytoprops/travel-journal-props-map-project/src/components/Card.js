import React from "react";

import { FaLocationArrow } from "react-icons/fa";
// font awesome logo

export default function Card(props) {
    console.log(props.item);
    return (
        <div className="card">

            <div className="card-image">
                <img src={require(`../components/images/${props.item.coverImg}`)} />
            </div>

            <div className="card-text">

                <div className="card-top">
                    <span className="logo">
                        <FaLocationArrow />
                    </span>

                    <span className="card-bold"> {props.item.location} </span>

                    <span className="card-gray-underline">View on Google Maps</span>

                </div>

                <h2 className="card-title">{props.item.title}</h2>

                <p className="card-date">{props.item.date}</p>

                <p className="card-normal">{props.item.description}</p>
            </div>

        </div>
    )
}