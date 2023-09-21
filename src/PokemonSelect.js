import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice } from "./helpers";

/* Select element to choose from common pokemon. */
// set 'pokemon' equal to 'pokemonList', an array of pokemon character names to be used in dropdown menu
// pass in 'addResponseData' custom hook to be used for onClick events
function PokemonSelect({ addResponseData, pokemon = pokemonList }) {
  // set piece of state 'pokeIdx' equal to zero
  const [pokeIdx, setPokeIdx] = useState(0);

  // function that resets piece of state 'pokeIdx' to the idx of the pokemon selected in drop down menu (evt.target.value)  
  const handleChange = evt => {
    setPokeIdx(evt.target.value);
  };
  // <select> creates a drop down menu with different pokemon names (<option>'s) to select from 
  // when there's a change to the <select> element (when a pokemon is selected from drop down menu), call the handleChange() function. This will take the idx assigned to the selected pokemon (evt.target.value), and update piece of state 'pokeIdx'
  return (
    <div>
      <select onChange={handleChange}>
        {/* loop over array of pokemon names and for every name, create an <option> with the pokemon name from drop down menu */}
        {pokemon.map((name, idx) => (
          <option key={idx} value={idx}>
            {name}
          </option>
        ))}
      </select>
      {/* when click 'Catch one!' button, execute the "addResponseData" custom hook function (passed in from PokeDex Component). This function makes an axios request that returns the properties of the pokemon with an index of [pokeIdx] (the pokemon in the pokemon array with the index that's stored in state, 'pokeIdx') and creates a new array with what's already in piece of state 'axiosResponses' (set in PokeDex Component) as well as a newly created object with all of response.data and the id of the pokemon selected (pokemon[pokeIdx])) */}
      <button onClick={() => addResponseData(pokemon[pokeIdx])}>Catch one!</button>
      {/* when click the 'I'm feeling lucky' button, execute the 'addResponseData' custom hook function with 'choice' function passed in from helpers.js file. The 'choice' function generates a random number and finds the name in the pokemon list that has an index equal to that random number. The 'addResponseData' function returns the properties of the pokemon with the name found from 'choice(pokemon)' and creates a new array with what's already in piece of state 'axiosResponses' (set in PokeDex Component) as well as a newly created object with all of response.data and the id of the pokemon randomly chosen from 'choice(pokemon)'  */}
      <button onClick={() => addResponseData(choice(pokemon))}>I'm feeling lucky</button>
    </div>
    
  );
}

export default PokemonSelect;
