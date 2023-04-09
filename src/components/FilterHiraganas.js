import "./Deck.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedToggleKanaFilter,
  selectedToggleAll,
  selectedToggleHiraganasCombis,
  selectedToggleHiraganasDakuten,
} from "../cardSlice.js";

function FilterHiraganas() {
  const cardStore = useSelector((store) => store.card);
  const dispatch = useDispatch();
  return (
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
              onChange={() => dispatch(selectedToggleHiraganasDakuten())}
            />
            Modifications("°)
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterHiraganas;
