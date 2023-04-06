import React from "react";
import "./Card.scss";
import { useSelector, useDispatch } from "react-redux";
import { flipCard } from "../cardSlice.js";

function Card({ front, back, rndRectoVerso }) {
  const cardStore = useSelector((store) => store.card);
  const dispatch = useDispatch();

  const leFlip = () => {
    dispatch(flipCard());
  };

  let chosneNb = cardStore.listHiraganas.filter((e) => e.selected === true)[
    cardStore.InitNbCard
  ]
    ? cardStore.listHiraganas.filter((e) => e.selected === true)[
        cardStore.InitNbCard
      ]
    : cardStore.listHiraganas[0];

  return (
    <div
      className={`card ${cardStore.rectoVerso ? "" : "flipped"}`}
      onClick={leFlip}
    >
      <div className="front">
        <p>{chosneNb.kana}</p>
      </div>
      <div className="back">
        <p>{chosneNb.romaji}</p>
      </div>
    </div>
  );
}

export default Card;
