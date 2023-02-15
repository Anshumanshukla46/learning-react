import React from "react";
import memeData from "../memesData";

/*
    Props are the data passed between the Components and we shouldn't change the data
    SIMILAR TO WHAT as it works as function 'RECEIVES THE PARAMETERS'
    Components RECEIVING props are not allowed to change
    -> using props we can pass value, functions from parent to child

    => so if any value is needed by them sibling the parent should have that value 
    to be passed in children


    function sum(a,b){
        a = 2897; // then what will be the point to get the value of a;
        return a+b;
    }

    while "STATE" are those variable which are managed and created within the components.

    like as -
        function greeting(name) {
            const date = new Date()
            const hours = date.getHours()
        }

    STATE ARE MUTABLE(can change).

    importing State in React =>
                2 ways to use this (both are same)
    1. React.useState (AnyValue)
    2. import React, {useState} from "react";

    React.useState() return an array of [undefined, fun()]
    if React.useState("hello") then ["hello", fun()]

    const arr = React.useState("hello"); // arr[0] = "hello"
    but indexing is not good

    ARRAY RESTRUCTURING
    const [str, fun] = React.useState("hello"); // arr[0] = "hello"
    1. str = "hello"

    The "fun()" is named as "setStr"
    and to updated this str we have to use setStr() function as
    setStr("World") // now str = "World"

    THIS "setStr()" can have two values as option
    1. setStr("hello World") => to update value
    this way is used Whenever you don't need the previous value to set new value of state.

    2. use "callback function" which will return new value - to update the value as 
        setStr(function(old){
            return old+"asdhk"
        })

    => Whenever you "DO" need the previous value to determine the new value then use callback function.


    function add() {
        setCount(cnt + 1)
    }

    // BUT A BETTER WAY TO DO THIS IS TO USE CALLBACK function as
     * Note: if you ever need the old value of state
     * to help you determine the "new value" of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the "old value" of state "as its parameter",
     * which you can then use to determine your new
     * value of state.
    function add() {
        setCount(function (oldval){
            return oldval+1;
        })
    }

    OR

    // if single statement as of return only
    function add() {
        setCount(oldval => oldval+1)
    }

=====================================> SPREAD OPERATOR [...oldValue]

Example1.    // TO TAKE ARRAY AS INITIALISER
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        
------------------------> USED SPREAD OPERATOR TO ADD an VALUE IN "old VALUE"
1. loop and make new array
2. use SPREAD OPERATOR

------------> RETURN TYPE SHOULD BE SAME AS INITIALISER

        setThingsArray(prevThingsArray => {
            // [...previous, `newValues`]
            // [] as it is array
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }
    

Example2. TO TAKE OBJECT AS INITIALISER

    const [contact, setContact] = React.useState({
            firstName: "John",
            lastName: "Doe",
            phone: "+1 (719) 555-1212",
            email: "itsmyrealname@example.com",
            isFavorite: true
        })

        SPREAD OPERATOR in OBJECT (if we want to change one value and keeping rest as old)
        function toggleFavorite() {
            setContact (prevContact => {
                // [] as it is OBJECT
                return {
                    ...prevContact,
                    isFavorite: !prevContact.isFavorite
                }
            })
        }

// USING THIS WE CAN PASS VALUE TO THE function passed using "Props" => works at receiving end
        onClick={()=>props.toggle(props.id)}

// work at passing end
        toggle={() => toggle(square.id)}

prevSquares = [
    {
        id:1, on:true
    },
    {
        id:2, on:false
    }
]        


    function toggle(id) {

        // this is function of states
        setSquares(prevSquares => {

            // map picked a single OBJECT each time
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })


        })

    }

*/

export default function Form() {

    // This is the state variable

    const [allMemeImages, setAllMemeImages] = React.useState(memeData);

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    function getMemeImage() {
        // Getting random image from memeData file.

        const memeArr = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random() * memeArr.length);
        const url = memeArr[randomNum].url;

        setMeme(prev => ({
            ...prev,
            randomImage: url
        }));
    }

    return (

        <main className="p-9">

            <div className="grid grid-cols-2 gap-4">


                {/* FORM - 

<input type="text" onChange={toggle} /> 

// by default every "onChange" function will take "event" as input

function toggle(event){
    console.log(event) // return event
    console.log(event.target) // return whole "input field"

    console.log(event.target.value) // return whole "entered value"
    console.log(event.target.name) // return descibed parameter

}


            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName" 
            
                // name => should be same as in state

                value={formData.firstName}  // should be same as in state 
                // this will be controlled components now react will handle it more peacefully
            /> 

            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />

========================>
// it is self-closing in react -> not like as in html => <textarea> This is html <textarea/>
1.      <textarea   placeholder="Enter comments"  /> // rest properties are same 


2.      <label htmlFor="isChecked"> Are you isChecked? </label>

            <input 
                type="checkbox"
                id="isChecked"
                checked={formData.isChecked}
                onChange={handleChange}
                name={isChecked}
            />

3. RADIO BUTTON => 
    1. HERE NAME OF ALL RADIO BUTTON SHOULD BE SAME.
    2. value is string
               
    <fieldset>
        <legend> This is legend. </legend>

                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />


        <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
        />
        </fieldset>


4. SELECT STATEMENT

    <select 
        id="favColor"
        value={formData.favColor}
        name="favColor"
        onChange={handleChange}
    >

    <option value="">-- choose--</option> // this will be choosen
    <option value="red">red</option>
    <option value="yellow">yellow</option>
    <option value="blue">blue</option>

    </select>

5. if button is in form then react will consider it as the submit BUTTON

<form onSubmit={handleSubmit}>
    <button>submit</submit>
</form>

function handleSubmit(event){
    event.preventDefault() // now after clicking submit it will not refresh the page

    // now as we are fiding the value all along then we will can directly send the value to the api (if any)
    // The data is all held in local state.
    sendToApi(formData)

}

            const [formData, setFormData] = React.useState(
                {
                    firstName:"", 
                    lastName : "",
                    isChecked:true,
                    favColor:""
                }
            )

                function handleChange(event) {
                    const {name, value, type, checked} = event.target

                    setFormData(prevFormData => {
                        return {
                            ...prevFormData,
                            [name]: type === "checkbox" ? checked : value
                        }
                    })

                }

=========================> CHECKOUT PRACTICE_FORM.JS


            */}


                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />

                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />

                <button
                    className="form--button hover:opacity-80"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🎍
                </button>

                <img src={meme.randomImage} className="max-w-md" />

            </div>

        </main>
    );
}