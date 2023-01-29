import React from "react";

export default function Form() {
    return (

        // flex flex-row space-x-10 mt-10 ml-10 w-2/3

        <main className="p-9">
            <div className="grid grid-cols-2 gap-4">

                {/* <input type="text" className="w-56 h-9 border-2 border-[#D5D4D8] rounded-md mr-20 mb-10" />

                <input type="text" className="w-56 h-9 border-2 border-[#D5D4D8] rounded-md" />
                <br />

                <input type="button" value="Get a new meme image 🎭" className="button mt-5 rounded-full flex-wrap p-4 text-white font-semibold cursor-pointer" /> */}

                <input
                    type="text"
                    placeholder="Meme's Top text"
                    className="form--input"
                />

                <input
                    type="text"
                    placeholder="Meme's Bottom text"
                    className="form--input"
                />

                <button
                    className="form--button"
                >
                    Get a new meme image 🎍
                </button>

            </div>
        </main>
    );
}