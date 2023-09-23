import React from "react";
import {useAxios} from "./hooks";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random or from a dropdown of available pokemon. */
function PokeDex() {
  // use custom hook 'useAxios', which returns an array of the axios response data (piece of state 'axiosResponses') and a function 'addResponseData'. addResponseData() makes an AJAX request using the url passed in to 'useAxios(url)' and adds the response data to the piece of state 'axiosResponses'.
  // To destructure useAxios, we can use variable 'axiosResponses' to keep the piece of state of the axios responses and 'addResponseData' as the function that adds the response data from the drawn cards to the piece of state 
  // the intial state of 'cards' starts out as an empty array when calling 'useAxios(<deck of cards API URL>) function for the first time, but when the function executes (each time click on button), 'cards' array will be updated with a new object containing the values of response.data from the AJAX request.
  const [axiosResponses, addResponseData] = useAxios(`https://pokeapi.co/api/v2/pokemon/`);
 
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        {/* render PokemonSelect component with the custom hook function 'addResponseData' passed in as a prop. This creates drop down menu of pokemon names. */}
        <PokemonSelect addResponseData={addResponseData} />
      </div>
      <div className="PokeDex-card-area">
         {/* map over every axios response object (cardData) in piece of state 'axiosResponses' and render the PokemonCard component with key, front, back, name, stats and their values passed in as props*/}
        {axiosResponses.map(cardData => (
          <PokemonCard
            key={cardData.id}
            // 'sprites' and 'stats' are properties of https://pokeapi.co/api/v2/pokemon/${name}/
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            // loop over the property 'stats' in cardData, and for every stat, create an object containing a value and a name (i.e. for {name} = pikachu:  {hp: 35, attack: 55, defense: 40, special-attack: 50, special-defense: 50, speed: 90})
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
