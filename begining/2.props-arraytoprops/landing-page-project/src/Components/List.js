import React from "react";
import image from "../images/book.jpeg";

export default function List(props) {
    console.log(props.i);
    return (
        <div className="mt-4 flex flex-row border-2 border-rose-500">
            <img src={require(`../images/${props.i.coverImg}`)} className="w-36" />

            <div className="flex flex-col mt-3 ml-2 w-32">

                <p className="text-2xl font-bold">{props.i.title}</p>

                <p className="">{props.i.description}</p>
            </div>
        </div>
    )
}