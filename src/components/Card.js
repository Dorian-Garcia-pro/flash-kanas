import React from "react";
import './Card.scss';
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { flipCard } from "../cardSlice.js";

function Card({ front, back, rndRectoVerso}) {
  const  cardStore  = useSelector((store) => store.card)
  const dispatch = useDispatch()

  const handleClick = () => {
   dispatch(flipCard())
  };

  return (
    <div className={`card ${cardStore.rectoVerso ? "flipped" : ""}`} onClick={handleClick}>
      <div className="front"><p>{front}</p></div>
      <div className="back"><p>{back}</p></div>
    </div>
  );
}

export default Card;
