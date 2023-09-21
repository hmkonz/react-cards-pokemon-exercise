import React from "react";
import {useFlip} from "./hooks";
import "./PokemonCard.css";

/* Renders a single pokemon card. */
// front, back, name and stats are passed in as props when rendering PokemonCard component in PokeDex 
function PokemonCard({ front, back, name, stats }) {
  // set initial state of 'isFacingUp' to true  
  const [isFacingUp, flipCard] = useFlip();

  return (
    // 'flipCard' will be executed when click on card
    <div onClick={flipCard} className="PokemonCard Card">
      {/* if 'isFacingUp' is true:   */}
      {isFacingUp ? (
        <div className="PokemonCard-front">
          {/* create an image of the front of the card ('front' is a property passed in to PokemonCard component)*/}
          <img src={front} alt={`{name} front`} />
          <div>
            {/* show the card name {name} ('name' is a property passed in to PokemonCard component)*/}
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {/* iterate over stats and for each stat, create an <li> with the stat.name: stat.value. ('stats' is a property passed in to PokemonCard component) */}
              {stats.map(stat => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        // if 'isFacingUp' is false:
      ) : (
        <div className="PokemonCard-back">
          {/* create an image of the back of the card. ('back' is a property passed in to PokemonCard component)*/}
          <img src={back} alt={`{name} back`} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;

