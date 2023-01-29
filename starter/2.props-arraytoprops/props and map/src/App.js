import React from 'react';

import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './Components/data';

export default function App() {

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