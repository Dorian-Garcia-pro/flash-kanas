import Card from "./Card.js";
import "./Deck.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  rndCard,
  flipCard,
  resetToRecto,
  selectedToggleKanaFilter,
  selectedToggleAll,
  togglefilters,
} from "../cardSlice.js";

function Deck({ front, back }) {
  const cardStore = useSelector((store) => store.card);
  const dispatch = useDispatch();

  function handleRndInvertInfinite() {
    dispatch(resetToRecto());
    setTimeout(() => {
      dispatch(rndCard());
    }, 120);
  }

  const selectedInfinite = (kana) => {
    cardStore.rectoVerso ? dispatch(flipCard()) : handleRndInvertInfinite();
  };

  /*   const test = (kana) => {}; */

  return (
    <div className="deck-container">
      <div className="leftCol">
        <p>Ok</p>
      </div>
      <div className="card-container">
        <Card />

        <button
          className="btn"
          onClick={() =>
            cardStore.listHiraganas.filter((e) => e.selected === true).length <=
            1
              ? dispatch(flipCard())
              : selectedInfinite()
          }
        >
          Selected Infinite
        </button>
      </div>

      <div className="filtersContainer">
        <button className="btn" onClick={() => dispatch(togglefilters())}>
          Filtres
        </button>
        {cardStore.displayfilters ? (
          <div className="allFilters">
            <div className="allFiltersBtnToggleAll">
              <button
                className="btn"
                onClick={() => dispatch(selectedToggleAll(true))}
              >
                Select All
              </button>
              <button
                className="btn"
                onClick={() => dispatch(selectedToggleAll(false))}
              >
                Unselect All
              </button>
            </div>
            <div className="selectKanas">
              {cardStore.listHiraganas
                .filter((kana) => kana.cat !== "combinaisons")
                .map((kana) =>
                  kana.selected ? (
                    <p
                      key={kana.nb}
                      className="kanaSelected"
                      onClick={() => dispatch(selectedToggleKanaFilter(kana))}
                    >
                      {kana.kana}
                    </p>
                  ) : (
                    <p
                      key={kana.nb}
                      className=""
                      onClick={() => dispatch(selectedToggleKanaFilter(kana))}
                    >
                      {kana.kana}
                    </p>
                  )
                )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Deck;
