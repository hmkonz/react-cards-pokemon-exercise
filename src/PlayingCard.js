import React from "react";
import backOfCard from "./back.png";
import {useFlip} from "./hooks";
import "./PlayingCard.css"

/* Renders a single playing card. */
// 'front' is passed in as a prop when rendering PlayingCard component in PlayingCardList and equals cardData.cards[0].image. 'back' is set equal to the image in back.png
function PlayingCard({ front, back = backOfCard }) {
  // intial state of isFacingUp is set to true (done in useFlip() function in hooks.js file)
  const [isFacingUp, flipCard] = useFlip();
  
  return (
    <img
      // if 'isFacingUp' is true, set src='front' (front={cardData.cards[0].image} is passed in to PlayingCard componet when rendered in PlayingCardList component)
      // if 'isFacingUp' is false, set src='back'
      src={isFacingUp ? front : back}
      alt="playing card"
      // when click on card image, call the flipCard function to flip the card over
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
