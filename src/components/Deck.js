import Card from "./Card.js";
import "./Deck.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  rndCard,
  flipCard,
  resetToRecto,
  selectedToggleKanaFilter,
  selectedToggleAll,
  toggleSubFilters,
  selectedToggleHiraganasCombis,
  selectedToggleHiraganasDakuten,
} from "../cardSlice.js";
/* import a from "../assets/hiraganas/a.png";
 */
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
        <p>{cardStore.listHiraganas[0].img}</p>
      </div>
      {/*========================== LEFT COLUMN - END ========================== */}
      {/*========================== MID COLUMN - START ========================== */}
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
            Hiraganas
          </button>
          {cardStore.toggleFilterHiraganas ? (
            <div className={"allFiltersHiraganas"}>
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
                  .filter((kana) => kana.combi !== true)
                  .filter((kana) => kana.dakuten !== true)
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
              <div className="allFiltersHiraganas">
                <div className="allFiltersBtnToggleAll hiraganasSubFilters">
                  <label>
                    <input
                      type="checkbox"
                      name="myCheckbox"
                      checked={cardStore.toggleFilterHiraganasCombis}
                      onChange={() => dispatch(selectedToggleHiraganasCombis())}
                    />
                    Combinaisons
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="myCheckbox"
                      checked={cardStore.toggleFilterHiraganasDakuten}
                      onChange={() =>
                        dispatch(selectedToggleHiraganasDakuten())
                      }
                    />
                    Modifications("°)
                  </label>
                </div>
              </div>
            </div>
          ) : null}
          <button
            className="btn btnToggleFilterHiraganas"
            /*    onClick={() =>
                dispatch(toggleSubFilters("toggleFilterHiraganas"))
              } */
          >
            {/*      {cardStore.toggleFilterHiraganas ? "- " : "+ "} */}+
            Katakanas (Soon)
          </button>
          {/*============== HIRAGANAS FILTERS - END ============== */}
        </div>

        {/*================== ALL FILTERS - END ================== */}
      </div>
      {/*========================== RIGHT COLUMN - END ========================== */}
    </div>
  );
}

export default Deck;
