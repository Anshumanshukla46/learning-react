import React from "react";

import star from "./Star-1.png";

/*
    MAP
example1 =>
    const squares = nums.map(function(num)
                    return num * num

example2 =>    
    const names = ["alice", "bob", "charlie"]
// -->        ["Alice", "Bob", "Charlie"]
// Your code here for capitalized first letter

const capitalized = names.map(name => (
    name[0].toUpperCase() + name.slice(1)));
})

*/

export default function Card(props) {
    console.log(props.item);


    // conditional rendering
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        /*        
                as while in the card we can add so many things then what if we have 100's of items 
                then we are not going to write code for all that in static manner.

                we can use "props" to pass the value and then "react" will make the Components
        
                anything in our jsx that is the Components that will be "jsx" but if we use curly braces 
                then it will be used as "javascript"

                  <h1>It is currently about {new Date().getHours() % 12} o'clock!</h1>
        
                passing "props"  (special syntax for non-string)
                <   Contact
                    name= "hello"
                    num = {12} 
                />
        
                receiving "props", PASSED parameter SHOULD be same.
                
                function (props){ 
                    <h1> {props.name} </h1> 
                }
        
        
                we can destribute props at the time of receiving
                function ({img, name})
                    {} 
                now can use it without {props.name} just use {name}


                BUT NAME INSIDE THE function SHOULD BE SAME AS WHATEVER IS PASSED
                ============> we often use "props.name" kind of things for better naming
        */



        <div className="card">

            {/* conditional rendering => when openSpots is zero then only this div will be shown*/}
            {badgeText && <div className="card--badge">{badgeText}</div>}


            {/* add required address using "require" 

            changed as now using props.item we using non-bulky props as items
            
            item:{
                whole: object
            }
            
            
            <img src={require(`../Components/images/${props.img}`)} className="card--image" /> */}

            <img src={require(`../Components/images/${props.item.coverImg}`)} className="card--image" />


            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>


    )
}