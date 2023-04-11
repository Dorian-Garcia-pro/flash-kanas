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
          Les dakuten(") et les handakuten(°) sont des petits signes que l'on
          ajoute sur le coin supérieur droit d'un hiragana ou katakana pour
          modifier sa prononciation.
        </p>
        <p>k > g , s > j , t > d , h > b/p</p>
        <p>Exemple :</p>
        <p>"ka" (か) devient "ga" (が) lorsqu'on lui ajoute le dakuten(").</p>
        <p>"hi" (ひ) devient "bi" (び) lorsqu'on lui ajoute le dakuten(").</p>
        <p>
          "hi" (ひ) devient "pi" (ぴ) lorsqu'on lui ajoute le handakuten(°).
        </p>
      </div>
      <div className="allModifs">
        {dakutenHiraganas.map((digramme) => (
          <div className="modifs">
            <p>{digramme.kana}</p>
            <p>({digramme.romaji})</p>

            {/*           <div className="digrammeCompos">
            <p>
              {digramme.kana1} ({digramme.romaji1})
            </p>
            <p> + </p>
            <p>
              {digramme.kana2} ({digramme.romaji2})
            </p>
          </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GramModfis;
