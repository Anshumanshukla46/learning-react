import React from "react";

// https://pixabay.com/api/?key=33015194-f4542c20c346fcf3ea4e097b4&q=yellow+flowers&image_type=photo&pretty=true

export default function ImageCard(props) {
    console.log("@" + props);

    // setImages(data.hits); // it means now we just have hits as our props

    // image is as hits from api


    const tags = props.image.tags.split(',');

    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={props.image.webformatURL} className="w-full" />

            <div className="px-6 py-4">

                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo By <span className="underline">{props.image.user}</span>
                </div>

                {/* infomation */}
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {props.image.views}
                    </li>

                    <li>
                        <strong>Download: </strong>
                        {props.image.downloads}
                    </li>

                    <li>
                        <strong>Likes: </strong>
                        {props.image.likes}
                    </li>
                </ul>

            </div>

            {/* tags */}
            <div className="px-6 py-4">

                {
                    tags.map((elem, index) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            #{elem}
                        </span>
                    ))
                }

            </div>

        </div>
    );
}