import React, { useState } from "react"

export default function ImageSearch(props) {

    const [text, setText] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();

        props.searchText(text); // search whatever in input
    }

    return (

        // search box

        <div className="max-w-sm rouded overflow-hidden my-10 mx-auto">

            <form className="w-full max-w-sm" onSubmit={onSubmit} >

                <div className="flex items-center border-b border-teal-500 py-2">

                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image"
                        onChange={e => setText(e.target.value)} // this will show the text
                    />

                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                        Search
                    </button>


                </div>

            </form>

        </div>
    )
}