import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  quizAnimals: [
    { hiragana: "いぬ", romaji: "inu", english: "chien" },
    { hiragana: "ねこ", romaji: "neko", english: "chat" },
    { hiragana: "とり", romaji: "tori", english: "oiseau" },
    { hiragana: "さる", romaji: "saru", english: "singe" },
    { hiragana: "くま", romaji: "kuma", english: "ours" },
    { hiragana: "ぞう", romaji: "zou", english: "elephant" },
    { hiragana: "たこ", romaji: "tako", english: "octopus" },
    { hiragana: "さめ", romaji: "same", english: "requin" },
    { hiragana: "とら", romaji: "tora", english: "tigre" },
    { hiragana: "ひつじ", romaji: "hitsuji", english: "mouton" },
    { hiragana: "とんぼ", romaji: "tonbo", english: "libellule" },
    { hiragana: "さかな", romaji: "sakana", english: "poisson" },
    { hiragana: "へび", romaji: "hebi", english: "serpent" },
    { hiragana: "たぬき", romaji: "tanuki", english: "raton laveur" },
    { hiragana: "たいらいし", romaji: "tairaisi", english: "hippocampe" },
    { hiragana: "うさぎ", romaji: "usagi", english: "lapin" },
    { hiragana: "かめ", romaji: "kame", english: "tortue" },
    { hiragana: "あざらし", romaji: "azarashi", english: "phoque" },
    { hiragana: "かえる", romaji: "kaeru", english: "grenouille" },
  ],
  quizColors: [
    { hiragana: "あか", romaji: "aka", english: "rouge" },
    { hiragana: "あお", romaji: "ao", english: "bleu" },
    { hiragana: "きいろ", romaji: "kiiro", english: "jaune" },
    { hiragana: "みどり", romaji: "midori", english: "vert" },
    { hiragana: "むらさき", romaji: "murasaki", english: "violet" },
    { hiragana: "しろ", romaji: "shiro", english: "blanc" },
    { hiragana: "くろ", romaji: "kuro", english: "noir" },
    { hiragana: "ピンク", romaji: "pinku", english: "rose" },
    { hiragana: "オレンジ", romaji: "orenji", english: "orange" },
    { hiragana: "グレー", romaji: "guree", english: "gris" },
  ],
  quizKanjis: [
    {
      hiragana: "皿",
      romaji: "sara",
      english: "assiette",
    },
    {
      hiragana: "隅",
      romaji: "sumi",
      english: "coin (intérieur)",
    },
    {
      hiragana: "机",
      romaji: "tsukue",
      english: "bureau",
    },
    {
      hiragana: "引く",
      romaji: "hiku",
      english: "tirer",
    },
    {
      hiragana: "箱",
      romaji: "hako",
      english: "boîte",
    },
    {
      hiragana: "置く",
      romaji: "oku",
      english: "placer",
    },
    {
      hiragana: "片付ける",
      romaji: "katazukeru",
      english: "rangé",
    },
    {
      hiragana: "復習",
      romaji: "fukushuu",
      english: "révision",
    },
    {
      hiragana: "予習",
      romaji: "yoshuu",
      english: "préparation",
    },
    {
      hiragana: "予約",
      romaji: "yoyaku",
      english: "réservation",
    },
    {
      hiragana: "並べる",
      romaji: "naraberu",
      english: "aligner",
    },
    {
      hiragana: "連れて",
      romaji: "tsurete",
      english: "emmener",
    },
    {
      hiragana: "連絡",
      romaji: "renraku",
      english: "contact",
    },
    {
      hiragana: "元の所",
      romaji: "motonotokoro",
      english: "endroit d'origine",
    },
    {
      hiragana: "お知らせ",
      romaji: "oshirase",
      english: "notification",
    },
    {
      hiragana: "動物園",
      romaji: "doubutsuen",
      english: "zoo",
    },
    {
      hiragana: "飛ぶ",
      romaji: "tobu",
      english: "voler",
    },
    {
      hiragana: "飛行機",
      romaji: "hikouki",
      english: "avion",
    },
    {
      hiragana: "将来",
      romaji: "shourai",
      english: "avenir",
    },
    {
      hiragana: "神社",
      romaji: "jinja",
      english: "sanctuaire",
    },
    {
      hiragana: "予定",
      romaji: "yotei",
      english: "plan",
    },
    {
      hiragana: "顔",
      romaji: "kao",
      english: "visage",
    },
    {
      hiragana: "受ける",
      romaji: "ukeru",
      english: "recevoir",
    },
    {
      hiragana: "決める",
      romaji: "kimeru",
      english: "décider",
    },
    {
      hiragana: "小説",
      romaji: "shousetsu",
      english: "roman",
    },
    {
      hiragana: "本社",
      romaji: "honsha",
      english: "siège social",
    },
    {
      hiragana: "大学院",
      romaji: "daigakuin",
      english: "école supérieure",
    },

    {
      hiragana: "会議",
      romaji: "kaigi",
      english: "réunion",
    },
    {
      hiragana: "駐車場",
      romaji: "chuushajou",
      english: "parking",
    },
    {
      hiragana: "帽子",
      romaji: "boushi",
      english: "chapeau",
    },
    {
      hiragana: "市役所",
      romaji: "shiyakusho",
      english: "mairie",
    },
    {
      hiragana: "捨てる",
      romaji: "suteru",
      english: "jeter",
    },
    {
      hiragana: "遅れる",
      romaji: "okureru",
      english: "être en retard",
    },
    {
      hiragana: "遠い",
      romaji: "tooi",
      english: "loin",
    },
    {
      hiragana: "歳",
      romaji: "sai",
      english: "~ans",
    },
    {
      hiragana: "運動会",
      romaji: "undoukai",
      english: "journée sportive",
    },
    {
      hiragana: "気分",
      romaji: "kibun",
      english: "état d'esprit",
    },
    {
      hiragana: "声",
      romaji: "koe",
      english: "voix",
    },
    {
      hiragana: "道具",
      romaji: "dougu",
      english: "outil",
    },
    {
      hiragana: "鳥",
      romaji: "tori",
      english: "oiseau",
    },

    {
      hiragana: "夢",
      romaji: "yume",
      english: "rêve",
    },
    {
      hiragana: "週末",
      romaji: "shuumatsu",
      english: "week-end",
    },
    {
      hiragana: "座る",
      romaji: "suwaru",
      english: "s'asseoir",
    },
    {
      hiragana: "走る",
      romaji: "hashiru",
      english: "courir",
    },
    {
      hiragana: "登る",
      romaji: "noboru",
      english: "grimper",
    },
    {
      hiragana: "修理する",
      romaji: "shuurisuru",
      english: "réparer",
    },
    {
      hiragana: "お願い",
      romaji: "onegai",
      english: "demande",
    },
    {
      hiragana: "形",
      romaji: "katachi",
      english: "forme",
    },
    {
      hiragana: "品物",
      romaji: "shinamono",
      english: "goods",
    },
    {
      hiragana: "力",
      romaji: "chikara",
      english: "force",
    },
    {
      hiragana: "熱い",
      romaji: "atsui",
      english: "chaud",
    },
    {
      hiragana: "熱",
      romaji: "netsu",
      english: "fièvre",
    },
    {
      hiragana: "熱心",
      romaji: "nesshin",
      english: "zélé",
    },
    {
      hiragana: "心",
      romaji: "kokoro",
      english: "cœur, esprit",
    },
    {
      hiragana: "経験",
      romaji: "keiken",
      english: "expérience",
    },
    {
      hiragana: "景色",
      romaji: "keshiki",
      english: "paysage",
    },
    {
      hiragana: "眠い",
      romaji: "nemui",
      english: "somnolent",
    },
    {
      hiragana: "説明する",
      romaji: "setsumeisuru",
      english: "expliquer",
    },
    {
      hiragana: "選ぶ",
      romaji: "erabu",
      english: "choisir",
    },
    {
      hiragana: "通う",
      romaji: "kayou",
      english: "fréquenter (ex: fréquenter une école)",
    },
    {
      hiragana: "番号",
      romaji: "bangou",
      english: "numéro",
    },
    {
      hiragana: "袋",
      romaji: "fukuro",
      english: "sac, poche",
    },
    {
      hiragana: "忘れる",
      romaji: "wasureru",
      english: "oublier",
    },
    {
      hiragana: "落とす",
      romaji: "otosu",
      english: "faire tomber",
    },
    {
      hiragana: "汚れる",
      romaji: "yogoreru",
      english: "se salir",
    },
    {
      hiragana: "洗う",
      romaji: "arau",
      english: "laver",
    },
    {
      hiragana: "着く",
      romaji: "tsuku",
      english: "arriver (à destination)",
    },
    {
      hiragana: "覚える",
      romaji: "oboeru",
      english: "mémoriser, se souvenir",
    },
    {
      hiragana: "調べる",
      romaji: "shiraberu",
      english: "rechercher, enquêter",
    },
    {
      hiragana: "取る",
      romaji: "toru",
      english: "prendre",
    },
    {
      hiragana: "辺",
      romaji: "atari",
      english: "alentours",
    },
    {
      hiragana: "左側",
      romaji: "hidarigawa",
      english: "côté gauche",
    },
    {
      hiragana: "住所",
      romaji: "juusho",
      english: "adresse",
    },
    {
      hiragana: "外れる",
      romaji: "hazureru",
      english: "se déconnecter, être détaché",
    },
    {
      hiragana: "隅",
      romaji: "sumi",
      english: "coin, recoin",
    },
    {
      hiragana: "机",
      romaji: "tsukue",
      english: "bureau, table",
    },
  ],
  quizFood: [
    { hiragana: "すし", romaji: "sushi", english: "sushi" },
    { hiragana: "てんぷら", romaji: "tenpura", english: "tempura" },
    { hiragana: "うどん", romaji: "udon", english: "udon noodles" },
    { hiragana: "そば", romaji: "soba", english: "soba noodles" },
    { hiragana: "とんかつ", romaji: "tonkatsu", english: "pork cutlet" },
    { hiragana: "やきそば", romaji: "yakisoba", english: "stir-fried noodles" },
    { hiragana: "おにぎり", romaji: "onigiri", english: "rice ball" },
    {
      hiragana: "お好み焼き",
      romaji: "okonomiyaki",
      english: "savory pancake",
    },
    { hiragana: "たこ焼き", romaji: "takoyaki", english: "octopus balls" },
    { hiragana: "おでん", romaji: "oden", english: "Japanese hot pot" },
    { hiragana: "もつ鍋", romaji: "motsunabe", english: "offal hot pot" },
    {
      hiragana: "しゃぶしゃぶ",
      romaji: "shabushabu",
      english: "hot pot with thinly sliced meat",
    },
    {
      hiragana: "すき焼き",
      romaji: "sukiyaki",
      english: "hot pot with beef and vegetables",
    },
    { hiragana: "ラーメン", romaji: "ramen", english: "ramen noodles" },
    { hiragana: "カレーライス", romaji: "kare-raisu", english: "curry rice" },
    {
      hiragana: "やきとり",
      romaji: "yakitori",
      english: "grilled chicken skewers",
    },
  ],

  quizObjects: [
    { hiragana: "かばん", romaji: "kaban", english: "sac/poche" },
    { hiragana: "くつ", romaji: "kutsu", english: "chaussures" },
    { hiragana: "ぼうし", romaji: "boushi", english: "chapeau" },
    { hiragana: "めがね", romaji: "megane", english: "lunettes" },
    { hiragana: "はさみ", romaji: "hasami", english: "ciseaux" },
    { hiragana: "えんぴつ", romaji: "enpitsu", english: "crayon" },
    { hiragana: "タオル", romaji: "taoru", english: "serviette" },
    { hiragana: "はし", romaji: "hashi", english: "baguettes" },
    { hiragana: "ふで", romaji: "fude", english: "brosse" },
    { hiragana: "とけい", romaji: "tokei", english: "montre" },
    { hiragana: "かさ", romaji: "kasa", english: "paraplue" },
    { hiragana: "リモコン", romaji: "rimokon", english: "télécommande" },
    { hiragana: "スマホ", romaji: "sumaho", english: "smartphone" },
    {
      hiragana: "カメラ",
      romaji: "kamera",
      english: "camera / appareil photo",
    },
    { hiragana: "でんわ", romaji: "denwa", english: "telephone" },
    { hiragana: "かぎ", romaji: "kagi", english: "clés" },
    { hiragana: "ほうき", romaji: "houki", english: "balai" },
  ],
  quizAdjectives: [
    { hiragana: "たかい", romaji: "takai", english: "haut / cher" },
    { hiragana: "ひくい", romaji: "hikui", english: "bas / bon marché" },
    { hiragana: "おおきい", romaji: "ookii", english: "grand" },
    { hiragana: "ちいさい", romaji: "chiisai", english: "petit" },
    { hiragana: "きれい", romaji: "kirei", english: "beau / propre" },
    { hiragana: "きたない", romaji: "kitanai", english: "sale / laid" },
    { hiragana: "あたらしい", romaji: "atarashii", english: "nouveau" },
    { hiragana: "ふるい", romaji: "furui", english: "vieux" },
    { hiragana: "しずか", romaji: "shizuka", english: "calme / silencieux" },
    { hiragana: "にぎやか", romaji: "nigiyaka", english: "animé / bruyant" },
    { hiragana: "はやい", romaji: "hayai", english: "rapide" },
    { hiragana: "おそい", romaji: "osoi", english: "lent / tardif" },
    { hiragana: "あかるい", romaji: "akarui", english: "lumineux / gai" },
    { hiragana: "くらい", romaji: "kurai", english: "sombre / triste" },
    { hiragana: "たのしい", romaji: "tanoshii", english: "amusant / agréable" },
    {
      hiragana: "つまらない",
      romaji: "tsumaranai",
      english: "ennuyeux / sans intérêt",
    },
    { hiragana: "かんたん", romaji: "kantan", english: "facile" },
    { hiragana: "むずかしい", romaji: "muzukashii", english: "difficile" },
    { hiragana: "あつい", romaji: "atsui", english: "chaud" },
    { hiragana: "さむい", romaji: "samui", english: "froid" },
    { hiragana: "うまい", romaji: "umai", english: "délicieux" },
    { hiragana: "まずい", romaji: "mazui", english: "mauvais goût / pas bon" },
    {
      hiragana: "おいしい",
      romaji: "oishii",
      english: "savoureux / délicieux",
    },
    { hiragana: "ゆうめい", romaji: "yuumei", english: "célèbre" },
    { hiragana: "しんせつ", romaji: "shinsetsu", english: "gentil / aimable" },
    { hiragana: "いじわる", romaji: "ijiwaru", english: "méchant / taquin" },
    { hiragana: "つよい", romaji: "tsuyoi", english: "fort / puissant" },
    { hiragana: "よわい", romaji: "yowai", english: "faible" },
    { hiragana: "きびしい", romaji: "kibishii", english: "sévère / dur" },
    { hiragana: "やさしい", romaji: "yasashii", english: "gentil / doux" },
    { hiragana: "あつらえたよう", romaji: "atsuraeta you", english: "parfait" },
    { hiragana: "ひどい", romaji: "hidoi", english: "horrible / affreux" },
    { hiragana: "かわいい", romaji: "kawaii", english: "mignon" },
    { hiragana: "かっこいい", romaji: "kakkoii", english: "cool / classe" },
    { hiragana: "ふしぎ", romaji: "fushigi", english: "étrange / mystérieux" },
    { hiragana: "おおぜい", romaji: "oozei", english: "nombreux / nombreux" },
    { hiragana: "すくない", romaji: "sukunai", english: "peu / peu nombreux" },
    { hiragana: "あたたかい", romaji: "atatakai", english: "chaleureux" },
  ],
  quizVerbs: [
    { hiragana: "たべる", romaji: "taberu", english: "manger" },
    { hiragana: "みる", romaji: "miru", english: "voir" },
    { hiragana: "いく", romaji: "iku", english: "aller" },
    { hiragana: "くる", romaji: "kuru", english: "venir" },
    { hiragana: "きく", romaji: "kiku", english: "écouter" },
    { hiragana: "はなす", romaji: "hanasu", english: "parler" },
    { hiragana: "かう", romaji: "kau", english: "acheter" },
    { hiragana: "つくる", romaji: "tsukuru", english: "fabriquer" },
    { hiragana: "およぐ", romaji: "oyogu", english: "nager" },
    { hiragana: "はしる", romaji: "hashiru", english: "courir" },
    { hiragana: "やすむ", romaji: "yasumu", english: "se reposer" },
    { hiragana: "しる", romaji: "shiru", english: "connaître" },
    { hiragana: "かえる", romaji: "kaeru", english: "rentrer" },
    { hiragana: "でる", romaji: "deru", english: "sortir" },
    { hiragana: "あるく", romaji: "aruku", english: "marcher" },
    { hiragana: "すわる", romaji: "suwaru", english: "s'asseoir" },
    { hiragana: "きる", romaji: "kiru", english: "porter (un vêtement)" },
    { hiragana: "きこえる", romaji: "kikoeru", english: "entendre" },
  ],
  quizClothes: [
    { hiragana: "ふく", romaji: "fuku", english: "clothing" },
    { hiragana: "ぼうし", romaji: "boushi", english: "hat" },
    { hiragana: "くつ", romaji: "kutsu", english: "shoes" },
    { hiragana: "せいふく", romaji: "seifuku", english: "uniform" },
    { hiragana: "タイツ", romaji: "taitsu", english: "tights" },
    { hiragana: "グローブ", romaji: "guroobu", english: "gloves" },
    { hiragana: "コート", romaji: "kooto", english: "coat" },
    { hiragana: "ズボン", romaji: "zubon", english: "pants" },
    { hiragana: "ジャケット", romaji: "jaketto", english: "jacket" },
    { hiragana: "ワンピース", romaji: "wanpiisu", english: "dress" },
    { hiragana: "シャツ", romaji: "shatsu", english: "shirt" },
    { hiragana: "スカート", romaji: "sukaato", english: "skirt" },
    { hiragana: "ハンカチ", romaji: "hankachi", english: "handkerchief" },
    { hiragana: "ネクタイ", romaji: "nekutai", english: "necktie" },
    { hiragana: "ベスト", romaji: "besuto", english: "vest" },
    { hiragana: "ブラウス", romaji: "burauzu", english: "blouse" },
    { hiragana: "カーディガン", romaji: "kaadigan", english: "cardigan" },
    { hiragana: "スニーカー", romaji: "sunika", english: "sneakers" },
    { hiragana: "ブーツ", romaji: "buutsu", english: "boots" },
    { hiragana: "バッグ", romaji: "baggu", english: "bag" },
    { hiragana: "マフラー", romaji: "mafuraa", english: "scarf" },
    { hiragana: "てぶくろ", romaji: "tebukuro", english: "gloves" },
    { hiragana: "きもの", romaji: "kimono", english: "kimono" },
    { hiragana: "ゆかた", romaji: "yukata", english: "yukata" },
  ],
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
  quizKatakanas: [
    {
      hiragana: "アイスクリーム",
      romaji: "aisukuriimu",
      english: "ice cream",
    },
    {
      hiragana: "チョコレート",
      romaji: "chokoreeto",
      english: "chocolate",
    },
    {
      hiragana: "カレーライス",
      romaji: "kareeraisu",
      english: "curry rice",
    },
    {
      hiragana: "ラーメン",
      romaji: "raamen",
      english: "ramen",
    },
    {
      hiragana: "テレビ",
      romaji: "terebi",
      english: "television",
    },
    {
      hiragana: "コーヒー",
      romaji: "koohii",
      english: "coffee",
    },
    {
      hiragana: "ハンバーガー",
      romaji: "hanbaagaa",
      english: "hamburger",
    },
    {
      hiragana: "ケーキ",
      romaji: "keeki",
      english: "cake",
    },
    {
      hiragana: "ピザ",
      romaji: "piza",
      english: "pizza",
    },
    {
      hiragana: "ドーナツ",
      romaji: "doonatsu",
      english: "donut",
    },
    {
      hiragana: "ハロウィン",
      romaji: "harowin",
      english: "Halloween",
    },
    {
      hiragana: "ビール",
      romaji: "biiru",
      english: "beer",
    },
    {
      hiragana: "ブルーベリー",
      romaji: "buruuberii",
      english: "blueberry",
    },
    {
      hiragana: "フライドチキン",
      romaji: "furaidochikin",
      english: "fried chicken",
    },
    {
      hiragana: "ポテトチップス",
      romaji: "potetochippusu",
      english: "potato chips",
    },
    {
      hiragana: "マフィン",
      romaji: "mafin",
      english: "muffin",
    },
    {
      hiragana: "バナナ",
      romaji: "banana",
      english: "banana",
    },
    {
      hiragana: "バター",
      romaji: "bataa",
      english: "butter",
    },
    {
      hiragana: "レモン",
      romaji: "remon",
      english: "lemon",
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
      english: "être en retard [jikanni~]",
    },
    {
      hiragana: "間に合います",
      romaji: "maniaimasu",
      english: "être à l'heure [jikanni~]",
    },
    {
      hiragana: "やります",
      romaji: "yarimasu",
      english: "faire (familier)",
    },
    {
      hiragana: "拾います",
      romaji: "hiroimasu",
      english: "rammasser ",
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
      hiragana: "フリーマーケット",
      romaji: "furiimaaketto",
      english: "flee market",
    },
    {
      hiragana: "ボランティア ",
      romaji: "borantia",
      english: "volunteer",
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
      english: "cette fois-ci / prochaine fois / une autre fois",
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
      english: "sortir (poubelle, feuille du sac etc)",
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
      english: "côté (gauche, droite)",
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
      english: "être différent, etre incorrect",
    },
    {
      hiragana: "うちゅうひこうし",
      romaji: "uchuhikoushi",
      english: "astronaute",
    },
    {
      hiragana: "買います / 飼います",
      romaji: "kaimasu",
      english: "acheter / élever,avoir (un animal)",
    },
    {
      hiragana: "走ります",
      romaji: "hashirimasu",
      english: "courir [machi wo ~]",
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
      english: "pouvoir faire / etre construit",
    },
    {
      hiragana: "開きます",
      romaji: "hirakimasu",
      english: "ouvrir un livre,yeux,classe",
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
      hiragana: "立てます / 建てます",
      romaji: "tatemasu",
      english: "se lever / to build,be construct",
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
      hiragana: "付けます",
      romaji: "tsukemasu",
      english: "attacher qlq chose ",
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
      english: "poche, sac (en plastique / papier)",
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
      english: "tout le temps, tout du long",
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
      english: "faire (casual)",
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
      english: "bénévole  / volunteer",
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
      romaji: "ben",
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
      english: "very; extremely; surprisingly; considerably; awfully; terribly",
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
      english: "côté (gauche, droite)",
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
      english: "un autre",
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
      english: "des enfants",
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
      english: "allumer qlq chose",
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
      english: "voler dans le ciel",
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
      english: "poche, sac (en plastique / papier)",
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
      english: "tout le temps, tout du long",
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
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
});

export default quizSlice.reducer;
