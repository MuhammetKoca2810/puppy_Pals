import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handleClick = (id) => {
    setFeatPupId(id);
  };

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log("featuredPup: ", featuredPup);
  return (
    <div className="App">
      <div className="puppy-list">
        {puppies.map((puppy) => {
          return (
            <p
              className="puppy-item"
              onClick={() => handleClick(puppy.id)}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
      {featPupId && (
        <div className="featured-puppy">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
