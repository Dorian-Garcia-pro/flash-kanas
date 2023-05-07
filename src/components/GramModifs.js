import "./Deck.scss";
import "./GramModifs.scss";
/* import { useSelector, useDispatch } from "react-redux";*/
import {} from "../cardSlice.js";

function GramModfis() {
  /*   const cardStore = useSelector((store) => store.card);
  const dispatch = useDispatch(); */

  const dakutenHiraganas = [
    { kana: "が", romaji: "ga" },
    { kana: "ぎ", romaji: "gi" },
    { kana: "ぐ", romaji: "gu" },
    { kana: "げ", romaji: "ge" },
    { kana: "ご", romaji: "go" },
    { kana: "ざ", romaji: "za" },
    { kana: "じ", romaji: "ji" },
    { kana: "ず", romaji: "zu" },
    { kana: "ぜ", romaji: "ze" },
    { kana: "ぞ", romaji: "zo" },
    { kana: "だ", romaji: "da" },
    { kana: "ぢ", romaji: "ji" },
    { kana: "づ", romaji: "zu" },
    { kana: "で", romaji: "de" },
    { kana: "ど", romaji: "do" },
    { kana: "ば", romaji: "ba" },
    { kana: "び", romaji: "bi" },
    { kana: "ぶ", romaji: "bu" },
    { kana: "べ", romaji: "be" },
    { kana: "ぼ", romaji: "bo" },
    { kana: "ぱ", romaji: "pa" },
    { kana: "ぴ", romaji: "pi" },
    { kana: "ぷ", romaji: "pu" },
    { kana: "ぺ", romaji: "pe" },
    { kana: "ぽ", romaji: "po" },
  ];

  return (
    <div className="modifsContainer">
      <div className="modifsExplication">
        <p>
          Les dakuten(") et les handakuten(°) sont des petits symboles que l'on
          ajoute en haut à droite d'un hiragana ou katakana pour modifier sa
          prononciation.
        </p>
        <section>
          <p>Les syllabes en K deviennent des G</p>
          <p>「か」(ka) devient「が」(ga) lorsqu'on lui ajoute「"」.</p>
        </section>
        <section>
          <p>Les syllabes en S deviennent des J</p>
          <p>「し」(shi) devient「じ」(ji) lorsqu'on lui ajoute「"」.</p>
        </section>
        <section>
          <p>Les syllabes en T deviennent des D</p>
          <p>「と」(to) devient「ど」(do) lorsqu'on lui ajoute「"」.</p>
        </section>
        <section>
          <p>Les syllabes en H deviennent des B ou des P</p>
          <p>「ひ」(hi) devient「び」(bi) lorsqu'on lui ajoute「"」.</p>
          <p>「ひ」(hi) devient「ぴ」(pi) lorsqu'on lui ajoute「°」.</p>
        </section>
      </div>
      <div className="allModifs">
        {dakutenHiraganas.map((digramme) => (
          <div className="modifs">
            <p>{digramme.kana}</p>
            <p>({digramme.romaji})</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GramModfis;
