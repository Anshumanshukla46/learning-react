import React from "react";
import ReactDOM from 'react-dom/client';
import Photo from './image.png'

export default function Image() {
    return (
        <img className="image-photo" src={Photo} />
    )
}