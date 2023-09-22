import { useState } from 'react';
import axios from "axios";
import uuid from "uuid";


// put the flipCard() functionality used in PokemonCard and PlayingCard components into this file and then import this file into PokemonCard.js and PlayingCard.js files
// can use this custom hook (useFlip) anywhere in our application where a piece of state needs to be toggled from true to false and false to true
// define the custom hook function. It sets up a piece of state ('isFlipped') (which accepts an initialState equal to a default value of true or false) and a function ('flipCard') and returns both of them in an array so they can be destructured in PokemonCard.js and PlayingCard.js files. 

const useFlip = (initialState = true) => {
    // set initial state of 'isFacingUp' to true  
    const [isFacingUp, setFlipped] = useState(initialState);
    // flipCard() function changes state of 'isFacingUp' from true to false and vice versa when executed
    const flipCard = () => {
        // if piece of state 'isFacingUp' is true, set it to false. If it's false, set it to true
        setFlipped(isUp => !isUp);
    };

    // need to return an array and destructure 'isFlipped' and 'flipCard' so useFlip() function can be called in PokemonCard.js and PlayingCard.js files and destructured so we can access the 'isFlipped' state and flipCard function
    return [isFacingUp, flipCard]

}

const useAxios = (baseUrl) => {
    // set piece of state 'axiosResponses' equal to an empty array
    const [axiosResponses, setAxiosResponses] = useState([]);
    // addResponseData() function below makes an AJAX request using the 'baseUrl' passed in to useAxios above (in PokeDex component, pokemon API baseUrl is passed in to useAxios ('useAxios(`https://pokeapi.co/api/v2/pokemon/`)') and to set the state of 'axiosResponses'. In addition, 'pokemonName' is passed in as the ending of the baseUrl (this adds the name of the pokemon to the end of baseUrl so can retrieve data about a specific pokemon) and adds the response data to the piece of state 'responses'
    const addResponseData = async(evt, endOfUrl = "") => {
         console.log(endOfUrl)
        const response = await axios.get(`${baseUrl}${endOfUrl}`);
       
        // '...responses' creates a new array with what's already in piece of state 'responses' and adds a newly created object with everything that's in response.data and the id of the response
        setAxiosResponses(data => [...data, { ...response.data, id: uuid() }]);
    };

    return [axiosResponses, addResponseData]
}

export {useFlip, useAxios};
