// Standard imports
import { useSelector, useDispatch } from "react-redux";
import {
  rndCard,
  flipCard,
  swipeCard,
  resetToRecto,
  toggleSubFilters,
} from "../cardSlice.js";

// Component imports
import Card from "./Card.js";
import FilterHiraganas from "./FilterHiraganas.js";
import FilterKatakanas from "./FilterKatakanas.js";
import GramCombis from "./GramCombis.js";
import GramModifs from "./GramModifs.js";
import GramPauses from "./GramPauses.js";
import GramAllongs from "./GramAllongs.js";

// Styles
import "./Deck.scss";

function Deck({ front, back }) {
  // Using selectors and dispatch from Redux
  const cardStore = useSelector((store) => store.card);
  const dispatch = useDispatch();

  // Function to handle random card selection and animation
  function handleRndInvertInfinite() {
    dispatch(rndCard()); // Dispatching random card selection
    setTimeout(() => {
      dispatch(resetToRecto()); // Resetting card after a delay
    }, 1);
    dispatch(swipeCard()); // Dispatching card swipe
    setTimeout(() => {
      dispatch(swipeCard()); // Dispatching another card swipe after a delay
    }, 500);
  }

  // if 1 or less card selected, flip it, else randomize another card
  const handleNextClick = () => {
    const selectedCards = cardStore.listHiraganas
      .concat(cardStore.listKatakanas)
      .filter((e) => e.selected === true).length;
    if (selectedCards <= 1) {
      dispatch(flipCard());
    } else {
      cardStore.rectoVerso ? dispatch(flipCard()) : handleRndInvertInfinite();
    }
  };

  return (
    <div className="deck-container">
      {/*========================== LEFT COLUMN - START ========================== */}
      <div className="leftCol">
        <div className="allFilters">
          {/*============== GRAMMAR - START ============== */}
          <div className="buttonsFiltersContainer">
            <div className="leftColBtnRowAll">
              <div
                className={
                  cardStore.toggleGramCombis
                    ? "btn btnToggleFilterHiraganas btnToggleFilterSelected "
                    : "btn btnToggleFilterHiraganas"
                }
                onClick={() => dispatch(toggleSubFilters("toggleGramCombis"))}
              >
                <p>Combinaisons</p>
              </div>
              <div
                className={
                  cardStore.toggleGramModifs
                    ? "btn btnToggleFilterHiraganas btnToggleFilterSelected "
                    : "btn btnToggleFilterHiraganas"
                }
                onClick={() => dispatch(toggleSubFilters("toggleGramModifs"))}
              >
                <p>Modifications</p>
              </div>
            </div>
          </div>
          {/* Conditional rendering of grammar components */}
          {cardStore.toggleGramCombis && <GramCombis />}
          {cardStore.toggleGramModifs && <GramModifs />}
          {cardStore.toggleGramPauses && <GramPauses />}
          {cardStore.toggleAllongements && <GramAllongs />}

          {/*============== GRAMMAR - END ============== */}
        </div>
      </div>
      {/*========================== LEFT COLUMN - END ========================== */}
      {/*========================== MID COLUMN - START ========================== */}
      <div className="midCol">
        <div className="card-container">
          <Card />
        </div>
        <button className="btn" onClick={handleNextClick}>
          Next
        </button>
      </div>
      {/*========================== MID COLUMN - END ========================== */}
      {/*========================== RIGHT COLUMN - START ========================== */}
      <div className="filtersContainer">
        {/*================== ALL FILTERS - START ================== */}

        <div className="allFilters">
          {/*============== HIRAGANAS FILTERS - START ============== */}
          <div className="buttonsFiltersContainer rightColKanas">
            <div
              className={
                cardStore.toggleFilterHiraganas
                  ? "btn btnToggleFilterHiraganas btnToggleFilterSelected "
                  : "btn btnToggleFilterHiraganas"
              }
              onClick={() =>
                dispatch(toggleSubFilters("toggleFilterHiraganas"))
              }
            >
              <p>ひらがな</p>
              {/* Displaying count of selected Hiraganas */}
              <p>
                ( {cardStore.listHiraganas.filter((e) => e.selected).length} /{" "}
                {cardStore.listHiraganas.length} )
              </p>
            </div>
            <div
              className={
                cardStore.toggleFilterKatakanas
                  ? "btn btnToggleFilterHiraganas btnToggleFilterSelected "
                  : "btn btnToggleFilterHiraganas"
              }
              onClick={() =>
                dispatch(toggleSubFilters("toggleFilterKatakanas"))
              }
            >
              <p>カタカナ</p>
              {/* Displaying count of selected Katakanas */}
              <p>
                ( {cardStore.listKatakanas.filter((e) => e.selected).length} /{" "}
                {cardStore.listKatakanas.length} )
              </p>
            </div>
          </div>
          {/* Conditional rendering of Kana filters */}
          {cardStore.toggleFilterHiraganas && <FilterHiraganas />}
          {cardStore.toggleFilterKatakanas && <FilterKatakanas />}
          {/*============== HIRAGANAS FILTERS - END ============== */}
        </div>

        {/*================== ALL FILTERS - END ================== */}
      </div>
      {/*========================== RIGHT COLUMN - END ========================== */}
    </div>
  );
}

export default Deck;
