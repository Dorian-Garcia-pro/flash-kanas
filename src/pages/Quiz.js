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
  {
    hiragana: "くつ",
    romaji: "kutsu",
    english: "chaussures",
  },
  {
    hiragana: "かばん",
    romaji: "kaban",
    english: "sac",
  },
  {
    hiragana: "てがみ",
    romaji: "tegami",
    english: "lettre",
  },
  {
    hiragana: "かぎ",
    romaji: "kagi",
    english: "clé",
  },
  {
    hiragana: "かさ",
    romaji: "kasa",
    english: "parapluie",
  },
  {
    hiragana: "めがね",
    romaji: "megane",
    english: "lunettes",
  },
  {
    hiragana: "くつした",
    romaji: "kutsushita",
    english: "chaussettes",
  },
  {
    hiragana: "はこ",
    romaji: "hako",
    english: "boîte",
  },
  {
    hiragana: "はし",
    romaji: "hashi",
    english: "baguettes",
  },
  {
    hiragana: "こんにちは",
    romaji: "konnichiha",
    english: "bonjour",
  },
  {
    hiragana: "ありがとう",
    romaji: "arigatou",
    english: "merci",
  },
  {
    hiragana: "はい",
    romaji: "hai",
    english: "oui",
  },
  {
    hiragana: "いいえ",
    romaji: "iie",
    english: "non",
  },
  {
    hiragana: "すみません",
    romaji: "sumimasen",
    english: "excusez-moi / pardon",
  },
  {
    hiragana: "おはよう",
    romaji: "ohayou",
    english: "bonjour (le matin)",
  },
  {
    hiragana: "こんばんは",
    romaji: "konbanha",
    english: "bonsoir",
  },
  {
    hiragana: "おいしい",
    romaji: "oishii",
    english: "délicieux",
  },
  {
    hiragana: "がくせい",
    romaji: "gakusei",
    english: "étudiant",
  },
  {
    hiragana: "いしゃ",
    romaji: "isha",
    english: "médecin",
  },
  {
    hiragana: "はいしゃ",
    romaji: "haisha",
    english: "dentiste",
  },
  {
    hiragana: "まど",
    romaji: "mado",
    english: "fenêtre",
  },
  {
    hiragana: "ひこうき",
    romaji: "hikouki",
    english: "avion",
  },
  {
    hiragana: "くうこう",
    romaji: "kuukou",
    english: "aéroport",
  },
  {
    hiragana: "あつい",
    romaji: "atsui",
    english: "chaud",
  },
  {
    hiragana: "さむい",
    romaji: "samui",
    english: "froid",
  },
  {
    hiragana: "とおい",
    romaji: "tooi",
    english: "loin",
  },
  {
    hiragana: "ちかい",
    romaji: "chikai",
    english: "proche",
  },
  {
    hiragana: "おもい",
    romaji: "omoi",
    english: "lourd",
  },
  {
    hiragana: "かるい",
    romaji: "karui",
    english: "léger",
  },
  {
    hiragana: "ちいさい",
    romaji: "chiisai",
    english: "petit",
  },
  {
    hiragana: "おおきい",
    romaji: "ookii",
    english: "grand",
  },
  {
    hiragana: "つよい",
    romaji: "tsuyoi",
    english: "fort",
  },
  {
    hiragana: "よわい",
    romaji: "yowai",
    english: "faible",
  },
  {
    hiragana: "おもしろい",
    romaji: "omoshiroi",
    english: "drôle",
  },
  {
    hiragana: "はは",
    romaji: "haha",
    english: "maman",
  },
  {
    hiragana: "ちち",
    romaji: "chichi",
    english: "papa",
  },
  {
    hiragana: "おじ",
    romaji: "oji",
    english: "oncle",
  },
  {
    hiragana: "おば",
    romaji: "oba",
    english: "tante",
  },
  {
    hiragana: "おとうと",
    romaji: "otouto",
    english: "petit-frère",
  },
  {
    hiragana: "あに",
    romaji: "ani",
    english: "grand-frère",
  },
  {
    hiragana: "いもうと",
    romaji: "imouto",
    english: "petite sœur",
  },
  {
    hiragana: "あね",
    romaji: "ane",
    english: "grande sœur",
  },
  {
    hiragana: "いとこ",
    romaji: "itoko",
    english: "cousin",
  },
  {
    hiragana: "おばあちゃん",
    romaji: "obaachan",
    english: "grand-mère",
  },
  {
    hiragana: "おじいちゃん",
    romaji: "ojiichan",
    english: "grand-père",
  },
  {
    hiragana: "わたし",
    romaji: "watashi",
    english: "je",
  },
  {
    hiragana: "あなた",
    romaji: "anata",
    english: "tu",
  },
  {
    hiragana: "かれ",
    romaji: "kare",
    english: "il",
  },
  {
    hiragana: "かのじょ",
    romaji: "kanojo",
    english: "elle",
  },
  {
    hiragana: "すき",
    romaji: "suki",
    english: "aimer",
  },
  {
    hiragana: "きらい",
    romaji: "kirai",
    english: "détester",
  },
  {
    hiragana: "て",
    romaji: "te",
    english: "main",
  },
  {
    hiragana: "あし",
    romaji: "ashi",
    english: "pied",
  },
  {
    hiragana: "ふるい",
    romaji: "furui",
    english: "vieux",
  },
  {
    hiragana: "あたらしい",
    romaji: "atarashii",
    english: "nouveau",
  },
  {
    hiragana: "まえ",
    romaji: "mae",
    english: "avant",
  },
  {
    hiragana: "あと",
    romaji: "ato",
    english: "après",
  },
  {
    hiragana: "あるく",
    romaji: "aruku",
    english: "marcher",
  },
  {
    hiragana: "いう",
    romaji: "iu",
    english: "dire",
  },
  {
    hiragana: "はなす",
    romaji: "hanasu",
    english: "parler",
  },
  {
    hiragana: "いく",
    romaji: "iku",
    english: "aller",
  },
  {
    hiragana: "いす",
    romaji: "isu",
    english: "chaise",
  },
  {
    hiragana: "どこ",
    romaji: "doko",
    english: "où",
  },
  {
    hiragana: "いつ",
    romaji: "itsu",
    english: "quand",
  },
  {
    hiragana: "どうやって",
    romaji: "douyatte",
    english: "comment",
  },
  {
    hiragana: "なぜ",
    romaji: "naze",
    english: "pourquoi",
  },
  {
    hiragana: "だれ",
    romaji: "dare",
    english: "qui",
  },
  {
    hiragana: "いま",
    romaji: "ima",
    english: "maintenant",
  },
  {
    hiragana: "いりぐち",
    romaji: "iriguchi",
    english: "entrée",
  },
  {
    hiragana: "でぐち",
    romaji: "deguchi",
    english: "sortie",
  },
  {
    hiragana: "えいご",
    romaji: "eigo",
    english: "la langue anglaise",
  },
  {
    hiragana: "おさけ",
    romaji: "osake",
    english: "alcool",
  },
  {
    hiragana: "おなか",
    romaji: "onaka",
    english: "ventre",
  },
  {
    hiragana: "おちゃ",
    romaji: "ocha",
    english: "thé",
  },
  {
    hiragana: "はやい",
    romaji: "hayai",
    english: "rapide",
  },
  {
    hiragana: "おそい",
    romaji: "osoi",
    english: "lent",
  },
  {
    hiragana: "はじめる",
    romaji: "hajimeru",
    english: "commencer",
  },
  {
    hiragana: "おわる",
    romaji: "owaru",
    english: "finir",
  },
  {
    hiragana: "えいが",
    romaji: "eiga",
    english: "film",
  },
  {
    hiragana: "かいだん",
    romaji: "kaidan",
    english: "escalier",
  },
  {
    hiragana: "かく",
    romaji: "kaku",
    english: "écrire",
  },
  {
    hiragana: "かぜ",
    romaji: "kaze",
    english: "vent",
  },
  {
    hiragana: "かぞく",
    romaji: "kazoku",
    english: "famille",
  },
  {
    hiragana: "げつようび",
    romaji: "getsuyoubi",
    english: "lundi",
  },
  {
    hiragana: "かようび",
    romaji: "kayoubi",
    english: "mardi",
  },
  {
    hiragana: "すいようび",
    romaji: "suiyoubi",
    english: "mercredi",
  },
  {
    hiragana: "もくようび",
    romaji: "mokuyoubi",
    english: "jeudi",
  },
  {
    hiragana: "きんようび",
    romaji: "kinyoubi",
    english: "vendredi",
  },
  {
    hiragana: "どようび",
    romaji: "doyoubi",
    english: "samedi",
  },
  {
    hiragana: "にちようび",
    romaji: "nichiyoubi",
    english: "dimanche",
  },
  {
    hiragana: "しゅう",
    romaji: "shuu",
    english: "semaine",
  },
  {
    hiragana: "つき",
    romaji: "tsuki",
    english: "mois / lune",
  },
  {
    hiragana: "からい",
    romaji: "karai",
    english: "épicé",
  },
  /*   {
    hiragana: "コップ",
    romaji: "koppu",
    english: "verre",
  }, */
];

function Quiz() {
  /*   const cardStore = useSelector((store) => store.card);
   */ /*  const dispatch = useDispatch(); */
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [previousWord, setPreviousWord] = useState();
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const [mauvaiseReponse, setMauvaiseReponse] = useState("");
  const [streak, setStreak] = useState(0);
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
      setStreak((prev) => prev + 1);
    } else if (event.keyCode === 13 && inputValue !== currentWord) {
      setIsCorrect(false);
      setMauvaiseReponse(inputValue);
      setInputValue("");
      setStreak(0);
    }
  };

  return (
    <div className="quiz-container">
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
              placeholder="Entrée pour valider"
              autoFocus
            />
          </label>
        </form>

        {!isCorrect && <div>M'enfin frérot c'est pas {mauvaiseReponse}</div>}

        {previousWord ? (
          <div className="previousWord">
            <p>
              {previousWord ? previousWord.hiragana : ""} (
              {previousWord ? previousWord.romaji : ""})
            </p>
            <p> {previousWord ? previousWord.english : ""}</p>
          </div>
        ) : (
          ""
        )}
        <p id="streakCounter">Streak : {streak}</p>
      </div>
      {/*========================== MID COLUMN - END ========================== */}
    </div>
  );
}

export default Quiz;
