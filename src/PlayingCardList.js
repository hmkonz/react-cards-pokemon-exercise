import React from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import {useAxios} from "./hooks";


/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
   // use custom hook 'useAxios' which returns piece of state 'axiosResponses' (an array of objects containing axios response data) and a function 'addReponseData()'. addRespnseData() makes an AJAX request using the url passed in to 'useAxios(url)' and adds the response data to the piece of state 'axiosResponses'.
  // To destructure useAxios, we can use variable 'axiosResponses' to keep the piece of state of the axios responses and 'addReponseData' as the function that adds the response data from the drawn cards to the piece of state 
  // the intial state of 'axiosResponses' starts out as an empty array when calling 'useAxios(<deck of cards API URL>) function for the first time, but when the function executes (each time click on button), 'axiosResponses' array will be updated with a new object containing the values of response.data from the AJAX request. 

  // i.e. after 3 draws, axiosResponses = an array of 3 objects. Each click of the button makes an AJAX request creating an object containing all the data about the card drawn. 
  // (3) [{…}, {…}, {…}]
  // 0: axiosResponses: Array(1)0: {code: 'JD', image: 'https://deckofcardsapi.com/static/img/JD.png', value: 'JACK', suit: 'DIAMONDS'} Array(0)deck_id: "pu8iwv76drd3"id: "1f4e301a-55d2-4d7f-8b49-822c2fc16252"remaining: 51success: true[[Prototype]]: Object
  // 1: axiosResponses: Array(1)0: {code: '4D', image: 'https://deckofcardsapi.com/static/img/4D.png', value: '4', suit: 'DIAMONDS'} Array(0)deck_id: "pac57c72w63y"id: "7a735cfa-80d3-40eb-ac4a-7a28cfb613df"remaining: 51success: true[[Prototype]]: Object
  // 2: axiosResponses: Array(1)0: {code: '5C', image: 'https://deckofcardsapi.com/static/img/5C.png', value: '5', suit: 'CLUBS'} Array(0)deck_id: "vujy5sxcoi1m"id: "8b052c84-9b7c-4d1c-bb1c-3a9c4f654572"remaining: 51success: true[[Prototype]]: Objectlength: 3[[Prototype]]: Array(0)
  const [axiosResponses, addResponseData] = useAxios ("https://deckofcardsapi.com/api/deck/new/draw/"); 
  
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        {/* when button is clicked,send THE CALLBACK FUNCTION 'addResponseData'.*/}
        <button onClick={() => addResponseData()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {/* map over every response in piece of state 'axiosResponses' and render the PlayingCard component with 'key' and 'front' passed in as props*/}
        {axiosResponses.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}


export default CardTable;
