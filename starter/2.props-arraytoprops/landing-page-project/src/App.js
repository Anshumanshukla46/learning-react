import React from "react";
import ReactDOM from 'react-dom/client';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import List from "./Components/List";
import data from "./Components/data";

export default function App() {
  const lst = data.map(i => {
    return (
      <List
        key={i.id}
        i={i}
      />
    )
  })

  return (
    <div >
      < Navbar />
      <Hero />
      <section>
        {lst}
      </section>
    </div >
  );
}