import React from 'react';

import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './Components/data';

export default function App() {

  /**
   * Challenge: Map over the thingsArray to generate
   * a <p> element for each item and render them on the page
   * below the button.
   
    "MAP"

  const thingsArray = ["Thing 1", "Thing 2"]

// with css(but type of javascript as document.getElementById('something').style.backgroundColor = "red")
// this is an object
const style = {
  backgroundColor:"black"
}

  const a = thingsArray.map(i => {
    return (
      // first curly to come from jsx to js, and next curly braces to add the object of js

      <p style={style} className="para" > {i} </p> //=> {i} is very important
    )
  })

  now just use this as in render-

    return (
      <div>
        {a} 
      </div>
    ) 

    // else if you have Components the use some stuff to add

*/

  const cards = data.map(item => {
    return (
      /**
        <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}

        // we can also use object literal by distributing the items
        as -
        
        {..item}  => now at the receiving end above syntax will as this 
        will make all attribute to spread

        /// but only this is in good now

      <Card
        key={item.id}
        item={item}
      />

      />
        here is show many items are passed bulky
       */

      <Card
        key={item.id}
        item={item}
      />

    )
  })


  return (
    <div>
      <Hero />
      <NavBar />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}