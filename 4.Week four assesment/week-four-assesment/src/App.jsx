import './App.css';
import './input.jsx';
import React from 'react';
import { useState } from 'react';

  

 
function App() {
  let  [myList, setMylist] = useState([
    {
      id: 1,
      first_name: "Ted",
      movieTitle: "Hole in My Heart, A (Hål i mitt hjärta, Ett)",
      movieGenre: "Drama"
    }, {
      id: 2,
      first_name: "Cullie",
      movieTitle: "Apollo 13: To the Edge and Back",
      movieGenre: "Documentary"
    }, {
      id: 3,
      first_name: "Nikolia",
      movieTitle: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      movieGenre: "Comedy|War"
    }, {
      id: 4,
      first_name: "Armando",
      movieTitle: "Nightmare on Elm Street 5: The Dream Child, A",
      movieGenre: "Horror"
    }, {
      id: 5,
      first_name: "Hildegaard",
      movieTitle: "Somewhere Under the Broad Sky",
      movieGenre: "(no genres listed)"
    }, {
      id: 6,
      first_name: "Monique",
      movieTitle: "Crowd, The",
      movieGenre: "Drama"
    }, {
      id: 7,
      first_name: "Marie",
      movieTitle: "Little Secrets",
      movieGenre: "Children|Comedy|Drama"
    }, {
      id: 8,
      first_name: "Florencia",
      movieTitle: "Jackpot 2",
      movieGenre: "Sci-Fi"
    }, {
      id: 9,
      first_name: "Jyoti",
      movieTitle: "Darfur Now",
      movieGenre: "Documentary"
    }, {
      id: 10,
      first_name: "Yulma",
      movieTitle: "Daredevil",
      movieGenre: "Action|Crime"
    }]);
     
    let filtered = myList.filter(function(value){
      return value (myList.movieGenre === "Action|Crime");
    })
    console.log(filtered);

  return (
    <div className="App">
      {/* <React.StrictMode>
    <Input />
  </React.StrictMode> */}
      {myList.map((myList)=>(
        <div className="actorname" key={myList.id}>
          <h1>Actors name is {myList.first_name}</h1>
          <p>From the movie{myList.movieTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
