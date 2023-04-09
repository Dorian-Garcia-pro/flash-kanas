import "./Deck.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedToggleKatakanasCombis,
  selectedToggleKatakanasDakuten,
  selectedToggleKatakanasFilter,
  selectedToggleAllKatakanas,
} from "../cardSlice.js";

function FilterKatakanas() {
  const cardStore = useSelector((store) => store.card);
  const dispatch = useDispatch();
  return (
    <div className="allFiltersHiraganas">
      <div className="allFiltersBtnToggleAll">
        <button
          className="btn"
          onClick={() => dispatch(selectedToggleAllKatakanas(true))}
        >
          Select All
        </button>
        <button
          className="btn"
          onClick={() => dispatch(selectedToggleAllKatakanas(false))}
        >
          Unselect All
        </button>
      </div>
      <div className="selectKanas">
        {cardStore.listKatakanas
          .filter((kana) => kana.combi !== true)
          .filter((kana) => kana.dakuten !== true)
          .map((kana) =>
            kana.selected ? (
              <p
                key={kana.nb}
                className="kanaSelected"
                onClick={() => dispatch(selectedToggleKatakanasFilter(kana))}
              >
                {kana.kana}
              </p>
            ) : (
              <p
                key={kana.nb}
                className=""
                onClick={() => dispatch(selectedToggleKatakanasFilter(kana))}
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
              checked={cardStore.toggleFilterKatakanasCombis}
              onChange={() => dispatch(selectedToggleKatakanasCombis())}
            />
            Combinaisons
          </label>
          <label>
            <input
              type="checkbox"
              name="myCheckbox"
              checked={cardStore.toggleFilterKatakanasDakuten}
              onChange={() => dispatch(selectedToggleKatakanasDakuten())}
            />
            Modifications("°)
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterKatakanas;
