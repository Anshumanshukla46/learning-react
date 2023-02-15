import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/data";

export default function App() {

  const cards = data.map(item => {
    return (

      <Card
        key={item.id}
        item={item}
      />

    )
  });


  return (
    <div className="App">

      <Navbar />

      <div className="card-app">
        {cards}
      </div>

    </div>
  );

}