import "./Deck.scss";
import "./GramCombis.scss";
/* import { useSelector, useDispatch } from "react-redux"; */
import {} from "../cardSlice.js";

function GramCombis() {
  /*   const cardStore = useSelector((store) => store.card);
  const dispatch = useDispatch();
 */
  const digrammesHiragana = [
    {
      kana: "きゃ",
      kana1: "き",
      kana2: "ゃ",
      romaji: "kya",
      romaji1: "ki",
      romaji2: "ya",
    },
    {
      kana: "きゅ",
      kana1: "き",
      kana2: "ゅ",
      romaji: "kyu",
      romaji1: "ki",
      romaji2: "yu",
    },
    {
      kana: "きょ",
      kana1: "き",
      kana2: "ょ",
      romaji: "kyo",
      romaji1: "ki",
      romaji2: "yo",
    },
    {
      kana: "ぎゃ",
      kana1: "ぎ",
      kana2: "ゃ",
      romaji: "gya",
      romaji1: "gi",
      romaji2: "ya",
    },
    {
      kana: "ぎゅ",
      kana1: "ぎ",
      kana2: "ゅ",
      romaji: "gyu",
      romaji1: "gi",
      romaji2: "yu",
    },
    {
      kana: "ぎょ",
      kana1: "ぎ",
      kana2: "ょ",
      romaji: "gyo",
      romaji1: "gi",
      romaji2: "yo",
    },
    {
      kana: "しゃ",
      kana1: "し",
      kana2: "ゃ",
      romaji: "sha",
      romaji1: "shi",
      romaji2: "ya",
    },
    {
      kana: "しゅ",
      kana1: "し",
      kana2: "ゅ",
      romaji: "shu",
      romaji1: "shi",
      romaji2: "yu",
    },
    {
      kana: "しょ",
      kana1: "し",
      kana2: "ょ",
      romaji: "sho",
      romaji1: "shi",
      romaji2: "yo",
    },
    {
      kana: "じゃ",
      kana1: "じ",
      kana2: "ゃ",
      romaji: "ja",
      romaji1: "ji",
      romaji2: "ya",
    },
    {
      kana: "じゅ",
      kana1: "じ",
      kana2: "ゅ",
      romaji: "ju",
      romaji1: "ji",
      romaji2: "yu",
    },
    {
      kana: "じょ",
      kana1: "じ",
      kana2: "ょ",
      romaji: "jo",
      romaji1: "ji",
      romaji2: "yo",
    },
    {
      kana: "ちゃ",
      kana1: "ち",
      kana2: "ゃ",
      romaji: "cha",
      romaji1: "chi",
      romaji2: "ya",
    },
    {
      kana: "ちゅ",
      kana1: "ち",
      kana2: "ゅ",
      romaji: "chu",
      romaji1: "chi",
      romaji2: "yu",
    },
    {
      kana: "ちょ",
      kana1: "ち",
      kana2: "ょ",
      romaji: "cho",
      romaji1: "chi",
      romaji2: "yo",
    },
    {
      kana: "にゃ",
      kana1: "に",
      kana2: "ゃ",
      romaji: "nya",
      romaji1: "ni",
      romaji2: "ya",
    },
    {
      kana: "にゅ",
      kana1: "に",
      kana2: "ゅ",
      romaji: "nyu",
      romaji1: "ni",
      romaji2: "yu",
    },
    {
      kana: "にょ",
      kana1: "に",
      kana2: "ょ",
      romaji: "nyo",
      romaji1: "ni",
      romaji2: "yo",
    },
    {
      kana: "ひゃ",
      kana1: "ひ",
      kana2: "ゃ",
      romaji: "hya",
      romaji1: "hi",
      romaji2: "ya",
    },
    {
      kana: "ひゅ",
      kana1: "ひ",
      kana2: "ゅ",
      romaji: "hyu",
      romaji1: "hi",
      romaji2: "yu",
    },
    {
      kana: "ひょ",
      kana1: "ひ",
      kana2: "ょ",
      romaji: "hyo",
      romaji1: "hi",
      romaji2: "yo",
    },
    {
      kana: "みゃ",
      kana1: "み",
      kana2: "ゃ",
      romaji: "mya",
      romaji1: "mi",
      romaji2: "ya",
    },
    {
      kana: "みゅ",
      kana1: "み",
      kana2: "ゅ",
      romaji: "myu",
      romaji1: "mi",
      romaji2: "yu",
    },
    {
      kana: "みょ",
      kana1: "み",
      kana2: "ょ",
      romaji: "myo",
      romaji1: "mi",
      romaji2: "yo",
    },
    {
      kana: "りゃ",
      kana1: "り",
      kana2: "ゃ",
      romaji: "rya",
      romaji1: "ri",
      romaji2: "ya",
    },
    {
      kana: "りゅ",
      kana1: "り",
      kana2: "ゅ",
      romaji: "ryu",
      romaji1: "ri",
      romaji2: "yu",
    },
    {
      kana: "りょ",
      kana1: "り",
      kana2: "ょ",
      romaji: "ryo",
      romaji1: "ri",
      romaji2: "yo",
    },
  ];
  return (
    <div className="containerDigrammes">
      <div className="digrammesExplication">
        <p>
          Les combinaisons ou "yoon" sont des hiraganas ou katakanas se
          combinant, fusionnant avec une voyelle "ya" "yu" ou "yo".
        </p>
        <p>
          Respectivement 「や」,「ゆ」et「よ」en hirgana et
          「ヤ」,「ユ」et「ヨ」en katakana.
        </p>
        <p>
          La version "petite" des kanas「や」,「ゆ」ou「よ」sont rajoutés aprés
          le kana de base pour former le yoon.
        </p>
        <p>
          <u>Exemple :</u>
        </p>
        <p>
          En hiragana :「き<span style={{ color: "red" }}>ゃ</span>」(kya), 「き
          <span style={{ color: "red" }}>ゅ</span>」(kyu) et 「き
          <span style={{ color: "red" }}>ょ</span>」(kyo) sont les yoon de la
          consonne "k".
        </p>
        <p>
          En katakana :「キ<span style={{ color: "red" }}>ャ</span>」(kya), 「キ
          <span style={{ color: "red" }}>ュ</span>」(kyu) et 「キ
          <span style={{ color: "red" }}>ョ</span>」(kyo) sont les yoon de la
          consonne "k".
        </p>
      </div>
      <div className="allDigrammes">
        {digrammesHiragana.map((digramme) => (
          <div className="digrammes tooltip">
            <p>{digramme.kana}</p>
            <p>({digramme.romaji})</p>

            <span className="tooltip-text">
              {digramme.kana1} ({digramme.romaji1}) + {digramme.kana2} (
              {digramme.romaji2})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GramCombis;
