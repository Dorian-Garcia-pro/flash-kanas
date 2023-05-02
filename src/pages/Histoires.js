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
  const carrouPrevSuiv = (nav) => {
    if (nav === "prev" && histoireSelected > 0) {
      setHistoireSelected((prev) => prev - 1);
    } else if (nav === "suiv" && histoireSelected < 45) {
      setHistoireSelected((prev) => prev + 1);
    }
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
        <div id="modalHistoires">
          <div
            className="btnCarrouselPrevSuiv prev"
            onClick={() => carrouPrevSuiv("prev")}
          >
            <img src="/assets/icons/leftArrowCarrousel.png" alt="arrow" />
          </div>
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
          <div
            className="btnCarrouselPrevSuiv suiv"
            onClick={() => carrouPrevSuiv("suiv")}
          >
            <img src="/assets/icons/leftArrowCarrousel.png" alt="arrow" />
          </div>
          <div
            className="btnCarrouselQuit"
            onClick={() => setopenModalHistoires(false)}
          >
            <img src="/assets/icons/close.png" alt="close" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Histoires;
