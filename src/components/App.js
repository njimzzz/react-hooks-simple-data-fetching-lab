// create your App component here
import React, { useEffect, useState } from "react";
 
function App() {
    const [dogPictures, setDogPictures] = useState(null)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            setDogPictures(data.message)
        })
    },  [])

   if (!dogPictures) return <p>Loading...</p>

   return <img src={dogPictures} alt="A Random Dog"/>
}

export default App
