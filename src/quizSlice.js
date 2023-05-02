import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  quizHiraganas: [
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
  ],
  quizDaz: [
    {
      hiragana: "見ます",
      romaji: "mimasu",
      english: "voir",
    },
    {
      hiragana: "探します",
      romaji: "sagashimasu",
      english: "chercher",
    },
    {
      hiragana: "遅れます",
      romaji: "okuremasu",
      english: "être en retard",
    },
    {
      hiragana: "間に合います",
      romaji: "maniaimasu",
      english: "être à l'heure",
    },
    {
      hiragana: "やります",
      romaji: "yarimasu",
      english: "faire",
    },
    {
      hiragana: "広います",
      romaji: "hiroimasu",
      english: "s'étendre",
    },
    {
      hiragana: "連絡します",
      romaji: "renrakushimasu",
      english: "contacter",
    },
    {
      hiragana: "気分が悪い",
      romaji: "kibungawarui",
      english: "ne pas se sentir bien",
    },
    {
      hiragana: "気分がいい",
      romaji: "kibungaii",
      english: "se sentir bien",
    },
    {
      hiragana: "運動会",
      romaji: "undoukai",
      english: "fête sportive",
    },
    {
      hiragana: "盆踊り",
      romaji: "bonhodori",
      english: "danse folklorique japonaise",
    },
    {
      hiragana: "場所",
      romaji: "basho",
      english: "endroit",
    },
    {
      hiragana: "財布",
      romaji: "saifu",
      english: "portefeuille",
    },
    {
      hiragana: "ゴミ",
      romaji: "gomi",
      english: "ordures",
    },
    {
      hiragana: "国会議事堂",
      romaji: "kokkaigijidou",
      english: "bâtiment du Parlement",
    },
    {
      hiragana: "平日",
      romaji: "heijitsu",
      english: "jour de semaine",
    },
    {
      hiragana: "今度",
      romaji: "kondo",
      english: "cette fois-ci",
    },
    {
      hiragana: "随分",
      romaji: "zuibun",
      english: "beaucoup",
    },
    {
      hiragana: "直接",
      romaji: "chokusetsu",
      english: "directement",
    },
    {
      hiragana: "いつでも",
      romaji: "itsudemo",
      english: "n'importe quand",
    },
    {
      hiragana: "どこでも",
      romaji: "dokodemo",
      english: "n'importe où",
    },
    {
      hiragana: "だれでも",
      romaji: "daredemo",
      english: "n'importe qui",
    },
    {
      hiragana: "なんでも",
      romaji: "nandemo",
      english: "n'importe quoi",
    },
    {
      hiragana: "かたずきます",
      romaji: "katazukimasu",
      english: "ramasser",
    },
    {
      hiragana: "だします",
      romaji: "dashimasu",
      english: "envoyer",
    },
    {
      hiragana: "もえるゴミ",
      romaji: "moerugomi",
      english: "déchets inflammables",
    },
    {
      hiragana: "おきば",
      romaji: "okiba",
      english: "décharge",
    },
    {
      hiragana: "よこ",
      romaji: "yoko",
      english: "côté",
    },
    {
      hiragana: "びん",
      romaji: "bin",
      english: "bouteille",
    },
    {
      hiragana: "かん",
      romaji: "kan",
      english: "boîte",
    },
    {
      hiragana: "うちゅう",
      romaji: "uchuu",
      english: "espace",
    },
    {
      hiragana: "うちゅうせん",
      romaji: "uchuusen",
      english: "vaisseau spatial",
    },
    {
      hiragana: "こわい",
      romaji: "kowai",
      english: "effrayant",
    },
    {
      hiragana: "ちがいます",
      romaji: "chigaimasu",
      english: "être différent",
    },
    {
      hiragana: "うちゅうひこうし",
      romaji: "uchuhikoushi",
      english: "astronaute",
    },
    {
      hiragana: "買います",
      romaji: "kaimasu",
      english: "acheter, élever (un animal)",
    },
    {
      hiragana: "走ります",
      romaji: "hashirimasu",
      english: "courir",
    },
    {
      hiragana: "見えます",
      romaji: "miemasu",
      english: "être visible",
    },
    {
      hiragana: "聞こえます",
      romaji: "kikoemasu",
      english: "être audible",
    },
    {
      hiragana: "出来ます",
      romaji: "dekimasu",
      english: "pouvoir faire",
    },
    {
      hiragana: "開きます",
      romaji: "hirakimasu",
      english: "s'ouvrir",
    },
    {
      hiragana: "心配",
      romaji: "shinpai",
      english: "inquiétude",
    },
    {
      hiragana: "鳥",
      romaji: "tori",
      english: "oiseau",
    },
    {
      hiragana: "声",
      romaji: "koe",
      english: "voix",
    },
    {
      hiragana: "波",
      romaji: "nami",
      english: "vague",
    },
    {
      hiragana: "花火",
      romaji: "hanabi",
      english: "feu d'artifice",
    },
    {
      hiragana: "道具",
      romaji: "dougu",
      english: "outil",
    },
    {
      hiragana: "方",
      romaji: "kata",
      english: "personne (poli)",
    },
    {
      hiragana: "他の",
      romaji: "hokano",
      english: "autre",
    },
    {
      hiragana: "はっきり",
      romaji: "hakkiri",
      english: "clairement",
    },
    {
      hiragana: "家具",
      romaji: "kagu",
      english: "meuble",
    },
    {
      hiragana: "本棚",
      romaji: "hondana",
      english: "bibliothèque",
    },
    {
      hiragana: "いつか",
      romaji: "itsuka",
      english: "un jour",
    },
    {
      hiragana: "立てます",
      romaji: "tatemasu",
      english: "se lever",
    },
    {
      hiragana: "素晴らしい",
      romaji: "subarashii",
      english: "merveilleux",
    },
    {
      hiragana: "子供達",
      romaji: "kodomotachi",
      english: "enfants",
    },
    {
      hiragana: "大好き",
      romaji: "daisuki",
      english: "aimer beaucoup",
    },

    {
      hiragana: "形",
      romaji: "katachi",
      english: "forme",
    },
    {
      hiragana: "例えば",
      romaji: "tatoeba",
      english: "par exemple",
    },
    {
      hiragana: "使います",
      romaji: "tsukaimasu",
      english: "utiliser",
    },

    {
      hiragana: "空",
      romaji: "sora",
      english: "ciel",
    },
    {
      hiragana: "飛びます",
      romaji: "tobimasu",
      english: "voler",
    },
    {
      hiragana: "昔",
      romaji: "mukashi",
      english: "autrefois",
    },
    {
      hiragana: "自分",
      romaji: "jibun",
      english: "soi-même",
    },
    {
      hiragana: "将来",
      romaji: "shourai",
      english: "avenir",
    },
  ],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
});

/* export const {} = quizSlice.actions; */

export default quizSlice.reducer;
