import "./Quiz.scss";
import { useState, useRef } from "react";
import {} from "../cardSlice.js";

const words = [
  {
    hiragana: "いえ",
    romaji: "ie",
    english: "maison",
  },
  {
    hiragana: "うさぎ",
    romaji: "usagi",
    english: "lapin",
  },
  {
    hiragana: "えいご",
    romaji: "eigo",
    english: "la langue anglaise",
  },
  {
    hiragana: "おおきい",
    romaji: "ookii",
    english: "gros/grand",
  },
  {
    hiragana: "かえる",
    romaji: "kaeru",
    english: "grenouille",
  },
  {
    hiragana: "きいろい",
    romaji: "kiiroi",
    english: "yellow",
  },
  {
    hiragana: "くるま",
    romaji: "kuruma",
    english: "voiture",
  },
  {
    hiragana: "こども",
    romaji: "kodomo",
    english: "enfant",
  },
  {
    hiragana: "さかな",
    romaji: "sakana",
    english: "poisson",
  },

  {
    hiragana: "せんせい",
    romaji: "sensei",
    english: "professeur",
  },
  {
    hiragana: "たべる",
    romaji: "taberu",
    english: "manger",
  },
  {
    hiragana: "ちいさい",
    romaji: "chiisai",
    english: "petit",
  },
  {
    hiragana: "つくえ",
    romaji: "tsukue",
    english: "bureau",
  },
  {
    hiragana: "てんき",
    romaji: "tenki",
    english: "météo",
  },
  {
    hiragana: "とり",
    romaji: "tori",
    english: "oiseau",
  },
  {
    hiragana: "なまえ",
    romaji: "namae",
    english: "nom",
  },
  {
    hiragana: "にほんご",
    romaji: "nihongo",
    english: "la langue japonaise",
  },
  {
    hiragana: "はな",
    romaji: "hana",
    english: "fleur",
  },
  {
    hiragana: "ひるごはん",
    romaji: "hirugohan",
    english: "déjeuner (repas de midi)",
  },
  {
    hiragana: "ふとい",
    romaji: "futoi",
    english: "gros/epaise/gras",
  },
  {
    hiragana: "へや",
    romaji: "heya",
    english: "piéce d'une maison",
  },
  {
    hiragana: "ねこ",
    romaji: "neko",
    english: "chat",
  },
  {
    hiragana: "いぬ",
    romaji: "inu",
    english: "chien",
  },
  {
    hiragana: "たぬき",
    romaji: "tanuki",
    english: "tanuki",
  },
  {
    hiragana: "きつね",
    romaji: "kitsune",
    english: "renard",
  },
  {
    hiragana: "ぞう",
    romaji: "zou",
    english: "éléphant",
  },
  {
    hiragana: "さる",
    romaji: "saru",
    english: "singe",
  },
  {
    hiragana: "つくえ",
    romaji: "tsukue",
    english: "la table",
  },
  {
    hiragana: "いす",
    romaji: "isu",
    english: "la chaise",
  },
  {
    hiragana: "ほんだな",
    romaji: "hondana",
    english: "l'étagère à livres",
  },
  {
    hiragana: "がいたん",
    romaji: "gaitan",
    english: "l'armoire",
  },
  {
    hiragana: "かがみ",
    romaji: "kagami",
    english: "le miroir",
  },
  {
    hiragana: "でんわ",
    romaji: "denwa",
    english: "le téléphone",
  },
  /*   {
    hiragana: "パソコン",
    romaji: "pasokon",
    english: "l'ordinateur",
  },
  {
    hiragana: "テレビ",
    romaji: "terebi",
    english: "la télévision",
  }, */
  {
    hiragana: "あか",
    romaji: "aka",
    english: "rouge",
  },
  {
    hiragana: "あお",
    romaji: "ao",
    english: "bleu",
  },
  {
    hiragana: "きいろ",
    romaji: "kiiro",
    english: "jaune",
  },
  {
    hiragana: "みどり",
    romaji: "midori",
    english: "vert",
  },
  {
    hiragana: "くろ",
    romaji: "kuro",
    english: "noir",
  },
  {
    hiragana: "しろ",
    romaji: "shiro",
    english: "blanc",
  },
  {
    hiragana: "むらさき",
    romaji: "murasaki",
    english: "violet",
  },
  {
    hiragana: "ちゃいろ",
    romaji: "chairo",
    english: "marron",
  },
  {
    hiragana: "すし",
    romaji: "sushi",
    english: "sushi",
  },
  {
    hiragana: "てんぷら",
    romaji: "tenpura",
    english: "beignets de crevettes et légumes frits",
  },
  {
    hiragana: "うどん",
    romaji: "udon",
    english: "nouilles épaisses",
  },
  {
    hiragana: "そば",
    romaji: "soba",
    english: "nouilles de sarrasin",
  },
  {
    hiragana: "とんかつ",
    romaji: "tonkatsu",
    english: "escalope de porc frite",
  },
  {
    hiragana: "すきやき",
    romaji: "sukiyaki",
    english: "ragoût de boeuf",
  },
  {
    hiragana: "おでん",
    romaji: "oden",
    english: "pot-au-feu japonais",
  },
];

function Quiz() {
  /*   const cardStore = useSelector((store) => store.card);
   */ /*  const dispatch = useDispatch(); */
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [previousWord, setPreviousWord] = useState();
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const formRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toLowerCase());
    setIsCorrect(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && inputValue === currentWord.romaji) {
      handleSubmit(event);
      setIsCorrect(true);
      setPreviousWord(currentWord);
      const nextWordIndex = Math.floor(Math.random() * words.length);
      setCurrentWord(words[nextWordIndex]);
      setInputValue("");
    } else if (event.keyCode === 13 && inputValue !== currentWord) {
      setIsCorrect(false);
      setInputValue("");
    }
  };

  return (
    <div className="quiz-container">
      {/*========================== LEFT COLUMN - START ========================== */}
      <div className="leftCol"></div>
      {/*========================== LEFT COLUMN - END ========================== */}
      {/*========================== MID COLUMN - START ========================== */}
      <div className="midCol-quiz">
        <p> {currentWord.hiragana}</p>

        <form onSubmit={handleSubmit} ref={formRef}>
          <label>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Press Enter to submit"
              autoFocus
            />
          </label>
        </form>

        {!isCorrect && <div>Déso frérot</div>}
        {previousWord ? (
          <div className="previousWord">
            <p> Mot précedent :</p>
            <p>
              {previousWord ? previousWord.hiragana : ""} (
              {previousWord ? previousWord.romaji : ""})
            </p>
            <p> {previousWord ? previousWord.english : ""}</p>
          </div>
        ) : (
          ""
        )}
      </div>

      {/*========================== MID COLUMN - END ========================== */}
      {/*========================== RIGHT COLUMN - START ========================== */}
      <div className="filtersContainer">
        {/*         <div className="allFilters">
          <div className="buttonsFiltersContainer">
            <div
              className={
                cardStore.toggleFilterHiraganas
                  ? "btn btnToggleFilterHiraganas btnToggleFilterSelected "
                  : "btn btnToggleFilterHiraganas"
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
        </div> */}
      </div>
      {/*========================== RIGHT COLUMN - END ========================== */}
    </div>
  );
}

export default Quiz;
