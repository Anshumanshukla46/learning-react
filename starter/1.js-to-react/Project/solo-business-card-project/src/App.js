import React from "react";
import ReactDOM from 'react-dom/client';

import Image from './components/Image';
import Description from './components/Description';
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Image />
      <Description />
      <Footer />
    </div>
  );
}