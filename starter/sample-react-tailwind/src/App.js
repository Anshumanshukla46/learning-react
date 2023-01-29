import React, { useState, useEffect } from "react"
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

// useState and useEffect are hooks and will be used as state variable

export default function App() {

  const [images, setImages] = useState([]); // good to destruct the whole
  const [isLoading, setIsLoading] = useState(true); // in bracket their is default value
  const [term, setTerm] = useState('');

  // The Fetch API through the fetch() method allows us to make an HTTP request to the backend. With this method, we can perform different types of operations using HTTP methods like the GET
  useEffect(() => {

    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits); // it means now we just 
        setIsLoading(false);
      })
      .catch(err => { console.log(err) })
  }, [term])  // DependencyList




  // creating card 
  return (
    // going to loop over all images => using MAP
    <div className="container mx-auto">

      <ImageSearch

        // passing this for showing search image

        searchText={(text) => setTerm(text)}
      />


      {/* when no images are found */}
      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No image found</h1>}

      {/* now we want a grid for showing the image as we wouldn't use layout then all image will be on top of each other */}

      {/* we can use isLoading to show when no image is their  */}

      <div className="grid grid-cols-3 gap-4">
        {
          images.map(item => ( // this will be parentheses not curly braces
            <ImageCard
              key={item.id} image={item}
            />
          ))
        }
      </div>

    </div>
  )
}