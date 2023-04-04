import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import { useSelector, useDispatch } from 'react-redux'; 
import { rndCard,rndRectoVerso, flipCard, invertInfinite } from "../cardSlice.js";

function Deck({ front, back }) {
  const  cardStore  = useSelector((store) => store.card)
  const dispatch = useDispatch()

  const handleAll = () => {
    dispatch(rndCard())
    dispatch(rndRectoVerso())
  }
  const handleAllInfinite = () => {
    cardStore.infiniteMode ? (
    dispatch(rndCard())
    ) :
    dispatch(flipCard());
    dispatch(invertInfinite())
  }
 
  return <div className="card-container"> 
    <Card key={cardStore.listHiraganas[cardStore.InitNbCard].nb} front={cardStore.listHiraganas[cardStore.InitNbCard].kana} back={cardStore.listHiraganas[cardStore.InitNbCard].romaji} rndRectoVerso={cardStore.rectoVerso} />
   <button onClick={() => handleAll()}>RND</button>
   <button onClick={() => handleAllInfinite()}>Infinite</button>
  </div>;
}

export default Deck;