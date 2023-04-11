import Card from "./Card.js";
import "./Deck.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  rndCard,
  flipCard,
  resetToRecto,
  toggleSubFilters,
} from "../cardSlice.js";
import FilterHiraganas from "./FilterHiraganas.js";
import FilterKatakanas from "./FilterKatakanas.js";
import GramCombis from "./GramCombis.js";
import GramModifs from "./GramModifs.js";

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

  return (
    <div className="deck-container">
      {/*========================== LEFT COLUMN - START ========================== */}
      <div className="leftCol">
        <div className="allFilters">
          {/*============== GRAMMAR - START ============== */}
          <button
            className="btn btnToggleFilterHiraganas"
            onClick={() => dispatch(toggleSubFilters("toggleGramCombis"))}
          >
            {cardStore.toggleGramCombis ? "- " : "+ "}
            Combinaisons
          </button>
          {cardStore.toggleGramCombis ? <GramCombis /> : null}
          <button
            className="btn btnToggleFilterHiraganas"
            onClick={() => dispatch(toggleSubFilters("toggleGramModifs"))}
          >
            {cardStore.toggleGramModifs ? "- " : "+ "}
            Modifications
          </button>
          {cardStore.toggleGramModifs ? <GramModifs /> : null}
          {/*============== GRAMMAR - END ============== */}
        </div>
      </div>
      {/*========================== LEFT COLUMN - END ========================== */}
      {/*========================== MID COLUMN - START ========================== */}
      <div className="card-container">
        <Card />
        <button
          className="btn"
          onClick={() =>
            cardStore.listHiraganas
              .concat(cardStore.listKatakanas)
              .filter((e) => e.selected === true).length <= 1
              ? dispatch(flipCard())
              : selectedInfinite()
          }
        >
          Next
        </button>
      </div>
      {/*========================== MID COLUMN - END ========================== */}
      {/*========================== RIGHT COLUMN - START ========================== */}
      <div className="filtersContainer">
        {/*         <button className="btn" onClick={() => dispatch(togglefilters())}>
          Filtres
        </button> */}
        {/*================== ALL FILTERS - START ================== */}

        <div className="allFilters">
          {/*============== HIRAGANAS FILTERS - START ============== */}
          <button
            className="btn btnToggleFilterHiraganas"
            onClick={() => dispatch(toggleSubFilters("toggleFilterHiraganas"))}
          >
            {cardStore.toggleFilterHiraganas ? "- " : "+ "}
            Hiraganas ({" "}
            {cardStore.listHiraganas.filter((e) => e.selected).length} /{" "}
            {cardStore.listHiraganas.length} )
          </button>
          {cardStore.toggleFilterHiraganas ? <FilterHiraganas /> : null}
          <button
            className="btn btnToggleFilterHiraganas"
            onClick={() => dispatch(toggleSubFilters("toggleFilterKatakanas"))}
          >
            {cardStore.toggleFilterKatakanas ? "- " : "+ "}
            Katakanas ({" "}
            {cardStore.listKatakanas.filter((e) => e.selected).length} /{" "}
            {cardStore.listKatakanas.length} )
          </button>
          {cardStore.toggleFilterKatakanas ? <FilterKatakanas /> : null}
          {/*============== HIRAGANAS FILTERS - END ============== */}
        </div>

        {/*================== ALL FILTERS - END ================== */}
      </div>
      {/*========================== RIGHT COLUMN - END ========================== */}
    </div>
  );
}

export default Deck;
