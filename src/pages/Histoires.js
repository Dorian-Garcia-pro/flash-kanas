import React from "react";
import "./Histoires.scss";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";

function Histoires() {
  const cardStore = useSelector((store) => store.card);
  const [openModalHistoires, setopenModalHistoires] = useState(false);
  const [histoireSelected, setHistoireSelected] = useState(0);
  const [kanasSelected, setKanasSelected] = useState(true);
  const modalRef = useRef(null);

  const openModalHistoiresHandle = (kana) => {
    setopenModalHistoires(true);
    setHistoireSelected(kana);
  };

  useEffect(() => {
    const body = document.querySelector("body");

    if (openModalHistoires) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [openModalHistoires]);

  return (
    <div id="histoiresMainContainer">
      <div className="filterHistoires">
        <div
          className={
            kanasSelected
              ? "btn btnToggleFilterHiraganas btnToggleFilterSelected "
              : "btn btnToggleFilterHiraganas"
          }
          onClick={() => setKanasSelected((prev) => !prev)}
        >
          <p>ひらがな</p>
        </div>
        <div
          className={
            kanasSelected
              ? "btn btnToggleFilterHiraganas "
              : "btn btnToggleFilterHiraganas btnToggleFilterSelected"
          }
          onClick={() => setKanasSelected((prev) => !prev)}
        >
          <p>カタカナ</p>
        </div>
      </div>
      <div id="histoiresContainer">
        {kanasSelected
          ? cardStore.listHiraganas
              .filter((e) => e.img)
              .map((e, index) => (
                <img
                  key={index}
                  id={index}
                  src={e.img}
                  alt={e.kana}
                  className="histoire"
                  preload="auto"
                  onClick={() => openModalHistoiresHandle(index)}
                />
              ))
          : cardStore.listKatakanas
              .filter((e) => e.img)
              .map((e, index) => (
                <img
                  key={index}
                  id={index}
                  src={e.img}
                  alt={e.kana}
                  className="histoire"
                  onClick={() => openModalHistoiresHandle(index)}
                />
              ))}
      </div>
      {openModalHistoires ? (
        <div id="modalHistoires" onClick={() => setopenModalHistoires(false)}>
          <img
            src={
              kanasSelected
                ? cardStore.listHiraganas[histoireSelected].img
                : cardStore.listKatakanas[histoireSelected].img
            }
            alt="oui"
            className="histoire"
            ref={modalRef}
          ></img>
          {/*  <p>{cardStore.listHiraganas[histoireSelected].histoire}</p> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Histoires;
