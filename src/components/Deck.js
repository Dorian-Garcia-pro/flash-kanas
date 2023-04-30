import Card from "./Card.js";
import "./Deck.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  rndCard,
  flipCard,
  swipeCard,
  resetToRecto,
  toggleSubFilters,
} from "../cardSlice.js";
import FilterHiraganas from "./FilterHiraganas.js";
import FilterKatakanas from "./FilterKatakanas.js";
import GramCombis from "./GramCombis.js";
import GramModifs from "./GramModifs.js";
import GramPauses from "./GramPauses.js";
import GramAllongs from "./GramAllongs.js";

function Deck({ front, back }) {
  const cardStore = useSelector((store) => store.card);
  const dispatch = useDispatch();

  function handleRndInvertInfinite() {
    dispatch(rndCard());
    setTimeout(() => {
      dispatch(resetToRecto());
    }, 1);
    dispatch(swipeCard());
    setTimeout(() => {
      dispatch(swipeCard());
    }, 500);
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

            <div className="leftColBtnRowAll ">
              <div
                className={
                  cardStore.toggleAllongements
                    ? "btn btnToggleFilterHiraganas btnToggleFilterSelected "
                    : "btn btnToggleFilterHiraganas"
                }
                onClick={() => dispatch(toggleSubFilters("toggleAllongements"))}
              >
                <p>Allongements</p>
              </div>
              <div
                className={
                  cardStore.toggleGramPauses
                    ? "btn btnToggleFilterHiraganas btnToggleFilterSelected "
                    : "btn btnToggleFilterHiraganas"
                }
                onClick={() => dispatch(toggleSubFilters("toggleGramPauses"))}
              >
                <p>Pauses</p>
              </div>
            </div>
          </div>

          {cardStore.toggleGramCombis ? <GramCombis /> : null}
          {cardStore.toggleGramModifs ? <GramModifs /> : null}
          {cardStore.toggleGramPauses ? <GramPauses /> : null}
          {cardStore.toggleAllongements ? <GramAllongs /> : null}

          {/*============== GRAMMAR - END ============== */}
        </div>
      </div>
      {/*========================== LEFT COLUMN - END ========================== */}
      {/*========================== MID COLUMN - START ========================== */}
      <div className="midCol">
        <div className="card-container">
          <Card />
        </div>
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
              <p>
                ( {cardStore.listKatakanas.filter((e) => e.selected).length} /{" "}
                {cardStore.listKatakanas.length} )
              </p>
            </div>
          </div>

          {cardStore.toggleFilterHiraganas ? <FilterHiraganas /> : null}

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
