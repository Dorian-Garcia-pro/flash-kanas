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
      english: "faire (familier)",
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
  quizMinnaVocab: [
    {
      hiragana: "みます",
      romaji: "mimasu",
      english: "check, vérifier",
    },
    {
      hiragana: "さがします",
      romaji: "sagashimasu",
      english: "chercher",
    },
    {
      hiragana: "おくれます [じかんに～]",
      romaji: "okuremasu",
      english: "être en retard [じかんに～]",
    },
    {
      hiragana: "まにあいます [じかんに～]",
      romaji: "maniaimasu",
      english: "arriver à temps [じかんに～]",
    },
    {
      hiragana: "やります",
      romaji: "yarimasu",
      english: "faire",
    },
    {
      hiragana: "ひろいます",
      romaji: "hiroimasu",
      english: "ramasser",
    },
    {
      hiragana: "れんらくします",
      romaji: "renrakushimasu",
      english: "contacter",
    },
    {
      hiragana: "きぶんがいい",
      romaji: "kibungaii",
      english: "se sentir bien",
    },
    {
      hiragana: "きぶんがわるい",
      romaji: "kibungawarui",
      english: "se sentir mal",
    },
    {
      hiragana: "うんどうかい",
      romaji: "undoukai",
      english: "jour de sport",
    },
    {
      hiragana: "ぼんおどり",
      romaji: "bonodori",
      english: "danse traditionnelle japonaise en cercle",
    },
    {
      hiragana: "フリーマーケット",
      romaji: "furiimaaketto",
      english: "marché aux puces",
    },
    {
      hiragana: "ばしょ",
      romaji: "basho",
      english: "endroit",
    },
    {
      hiragana: "ボランティア",
      romaji: "borantia",
      english: "bénévolat",
    },
    {
      hiragana: "さいふ",
      romaji: "saifu",
      english: "portefeuille",
    },
    {
      hiragana: "ごみ",
      romaji: "gomi",
      english: "déchets",
    },
    {
      hiragana: "こっかいぎじどう",
      romaji: "kokkaigijidou",
      english: "bâtiment du gouvernement",
    },
    {
      hiragana: "へんじつ",
      romaji: "henjitsu",
      english: "weekdays (Lun-Ven)",
    },
    {
      hiragana: "～べん",
      romaji: "~ben",
      english: "dialecte",
    },
    {
      hiragana: "こんど",
      romaji: "kondo",
      english: "prochaine fois",
    },
    {
      hiragana: "ずいぶん",
      romaji: "zuibun",
      english: "beaucoup",
    },
    {
      hiragana: "ちょくせつ",
      romaji: "chokusetsu",
      english: "direct",
    },
    {
      hiragana: "いつでも",
      romaji: "itsudemo",
      english: "à tout moment",
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
      hiragana: "かたづきます",
      romaji: "katazukimasu",
      english: "ramasser, nettoyer",
    },
    {
      hiragana: "だします",
      romaji: "dashimasu",
      english: "sortir qlq chose, sortir (poubelles)",
    },
    {
      hiragana: "もえるごみ",
      romaji: "moerugomi",
      english: "burnables",
    },
    {
      hiragana: "おきば",
      romaji: "okiba",
      english: "endroit pour deposer",
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
      english: "boîte de conserve",
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
      hiragana: "うちゅうひこうし",
      romaji: "uchuuhikoushi",
      english: "astronaute",
    },
    {
      hiragana: "かいます",
      romaji: "kaimasu",
      english: "elever, avoir un pet",
    },
    {
      hiragana: "はしります",
      romaji: "hashirimasu",
      english: "courir",
    },
    {
      hiragana: "みえます",
      romaji: "miemasu",
      english: "etre visible, voir",
    },
    {
      hiragana: "きこえます",
      romaji: "kikoemasu",
      english: "entendre",
    },
    {
      hiragana: "できます",
      romaji: "dekimasu",
      english: "etre construit",
    },
    {
      hiragana: "ひらきます",
      romaji: "hirakimasu",
      english: "ouvrir livre/yeux/classe",
    },
    {
      hiragana: "しんぱい",
      romaji: "shinpai",
      english: "inquiétude",
    },
    {
      hiragana: "こえ",
      romaji: "koe",
      english: "voix",
    },
    {
      hiragana: "なみ",
      romaji: "nami",
      english: "vague",
    },
    {
      hiragana: "はなび",
      romaji: "hanabi",
      english: "feu d'artifice",
    },
    {
      hiragana: "どうぐ",
      romaji: "dougu",
      english: "outil",
    },
    {
      hiragana: "~のほう",
      romaji: "nohou",
      english: "direction, alternative",
    },
    {
      hiragana: "ご",
      romaji: "go",
      english: "dans X minutes",
    },
    {
      hiragana: "しか",
      romaji: "shika",
      english: "(+ negatif) seulement",
    },
    {
      hiragana: "ほかの",
      romaji: "hokano",
      english: "autre",
    },
    {
      hiragana: "はっきり",
      romaji: "hakkiri",
      english: "clairement",
    },
    {
      hiragana: "がく",
      romaji: "gaku",
      english: "étude",
    },
    {
      hiragana: "ほんだな",
      romaji: "hondana",
      english: "bibliothèque",
    },
    {
      hiragana: "いつか",
      romaji: "itsuka",
      english: "un jour / someday",
    },
    {
      hiragana: "たてます",
      romaji: "tatemasu",
      english: "construire",
    },
    {
      hiragana: "すばらしい",
      romaji: "subarashi",
      english: "merveilleux",
    },
    {
      hiragana: "こどもたち",
      romaji: "kodomotachi",
      english: "enfants",
    },
    {
      hiragana: "だいすき",
      romaji: "daisuki",
      english: "adorer",
    },
    {
      hiragana: "しゅしんこう",
      romaji: "shushinkou",
      english: "hero/heroine",
    },
    {
      hiragana: "かたち",
      romaji: "katachi",
      english: "forme",
    },
    {
      hiragana: "たとえば",
      romaji: "tatoeba",
      english: "par exemple",
    },
    {
      hiragana: "つけます",
      romaji: "tsukemasu",
      english: "allumer",
    },
    {
      hiragana: "じゆうに",
      romaji: "jiyuuni",
      english: "librement",
    },
    {
      hiragana: "そら",
      romaji: "sora",
      english: "ciel",
    },
    {
      hiragana: "とびます",
      romaji: "tobimasu",
      english: "voler",
    },
    {
      hiragana: "むかし",
      romaji: "mukashi",
      english: "autrefois",
    },
    {
      hiragana: "じぶん",
      romaji: "jibun",
      english: "soi-même",
    },
    {
      hiragana: "しょうらい",
      romaji: "shourai",
      english: "avenir",
    },
    {
      hiragana: "うれます",
      romaji: "uremasu",
      english: "être vendu",
    },
    {
      hiragana: "おどります",
      romaji: "odorimasu",
      english: "danser",
    },
    {
      hiragana: "かみます",
      romaji: "kamimasu",
      english: "macher/mordre",
    },
    {
      hiragana: "えらびます",
      romaji: "erabimasu",
      english: "choisir",
    },
    {
      hiragana: "かよいます",
      romaji: "kayoimasu",
      english: "se rendre quelque part aller et retour",
    },
    {
      hiragana: "まじめ",
      romaji: "majime",
      english: "sérieux",
    },
    {
      hiragana: "ねっしん",
      romaji: "nesshin",
      english: "déterminé, sincere, serieux",
    },
    {
      hiragana: "えらい",
      romaji: "erai",
      english: "formidable, admirable",
    },
    {
      hiragana: "ちょうどいい",
      romaji: "choudoii",
      english: "juste bien",
    },
    {
      hiragana: "けしき",
      romaji: "keshiki",
      english: "paysage",
    },
    {
      hiragana: "びよういん",
      romaji: "biyouin",
      english: "salon de beauté",
    },
    {
      hiragana: "だいどころ",
      romaji: "daidokoro",
      english: "cuisine",
    },
    {
      hiragana: "けいけん",
      romaji: "keiken",
      english: "expérience",
    },
    {
      hiragana: "ちから",
      romaji: "chikara",
      english: "force",
    },
    {
      hiragana: "にんき",
      romaji: "ninki",
      english: "popularité",
    },
    {
      hiragana: "あじ",
      romaji: "aji",
      english: "goût",
    },
    {
      hiragana: "しなもの",
      romaji: "shinamono",
      english: "produit, goods, marchandises",
    },
    {
      hiragana: "ねだん",
      romaji: "nedan",
      english: "prix",
    },
    {
      hiragana: "きゅうりょう",
      romaji: "kyuuryou",
      english: "salaire",
    },
    {
      hiragana: "ばんぐみ",
      romaji: "bangumi",
      english: "programme télévisé",
    },
    {
      hiragana: "かしゅ",
      romaji: "kashu",
      english: "chanteur",
    },
    {
      hiragana: "しょうせつ",
      romaji: "shousetsu",
      english: "roman",
    },
    {
      hiragana: "しょうせつか",
      romaji: "shousetsuka",
      english: "écrivain",
    },
    {
      hiragana: "むすこ",
      romaji: "musuko",
      english: "fils",
    },
    {
      hiragana: "むすめ",
      romaji: "musume",
      english: "fille",
    },
    {
      hiragana: "しばらく",
      romaji: "shibaraku",
      english: "un moment, quelques temps",
    },
    {
      hiragana: "たいてい",
      romaji: "taitei",
      english: "généralement",
    },
    {
      hiragana: "それに",
      romaji: "soreni",
      english: "en outre",
    },
    {
      hiragana: "それで",
      romaji: "sorede",
      english: "ainsi",
    },
    {
      hiragana: "かいわ",
      romaji: "kaiwa",
      english: "conversation",
    },
    {
      hiragana: "おしらせ",
      romaji: "oshirase",
      english: "annonce",
    },
    {
      hiragana: "さんかします",
      romaji: "sankashimasu",
      english: "participer",
    },
    {
      hiragana: "ひにち",
      romaji: "hinichi",
      english: "date",
    },
    {
      hiragana: "ど",
      romaji: "do",
      english: "sol",
    },
    {
      hiragana: "たいいくかん",
      romaji: "taiikukan",
      english: "salle de sport",
    },
    {
      hiragana: "むりょう",
      romaji: "muryou",
      english: "gratuit",
    },
    {
      hiragana: "さそいます",
      romaji: "sasoimasu",
      english: "inviter",
    },

    {
      hiragana: "あきます",
      romaji: "akimasu",
      english: "etre ouvert",
    },
    {
      hiragana: "しまいます",
      romaji: "shimaimasu",
      english: "etre fermé",
    },
    {
      hiragana: "つきます",
      romaji: "tsukimasu",
      english: "etre allumé, etre attaché",
    },
    {
      hiragana: "こわれます",
      romaji: "kowaremasu",
      english: "se briser, se casser, etre cassé, detruit (immatériel)",
    },
    {
      hiragana: "われます",
      romaji: "waremasu",
      english: "briser, casser (vaisselle)",
    },
    {
      hiragana: "おれます",
      romaji: "oremasu",
      english: "etre cassé, tordu, plié (arbre, os etc)",
    },
    {
      hiragana: "やぶれます",
      romaji: "yaburemasu",
      english: "etre dechiré",
    },
    {
      hiragana: "よごれます",
      romaji: "yogoremasu",
      english: "etre sale",
    },
    {
      hiragana: "はずれます",
      romaji: "hazuremasu",
      english:
        "etre détaché, être déconnecté, défaire (bouton de chemise qui saute)",
    },
    {
      hiragana: "とまります",
      romaji: "tomarimasu",
      english: "s'arreter, etre arreté",
    },
    {
      hiragana: "まちがえます",
      romaji: "machigaemasu",
      english: "faire une erreur, se tromper",
    },
    {
      hiragana: "おとしました",
      romaji: "otoshimasu",
      english: "faire tomber, laisser tomber, perdre",
    },
    {
      hiragana: "かかります",
      romaji: "kakarimasu",
      english: "etre accroché",
    },
    {
      hiragana: "ふきます",
      romaji: "fukimasu",
      english: "essuyer qlq chose",
    },
    {
      hiragana: "とりかえます",
      romaji: "torikaemasu",
      english: "echanger qlq chose (taille de vetement etc)",
    },
    {
      hiragana: "かたづけます",
      romaji: "katazukemasu",
      english: "ranger",
    },
    {
      hiragana: "さら",
      romaji: "sara",
      english: "assiette",
    },
    {
      hiragana: "ちゃわん",
      romaji: "chawan",
      english: "bol à riz",
    },
    {
      hiragana: "ふくろ",
      romaji: "fukuro",
      english: "sac",
    },
    {
      hiragana: "しょるい",
      romaji: "shorui",
      english: "document",
    },
    {
      hiragana: "えだ",
      romaji: "eda",
      english: "branche",
    },
    {
      hiragana: "えきいん",
      romaji: "ekiin",
      english: "membre du personnel de la gare",
    },
    {
      hiragana: "こうばん",
      romaji: "kouban",
      english: "poste de police",
    },
    {
      hiragana: "おさきにどうぞ",
      romaji: "osakinidouzo",
      english: "Après vous, je vous en prie.",
    },
    {
      hiragana: "わすれもの",
      romaji: "wasuremono",
      english: "objet oublié",
    },
    {
      hiragana: "のくらい",
      romaji: "nokurai",
      english: "~environ de cette taille",
    },
    {
      hiragana: "がわ",
      romaji: "gawa",
      english: "côté",
    },
    {
      hiragana: "へん",
      romaji: "hen",
      english: "étrange",
    },
    {
      hiragana: "あみだな",
      romaji: "amidana",
      english: "étagére",
    },
    {
      hiragana: "たしか",
      romaji: "tashika",
      english: "certain",
    },
    {
      hiragana: "じしん",
      romaji: "jishin",
      english: "tremblement de terre",
    },
    {
      hiragana: "かべ",
      romaji: "kabe",
      english: "mur",
    },
    {
      hiragana: "はり",
      romaji: "hari",
      english: "aiguille d'horloge",
    },
    {
      hiragana: "さします",
      romaji: "sashimasu",
      english: "pointer du doigt",
    },
    {
      hiragana: "はります",
      romaji: "harimasu",
      english: "coller",
    },
    {
      hiragana: "かけます",
      romaji: "kakemasu",
      english: "accrocher quelque chose",
    },
    {
      hiragana: "かざります",
      romaji: "kazarimasu",
      english: "décorer",
    },
    {
      hiragana: "ならべます",
      romaji: "narabemasu",
      english: "aligner",
    },
    {
      hiragana: "うえます",
      romaji: "uemasu",
      english: "planter, faire pousser des fleurs",
    },
    {
      hiragana: "もどします",
      romaji: "modoshimasu",
      english: "rendre, remettre a sa place ",
    },
    {
      hiragana: "まとめます",
      romaji: "matomemasu",
      english: "rassembler, mettre en forme, resumer",
    },
    {
      hiragana: "しまいます",
      romaji: "shimaimasu",
      english: "ranger, mettre les choses a leurs place",
    },
    {
      hiragana: "きめます",
      romaji: "kimemasu",
      english: "décider",
    },
    {
      hiragana: "よしゅうします",
      romaji: "yoshuushimasu",
      english: "reviser avant un cours, préparer une lesson",
    },
    {
      hiragana: "ふくしゅうします",
      romaji: "fukushuushimasu",
      english: "réviser",
    },
    {
      hiragana: "そのままにします",
      romaji: "sonomamanishimasu",
      english: "laisser tel quel",
    },
    {
      hiragana: "じゅぎょう",
      romaji: "jugyou",
      english: "leçon",
    },
    {
      hiragana: "こうぎ",
      romaji: "kougi",
      english: "une lesson / a lecture",
    },
    {
      hiragana: "よてい",
      romaji: "yotei",
      english: "emploi du temps",
    },
    {
      hiragana: "おしらせ",
      romaji: "oshirase",
      english: "annonce",
    },
    {
      hiragana: "ごみばこ",
      romaji: "gomibako",
      english: "poubelle",
    },
    {
      hiragana: "にんぎょう",
      romaji: "ningyou",
      english: "poupée",
    },
    {
      hiragana: "かびん",
      romaji: "kabin",
      english: "vase",
    },
    {
      hiragana: "かがみ",
      romaji: "kagami",
      english: "miroir",
    },
    {
      hiragana: "ひきだし",
      romaji: "hikidashi",
      english: "tiroir",
    },
    {
      hiragana: "ろうか",
      romaji: "rouka",
      english: "couloir",
    },
    {
      hiragana: "いけ",
      romaji: "ike",
      english: "bassin, etang",
    },
    {
      hiragana: "もとのところ",
      romaji: "motonotokoro",
      english: "position initiale",
    },

    {
      hiragana: "まわり",
      romaji: "mawari",
      english: "autour",
    },
    {
      hiragana: "まんなか",
      romaji: "mannaka",
      english: "milieu",
    },
    {
      hiragana: "すみ",
      romaji: "sumi",
      english: "coin",
    },
    {
      hiragana: "まだ",
      romaji: "mada",
      english: "encore, deja",
    },
    {
      hiragana: "まるい",
      romaji: "marui",
      english: "rond",
    },
    {
      hiragana: "うれしい",
      romaji: "ureshii",
      english: "heureux",
    },
    {
      hiragana: "いや",
      romaji: "iya",
      english: "hateful / desagréable",
    },
    {
      hiragana: "すると",
      romaji: "suruto",
      english: "alors",
    },
    {
      hiragana: "めがさめします",
      romaji: "megasameshimasu",
      english: "se réveiller",
    },

    {
      hiragana: "つづけます",
      romaji: "tsuzukemasu",
      english: "continuer",
    },
    {
      hiragana: "みつけます",
      romaji: "mitsukemasu",
      english: "trouver",
    },
    {
      hiragana: "とります",
      romaji: "torimasu",
      english: "prendre ",
    },
    {
      hiragana: "うけます",
      romaji: "ukemasu",
      english: "take an exam",
    },
    {
      hiragana: "もうしこみます",
      romaji: "moushikomimasu",
      english: "postuler",
    },
    {
      hiragana: "きゅうけいします",
      romaji: "kyuukeishimasu",
      english: "prendre un congé",
    },
    {
      hiragana: "れんきゅう",
      romaji: "renkyuu",
      english: "congé",
    },
    {
      hiragana: "さくぶん",
      romaji: "sakubun",
      english: "essai, composition",
    },
    {
      hiragana: "はっぴょう",
      romaji: "happyou",
      english: "présentation",
    },
    {
      hiragana: "てんらんかい",
      romaji: "tenrankai",
      english: "exposition",
    },
    {
      hiragana: "けっこんしき",
      romaji: "kekkonshiki",
      english: "cérémonie de mariage",
    },
    {
      hiragana: "そうしき",
      romaji: "soushiki",
      english: "funerailles",
    },
    {
      hiragana: "しき",
      romaji: "shiki",
      english: "cérémonie",
    },
    {
      hiragana: "ほんしゃ",
      romaji: "honsha",
      english: "siège social",
    },
    {
      hiragana: "してん",
      romaji: "shiten",
      english: "succursale",
    },
    {
      hiragana: "きょうかい",
      romaji: "kyoukai",
      english: "église",
    },
    {
      hiragana: "だいがくいん",
      romaji: "daigakuin",
      english: "école supérieure",
    },
    {
      hiragana: "どうぶつえん",
      romaji: "doubutsuen",
      english: "zoo",
    },
    {
      hiragana: "かえり",
      romaji: "kaeri",
      english: "retour",
    },
    {
      hiragana: "ずっと",
      romaji: "zutto",
      english: "tout le temps",
    },

    {
      hiragana: "のこります",
      romaji: "nokorimasu",
      english: "rester (to remain, to be left)",
    },
    {
      hiragana: "にゅうがくしけん",
      romaji: "nyuugakushiken",
      english: "examen d'entrée",
    },
    {
      hiragana: "つきに",
      romaji: "tsukini",
      english: "mensuellement",
    },
    {
      hiragana: "むら",
      romaji: "mura",
      english: "village",
    },
    {
      hiragana: "そつぎょう",
      romaji: "sotsugyou",
      english: "diplômé",
    },
    {
      hiragana: "えいがかん",
      romaji: "eigakan",
      english: "cinéma",
    },
    {
      hiragana: "とじます",
      romaji: "tojimasu",
      english: "fermer(yeux, livres etc)",
    },
    {
      hiragana: "とかい",
      romaji: "tokai",
      english: "ville",
    },
    {
      hiragana: "じゅうに",
      romaji: "juuni",
      english: "librement",
    },
    {
      hiragana: "落ちる",
      romaji: "ochimasu",
      english: "tomber",
    },
    {
      hiragana: "出る",
      romaji: "demasu",
      english: "sortir soi meme",
    },
    {
      hiragana: "入る",
      romaji: "hairimasu",
      english: "entrer dans",
    },
    {
      hiragana: "開ける",
      romaji: "akemasu",
      english: "ouvrir qlq chose",
    },
    {
      hiragana: "閉める",
      romaji: "shimemasu",
      english: "fermer qlq chose",
    },
    {
      hiragana: "閉まる",
      romaji: "shimarimasu",
      english: "etre fermé",
    },
    {
      hiragana: "付ける",
      romaji: "tsukemasu",
      english: "attacher qlq chose",
    },
    {
      hiragana: "消す",
      romaji: "keshimasu",
      english: "effacer qlq chose",
    },
    {
      hiragana: "消える",
      romaji: "kiemasu",
      english: "disparaître, etre éteint",
    },
    {
      hiragana: "かかります",
      romaji: "kakarimasu",
      english: "verrouiller",
    },
  ],
  /*   quizMinnaVocab: [
    {
      hiragana: "落とす",
      romaji: "otoshimasu",
      english: "laisser tomber, perdre",
    },
    {
      hiragana: "落ちる",
      romaji: "ochimasu",
      english: "tomber",
    },
    {
      hiragana: "出す",
      romaji: "dashimasu",
      english: "sortir qlq chose",
    },
    {
      hiragana: "出る",
      romaji: "demasu",
      english: "sortir soi meme",
    },
    {
      hiragana: "入れる",
      romaji: "iremasu",
      english: "insérer, mettre dans",
    },
    {
      hiragana: "入る",
      romaji: "hairimasu",
      english: "entrer dans",
    },
    {
      hiragana: "開ける",
      romaji: "akemasu",
      english: "ouvrir qlq chose",
    },
    {
      hiragana: "開く",
      romaji: "akimasu",
      english: "être ouvert",
    },
    {
      hiragana: "閉める",
      romaji: "shimemasu",
      english: "fermer qlq chose",
    },
    {
      hiragana: "閉まる",
      romaji: "shimarimasu",
      english: "etre fermé",
    },
    {
      hiragana: "付ける",
      romaji: "tsukemasu",
      english: "attacher qlq chose",
    },
    {
      hiragana: "付く",
      romaji: "tsukimasu",
      english: "être attaché",
    },
    {
      hiragana: "消す",
      romaji: "keshimasu",
      english: "effacer qlq chose",
    },
    {
      hiragana: "消える",
      romaji: "kiemasu",
      english: "disparaître, etre éteint",
    },
    {
      hiragana: "つきます",
      romaji: "tsukimasu",
      english: "etre allumé",
    },
    {
      hiragana: "こわれます",
      romaji: "kowaremasu",
      english: "se briser, se casser, etre cassé, detruit (immatériel)",
    },
    {
      hiragana: "われます",
      romaji: "waremasu",
      english: "briser, casser (vaisselle)",
    },
    {
      hiragana: "おれます",
      romaji: "oremasu",
      english: "etre cassé, tordu, plié (arbre, os)",
    },
    {
      hiragana: "やぶれます",
      romaji: "yaburemasu",
      english: "etre dechiré",
    },
    {
      hiragana: "よごれます",
      romaji: "yogoremasu",
      english: "etre salie, taché",
    },
    {
      hiragana: "はずれます",
      romaji: "hazuremasu",
      english:
        "etre détaché, être déconnecté, défaire (bouton de chemise qui saute)",
    },
    {
      hiragana: "とまります",
      romaji: "tomarimasu",
      english: "s'arreter, etre arreté",
    },
    {
      hiragana: "まちがえます",
      romaji: "machigaemasu",
      english: "faire une erreur, se tromper",
    },
    {
      hiragana: "かかります",
      romaji: "kakarimasu",
      english: "verrouiller",
    },
    {
      hiragana: "ふきます",
      romaji: "fukimasu",
      english: "essuyer qlq chose",
    },
    {
      hiragana: "とりかえます",
      romaji: "torikaemasu",
      english: "echanger qlq chose (taille de vetement etc)",
    },
  ],
 */
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
});

/* export const {} = quizSlice.actions; */

export default quizSlice.reducer;
