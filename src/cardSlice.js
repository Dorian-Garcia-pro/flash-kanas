import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  InitNbCard: 0,
  rectoVerso: true,
  infiniteMode: true,
  displayfilters: false,
  toggleGramCombis: false,
  toggleGramModifs: false,
  toggleFilterHiraganas: false,
  toggleFilterHiraganasCombis: false,
  toggleFilterHiraganasDakuten: false,
  toggleFilterKatakanas: false,
  toggleFilterKatakanasCombis: false,
  toggleFilterKatakanasDakuten: false,
  listHiraganas: [
    {
      kana: "あ",
      romaji: "a",
      nb: 0,
      selected: true,
      img: "/assets/hiraganas/a.png",
    },
    {
      kana: "い",
      romaji: "i",
      nb: 1,
      selected: true,
      img: "/assets/hiraganas/i.png",
    },
    {
      kana: "う",
      romaji: "u",
      nb: 2,
      selected: true,
      img: "/assets/hiraganas/u.png",
    },
    {
      kana: "え",
      romaji: "e",
      nb: 3,
      selected: true,
      img: "/assets/hiraganas/e.png",
    },
    {
      kana: "お",
      romaji: "o",
      nb: 4,
      selected: true,
      img: "/assets/hiraganas/o.png",
    },
    {
      kana: "か",
      romaji: "ka",
      nb: 5,
      selected: true,
      img: "/assets/hiraganas/ka.png",
    },
    {
      kana: "き",
      romaji: "ki",
      nb: 6,
      selected: true,
      img: "/assets/hiraganas/ki.png",
    },
    {
      kana: "く",
      romaji: "ku",
      nb: 7,
      selected: true,
      img: "/assets/hiraganas/ku.png",
    },
    {
      kana: "け",
      romaji: "ke",
      nb: 8,
      selected: true,
      img: "/assets/hiraganas/ke.png",
    },
    {
      kana: "こ",
      romaji: "ko",
      nb: 9,
      selected: true,
      img: "/assets/hiraganas/ko.png",
    },
    {
      kana: "さ",
      romaji: "sa",
      nb: 10,
      selected: false,
      img: "/assets/hiraganas/sa.png",
    },
    {
      kana: "し",
      romaji: "shi",
      nb: 11,
      selected: false,
      img: "/assets/hiraganas/shi.png",
    },
    {
      kana: "す",
      romaji: "su",
      nb: 12,
      selected: false,
      img: "/assets/hiraganas/su.png",
    },
    {
      kana: "せ",
      romaji: "se",
      nb: 13,
      selected: false,
      img: "/assets/hiraganas/se.png",
    },
    {
      kana: "そ",
      romaji: "so",
      nb: 14,
      selected: false,
      img: "/assets/hiraganas/so.png",
    },
    {
      kana: "た",
      romaji: "ta",
      nb: 15,
      selected: false,
      img: "/assets/hiraganas/ta.png",
    },
    {
      kana: "ち",
      romaji: "chi",
      nb: 16,
      selected: false,
      img: "/assets/hiraganas/chi.png",
    },
    {
      kana: "つ",
      romaji: "tsu",
      nb: 17,
      selected: false,
      img: "/assets/hiraganas/tsu.png",
    },
    {
      kana: "て",
      romaji: "te",
      nb: 18,
      selected: false,
      img: "/assets/hiraganas/te.png",
    },
    {
      kana: "と",
      romaji: "to",
      nb: 19,
      selected: false,
      img: "/assets/hiraganas/to.png",
    },
    {
      kana: "な",
      romaji: "na",
      nb: 20,
      selected: false,
      img: "/assets/hiraganas/na.png",
    },
    {
      kana: "に",
      romaji: "ni",
      nb: 21,
      selected: false,
      img: "/assets/hiraganas/ni.png",
    },
    {
      kana: "ぬ",
      romaji: "nu",
      nb: 22,
      selected: false,
      img: "/assets/hiraganas/nu.png",
    },
    {
      kana: "ね",
      romaji: "ne",
      nb: 23,
      selected: false,
      img: "/assets/hiraganas/ne.png",
    },
    {
      kana: "の",
      romaji: "no",
      nb: 24,
      selected: false,
      img: "/assets/hiraganas/no.png",
    },
    {
      kana: "は",
      romaji: "ha",
      nb: 25,
      selected: false,
      img: "/assets/hiraganas/ha.png",
    },
    {
      kana: "ひ",
      romaji: "hi",
      nb: 26,
      selected: false,
      img: "/assets/hiraganas/hi.png",
    },
    {
      kana: "ふ",
      romaji: "fu",
      nb: 27,
      selected: false,
      img: "/assets/hiraganas/fu.png",
    },
    {
      kana: "へ",
      romaji: "he",
      nb: 28,
      selected: false,
      img: "/assets/hiraganas/he.png",
    },
    {
      kana: "ほ",
      romaji: "ho",
      nb: 29,
      selected: false,
      img: "/assets/hiraganas/ho.png",
    },
    {
      kana: "ま",
      romaji: "ma",
      nb: 30,
      selected: false,
      img: "/assets/hiraganas/ma.png",
    },
    {
      kana: "み",
      romaji: "mi",
      nb: 31,
      selected: false,
      img: "/assets/hiraganas/mi.png",
    },
    {
      kana: "む",
      romaji: "mu",
      nb: 32,
      selected: false,
      img: "/assets/hiraganas/mu.png",
    },
    {
      kana: "め",
      romaji: "me",
      nb: 33,
      selected: false,
      img: "/assets/hiraganas/me.png",
    },
    {
      kana: "も",
      romaji: "mo",
      nb: 34,
      selected: false,
      img: "/assets/hiraganas/mo.png",
    },
    {
      kana: "や",
      romaji: "ya",
      nb: 35,
      selected: false,
      img: "/assets/hiraganas/ya.png",
    },
    {
      kana: "ゆ",
      romaji: "yu",
      nb: 36,
      selected: false,
      img: "/assets/hiraganas/yu.png",
    },
    {
      kana: "よ",
      romaji: "yo",
      nb: 37,
      selected: false,
      img: "/assets/hiraganas/yo.png",
    },
    {
      kana: "ら",
      romaji: "ra",
      nb: 38,
      selected: false,
      img: "/assets/hiraganas/ra.png",
    },
    {
      kana: "り",
      romaji: "ri",
      nb: 39,
      selected: false,
      img: "/assets/hiraganas/ri.png",
    },
    {
      kana: "る",
      romaji: "ru",
      nb: 40,
      selected: false,
      img: "/assets/hiraganas/ru.png",
    },
    {
      kana: "れ",
      romaji: "re",
      nb: 41,
      selected: false,
      img: "/assets/hiraganas/re.png",
    },
    {
      kana: "ろ",
      romaji: "ro",
      nb: 42,
      selected: false,
      img: "/assets/hiraganas/ro.png",
    },
    {
      kana: "わ",
      romaji: "wa",
      nb: 43,
      selected: false,
      img: "/assets/hiraganas/wa.png",
    },
    {
      kana: "を",
      romaji: "wo",
      nb: 44,
      selected: false,
      img: "/assets/hiraganas/wo.png",
    },
    {
      kana: "ん",
      romaji: "n",
      nb: 45,
      selected: false,
      img: "/assets/hiraganas/n.png",
    },
    {
      kana: "きゃ",
      romaji: "kya",
      nb: 46,
      combi: true,
      selected: false,
    },
    {
      kana: "きゅ",
      romaji: "kyu",
      nb: 47,
      combi: true,
      selected: false,
    },
    {
      kana: "きょ",
      romaji: "kyo",
      nb: 48,
      combi: true,
      selected: false,
    },
    {
      kana: "しゃ",
      romaji: "sha",
      nb: 49,
      combi: true,
      selected: false,
    },
    {
      kana: "しゅ",
      romaji: "shu",
      nb: 50,
      combi: true,
      selected: false,
    },
    {
      kana: "しょ",
      romaji: "sho",
      nb: 51,
      combi: true,
      selected: false,
    },
    {
      kana: "ちゃ",
      romaji: "cha",
      nb: 52,
      combi: true,
      selected: false,
    },
    {
      kana: "ちゅ",
      romaji: "chu",
      nb: 53,
      combi: true,
      selected: false,
    },
    {
      kana: "ちょ",
      romaji: "cho",
      nb: 54,
      combi: true,
      selected: false,
    },
    {
      kana: "にゃ",
      romaji: "nya",
      nb: 55,
      combi: true,
      selected: false,
    },
    {
      kana: "にゅ",
      romaji: "nyu",
      nb: 56,
      combi: true,
      selected: false,
    },
    {
      kana: "にょ",
      romaji: "nyo",
      nb: 57,
      combi: true,
      selected: false,
    },
    {
      kana: "ひゃ",
      romaji: "hya",
      nb: 58,
      combi: true,
      selected: false,
    },
    {
      kana: "ひゅ",
      romaji: "hyu",
      nb: 59,
      combi: true,
      selected: false,
    },
    {
      kana: "ひょ",
      romaji: "hyo",
      nb: 60,
      combi: true,
      selected: false,
    },
    {
      kana: "みゃ",
      romaji: "mya",
      nb: 61,
      combi: true,
      selected: false,
    },
    {
      kana: "みゅ",
      romaji: "myu",
      nb: 62,
      combi: true,
      selected: false,
    },
    {
      kana: "みょ",
      romaji: "myo",
      nb: 63,
      combi: true,
      selected: false,
    },
    {
      kana: "りゃ",
      romaji: "rya",
      nb: 64,
      combi: true,
      selected: false,
    },
    {
      kana: "りゅ",
      romaji: "ryu",
      nb: 65,
      combi: true,
      selected: false,
    },
    {
      kana: "りょ",
      romaji: "ryo",
      nb: 66,
      combi: true,
      selected: false,
    },
    {
      kana: "ぎゃ",
      romaji: "gya",
      nb: 67,
      combi: true,
      selected: false,
    },
    {
      kana: "ぎゅ",
      romaji: "gyu",
      nb: 68,
      combi: true,
      selected: false,
    },
    {
      kana: "ぎょ",
      romaji: "gyo",
      nb: 69,
      combi: true,
      selected: false,
    },
    {
      kana: "じゃ",
      romaji: "ja",
      nb: 70,
      combi: true,
      selected: false,
    },
    {
      kana: "じゅ",
      romaji: "ju",
      nb: 71,
      combi: true,
      selected: false,
    },
    {
      kana: "じょ",
      romaji: "jo",
      nb: 72,
      combi: true,
      selected: false,
    },
    {
      kana: "びゃ",
      romaji: "bya",
      nb: 73,
      combi: true,
      selected: false,
    },
    {
      kana: "びゅ",
      romaji: "byu",
      nb: 74,
      combi: true,
      selected: false,
    },
    {
      kana: "びょ",
      romaji: "byo",
      nb: 75,
      combi: true,
      selected: false,
    },
    {
      kana: "ぴゃ",
      romaji: "pya",
      nb: 76,
      combi: true,
      selected: false,
    },
    {
      kana: "ぴゅ",
      romaji: "pyu",
      nb: 77,
      combi: true,
      selected: false,
    },
    {
      kana: "ぴょ",
      romaji: "pyo",
      nb: 78,
      combi: true,
      selected: false,
    },
    {
      kana: "ぢゃ",
      romaji: "ja",
      nb: 79,
      combi: true,
      selected: false,
    },
    {
      kana: "ぢゅ",
      romaji: "ju",
      nb: 80,
      combi: true,
      selected: false,
    },
    {
      kana: "ぢょ",
      romaji: "jo",
      nb: 81,
      combi: true,
      selected: false,
    },
    { kana: "が", romaji: "ga", nb: 82, selected: false, dakuten: true },
    { kana: "ぎ", romaji: "gi", nb: 83, selected: false, dakuten: true },
    { kana: "ぐ", romaji: "gu", nb: 84, selected: false, dakuten: true },
    { kana: "げ", romaji: "ge", nb: 85, selected: false, dakuten: true },
    { kana: "ご", romaji: "go", nb: 86, selected: false, dakuten: true },
    { kana: "ざ", romaji: "za", nb: 87, selected: false, dakuten: true },
    { kana: "じ", romaji: "ji", nb: 88, selected: false, dakuten: true },
    { kana: "ず", romaji: "zu", nb: 89, selected: false, dakuten: true },
    { kana: "ぜ", romaji: "ze", nb: 90, selected: false, dakuten: true },
    { kana: "ぞ", romaji: "zo", nb: 91, selected: false, dakuten: true },
    { kana: "だ", romaji: "da", nb: 92, selected: false, dakuten: true },
    { kana: "ぢ", romaji: "ji", nb: 93, selected: false, dakuten: true },
    { kana: "づ", romaji: "zu", nb: 94, selected: false, dakuten: true },
    { kana: "で", romaji: "de", nb: 95, selected: false, dakuten: true },
    { kana: "ど", romaji: "do", nb: 96, selected: false, dakuten: true },
    { kana: "ば", romaji: "ba", nb: 97, selected: false, dakuten: true },
    { kana: "び", romaji: "bi", nb: 98, selected: false, dakuten: true },
    { kana: "ぶ", romaji: "bu", nb: 99, selected: false, dakuten: true },
    { kana: "べ", romaji: "be", nb: 100, selected: false, dakuten: true },
    { kana: "ぼ", romaji: "bo", nb: 101, selected: false, dakuten: true },
    { kana: "ぱ", romaji: "pa", nb: 102, selected: false, dakuten: true },
    { kana: "ぴ", romaji: "pi", nb: 103, selected: false, dakuten: true },
    { kana: "ぷ", romaji: "pu", nb: 104, selected: false, dakuten: true },
    { kana: "ぺ", romaji: "pe", nb: 105, selected: false, dakuten: true },
    { kana: "ぽ", romaji: "po", nb: 106, selected: false, dakuten: true },
  ],
  listKanasFilters: [{ kana: "あ", romaji: "a", nb: 0, selected: true }],
  listKatakanas: [
    {
      kana: "ア",
      romaji: "a",
      nb: 0,
      selected: false,
      img: "/assets/katakanas/a.jpg",
    },
    {
      kana: "イ",
      romaji: "i",
      nb: 1,
      selected: false,
      img: "/assets/katakanas/i.jpg",
    },
    {
      kana: "ウ",
      romaji: "u",
      nb: 2,
      selected: false,
      img: "/assets/katakanas/u.jpg",
    },
    {
      kana: "エ",
      romaji: "e",
      nb: 3,
      selected: false,
      img: "/assets/katakanas/e.jpg",
    },
    {
      kana: "オ",
      romaji: "o",
      nb: 4,
      selected: false,
      img: "/assets/katakanas/o.jpg",
    },
    {
      kana: "カ",
      romaji: "ka",
      nb: 5,
      selected: false,
      img: "/assets/katakanas/ka.jpg",
    },
    {
      kana: "キ",
      romaji: "ki",
      nb: 6,
      selected: false,
      img: "/assets/katakanas/ki.jpg",
    },
    {
      kana: "ク",
      romaji: "ku",
      nb: 7,
      selected: false,
      img: "/assets/katakanas/ku.jpg",
    },
    {
      kana: "ケ",
      romaji: "ke",
      nb: 8,
      selected: false,
      img: "/assets/katakanas/ke.jpg",
    },
    {
      kana: "コ",
      romaji: "ko",
      nb: 9,
      selected: false,
      img: "/assets/katakanas/ko.jpg",
    },
    {
      kana: "サ",
      romaji: "sa",
      nb: 10,
      selected: false,
      img: "/assets/katakanas/sa.jpg",
    },
    {
      kana: "シ",
      romaji: "shi",
      nb: 11,
      selected: false,
      img: "/assets/katakanas/shi.jpg",
    },
    {
      kana: "ス",
      romaji: "su",
      nb: 12,
      selected: false,
      img: "/assets/katakanas/su.jpg",
    },
    {
      kana: "セ",
      romaji: "se",
      nb: 13,
      selected: false,
      img: "/assets/katakanas/se.jpg",
    },
    {
      kana: "ソ",
      romaji: "so",
      nb: 14,
      selected: false,
      img: "/assets/katakanas/so.jpg",
    },
    {
      kana: "タ",
      romaji: "ta",
      nb: 15,
      selected: false,
      img: "/assets/katakanas/ta.jpg",
    },
    {
      kana: "チ",
      romaji: "chi",
      nb: 16,
      selected: false,
      img: "/assets/katakanas/chi.jpg",
    },
    {
      kana: "ツ",
      romaji: "tsu",
      nb: 17,
      selected: false,
      img: "/assets/katakanas/tsu.jpg",
    },
    {
      kana: "テ",
      romaji: "te",
      nb: 18,
      selected: false,
      img: "/assets/katakanas/te.jpg",
    },
    {
      kana: "ト",
      romaji: "to",
      nb: 19,
      selected: false,
      img: "/assets/katakanas/to.jpg",
    },
    {
      kana: "ナ",
      romaji: "na",
      nb: 20,
      selected: false,
      img: "/assets/katakanas/na.jpg",
    },
    {
      kana: "ニ",
      romaji: "ni",
      nb: 21,
      selected: false,
      img: "/assets/katakanas/ni.jpg",
    },
    {
      kana: "ヌ",
      romaji: "nu",
      nb: 22,
      selected: false,
      img: "/assets/katakanas/nu.jpg",
    },
    {
      kana: "ネ",
      romaji: "ne",
      nb: 23,
      selected: false,
      img: "/assets/katakanas/ne.jpg",
    },
    {
      kana: "ノ",
      romaji: "no",
      nb: 24,
      selected: false,
      img: "/assets/katakanas/no.jpg",
    },
    {
      kana: "ハ",
      romaji: "ha",
      nb: 25,
      selected: false,
      img: "/assets/katakanas/ha.jpg",
    },
    {
      kana: "ヒ",
      romaji: "hi",
      nb: 26,
      selected: false,
      img: "/assets/katakanas/hi.jpg",
    },
    {
      kana: "フ",
      romaji: "fu",
      nb: 27,
      selected: false,
      img: "/assets/katakanas/fu.jpg",
    },
    {
      kana: "ヘ",
      romaji: "he",
      nb: 28,
      selected: false,
      img: "/assets/katakanas/he.jpg",
    },
    {
      kana: "ホ",
      romaji: "ho",
      nb: 29,
      selected: false,
      img: "/assets/katakanas/ho.jpg",
    },
    {
      kana: "マ",
      romaji: "ma",
      nb: 30,
      selected: false,
      img: "/assets/katakanas/ma.jpg",
    },
    {
      kana: "ミ",
      romaji: "mi",
      nb: 31,
      selected: false,
      img: "/assets/katakanas/mi.jpg",
    },
    {
      kana: "ム",
      romaji: "mu",
      nb: 32,
      selected: false,
      img: "/assets/katakanas/mu.jpg",
    },
    {
      kana: "メ",
      romaji: "me",
      nb: 33,
      selected: false,
      img: "/assets/katakanas/me.jpg",
    },
    {
      kana: "モ",
      romaji: "mo",
      nb: 34,
      selected: false,
      img: "/assets/katakanas/mo.jpg",
    },
    {
      kana: "ヤ",
      romaji: "ya",
      nb: 35,
      selected: false,
      img: "/assets/katakanas/ya.jpg",
    },
    {
      kana: "ユ",
      romaji: "yu",
      nb: 36,
      selected: false,
      img: "/assets/katakanas/yu.jpg",
    },
    {
      kana: "ヨ",
      romaji: "yo",
      nb: 37,
      selected: false,
      img: "/assets/katakanas/yo.jpg",
    },
    {
      kana: "ラ",
      romaji: "ra",
      nb: 38,
      selected: false,
      img: "/assets/katakanas/ra.jpg",
    },
    {
      kana: "リ",
      romaji: "ri",
      nb: 39,
      selected: false,
      img: "/assets/katakanas/ri.jpg",
    },
    {
      kana: "ル",
      romaji: "ru",
      nb: 40,
      selected: false,
      img: "/assets/katakanas/ru.jpg",
    },
    {
      kana: "レ",
      romaji: "re",
      nb: 41,
      selected: false,
      img: "/assets/katakanas/re.jpg",
    },
    {
      kana: "ロ",
      romaji: "ro",
      nb: 42,
      selected: false,
      img: "/assets/katakanas/ro.jpg",
    },
    {
      kana: "ワ",
      romaji: "wa",
      nb: 43,
      selected: false,
      img: "/assets/katakanas/wa.jpg",
    },
    {
      kana: "ヲ",
      romaji: "wo",
      nb: 44,
      selected: false,
      img: "/assets/katakanas/wo.jpg",
    },
    {
      kana: "ン",
      romaji: "n",
      nb: 45,
      selected: false,
      img: "/assets/katakanas/n.jpg",
    },
    {
      kana: "キャ",
      romaji: "kya",
      nb: 46,
      combi: true,
      selected: false,
    },
    {
      kana: "キュ",
      romaji: "kyu",
      nb: 47,
      combi: true,
      selected: false,
    },
    {
      kana: "キョ",
      romaji: "kyo",
      nb: 48,
      combi: true,
      selected: false,
    },
    {
      kana: "シャ",
      romaji: "sha",
      nb: 49,
      combi: true,
      selected: false,
    },
    {
      kana: "シュ",
      romaji: "shu",
      nb: 50,
      combi: true,
      selected: false,
    },
    {
      kana: "ショ",
      romaji: "sho",
      nb: 51,
      combi: true,
      selected: false,
    },
    {
      kana: "チャ",
      romaji: "cha",
      nb: 52,
      combi: true,
      selected: false,
    },
    {
      kana: "チュ",
      romaji: "chu",
      nb: 53,
      combi: true,
      selected: false,
    },
    {
      kana: "チョ",
      romaji: "cho",
      nb: 54,
      combi: true,
      selected: false,
    },
    {
      kana: "ニャ",
      romaji: "nya",
      nb: 55,
      combi: true,
      selected: false,
    },
    {
      kana: "ニュ",
      romaji: "nyu",
      nb: 56,
      combi: true,
      selected: false,
    },
    {
      kana: "ニョ",
      romaji: "nyo",
      nb: 57,
      combi: true,
      selected: false,
    },
    {
      kana: "ヒャ",
      romaji: "hya",
      nb: 58,
      combi: true,
      selected: false,
    },
    {
      kana: "ヒュ",
      romaji: "hyu",
      nb: 59,
      combi: true,
      selected: false,
    },
    {
      kana: "ヒョ",
      romaji: "hyo",
      nb: 60,
      combi: true,
      selected: false,
    },
    {
      kana: "ミャ",
      romaji: "mya",
      nb: 61,
      combi: true,
      selected: false,
    },
    {
      kana: "ミュ",
      romaji: "myu",
      nb: 62,
      combi: true,
      selected: false,
    },
    {
      kana: "ミョ",
      romaji: "myo",
      nb: 63,
      combi: true,
      selected: false,
    },
    {
      kana: "リャ",
      romaji: "rya",
      nb: 64,
      combi: true,
      selected: false,
    },
    {
      kana: "リュ",
      romaji: "ryu",
      nb: 65,
      combi: true,
      selected: false,
    },
    {
      kana: "リョ",
      romaji: "ryo",
      nb: 66,
      combi: true,
      selected: false,
    },
    {
      kana: "ギャ",
      romaji: "gya",
      nb: 67,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ギュ",
      romaji: "gyu",
      nb: 68,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ギョ",
      romaji: "gyo",
      nb: 69,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ジャ",
      romaji: "ja",
      nb: 70,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ジュ",
      romaji: "ju",
      nb: 71,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ジョ",
      romaji: "jo",
      nb: 72,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ビャ",
      romaji: "bya",
      nb: 73,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ビュ",
      romaji: "byu",
      nb: 74,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ビョ",
      romaji: "byo",
      nb: 75,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ピャ",
      romaji: "pya",
      nb: 76,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ピュ",
      romaji: "pyu",
      nb: 77,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ピョ",
      romaji: "pyo",
      nb: 78,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ヂャ",
      romaji: "ja",
      nb: 79,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ヂュ",
      romaji: "ju",
      nb: 80,
      combi: true,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ヂョ",
      romaji: "jo",
      nb: 81,
      combi: true,
      dakuten: true,
      selected: false,
    },

    {
      kana: "ガ",
      romaji: "ga",
      nb: 82,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ギ",
      romaji: "gi",
      nb: 83,
      dakuten: true,
      selected: false,
    },
    {
      kana: "グ",
      romaji: "gu",
      nb: 84,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ゲ",
      romaji: "ge",
      nb: 85,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ゴ",
      romaji: "go",
      nb: 86,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ザ",
      romaji: "za",
      nb: 87,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ジ",
      romaji: "ji",
      nb: 88,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ズ",
      romaji: "zu",
      nb: 89,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ゼ",
      romaji: "ze",
      nb: 90,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ゾ",
      romaji: "zo",
      nb: 91,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ダ",
      romaji: "da",
      nb: 92,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ヂ",
      romaji: "ji",
      nb: 93,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ヅ",
      romaji: "zu",
      nb: 94,
      dakuten: true,
      selected: false,
    },
    {
      kana: "デ",
      romaji: "de",
      nb: 95,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ド",
      romaji: "do",
      nb: 96,
      dakuten: true,
      selected: false,
    },
    {
      kana: "バ",
      romaji: "ba",
      nb: 97,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ビ",
      romaji: "bi",
      nb: 98,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ブ",
      romaji: "bu",
      nb: 99,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ベ",
      romaji: "be",
      nb: 100,
      dakuten: true,
      selected: false,
    },
    {
      kana: "ボ",
      romaji: "bo",
      nb: 101,
      dakuten: true,
      selected: false,
    },
    { kana: "パ", romaji: "pa", nb: 102, dakuten: true, selected: false },
    { kana: "ピ", romaji: "pi", nb: 103, dakuten: true, selected: false },
    { kana: "プ", romaji: "pu", nb: 104, dakuten: true, selected: false },
    { kana: "ペ", romaji: "pe", nb: 105, dakuten: true, selected: false },
    { kana: "ポ", romaji: "po", nb: 106, dakuten: true, selected: false },
  ],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    rndCard: (state) => {
      state.InitNbCard = Math.floor(
        Math.random() *
          state.listHiraganas
            .concat(state.listKatakanas)
            .filter((e) => e.selected === true).length
      );
      state.listKanasFilters = state.listHiraganas.filter((e) => {
        return e.selected === true;
      });
    },
    togglefilters: (state) => {
      state.displayfilters = !state.displayfilters;
    },
    flipCard: (state) => {
      state.rectoVerso = !state.rectoVerso;
    },
    toggleSubFilters: (state, { payload }) => {
      switch (payload) {
        case "toggleFilterHiraganas":
          state.toggleFilterHiraganas = !state.toggleFilterHiraganas;
          state.toggleFilterKatakanas = false;
          break;
        case "toggleFilterHiraganasCombis":
          state.toggleFilterHiraganasCombis =
            !state.toggleFilterHiraganasCombis;
          break;
        case "toggleFilterKatakanas":
          state.toggleFilterKatakanas = !state.toggleFilterKatakanas;
          state.toggleFilterHiraganas = false;
          break;
        case "toggleFilterKatakanasCombis":
          state.toggleFilterKatakanasCombis =
            !state.toggleFilterKatakanasCombis;
          break;
        case "toggleGramCombis":
          state.toggleGramCombis = !state.toggleGramCombis;
          state.toggleGramModifs = false;
          break;
        case "toggleGramModifs":
          state.toggleGramModifs = !state.toggleGramModifs;
          state.toggleGramCombis = false;
          break;
        default:
          console.log("Today is not Sunday, Monday, Tuesday, or Wednesday");
      }

      state.payload = !state.payload;
      console.log(state.payload);
      console.log(payload);
    },
    resetToRecto: (state) => {
      state.rectoVerso = true;
    },
    selectedToggleKanaFilter: (state, { payload }) => {
      state.listHiraganas[
        state.listHiraganas.findIndex((el) => el.nb === payload.nb)
      ].selected =
        !state.listHiraganas[
          state.listHiraganas.findIndex((el) => el.nb === payload.nb)
        ].selected;
    },
    selectedToggleKatakanasFilter: (state, { payload }) => {
      state.listKatakanas[
        state.listKatakanas.findIndex((el) => el.nb === payload.nb)
      ].selected =
        !state.listKatakanas[
          state.listKatakanas.findIndex((el) => el.nb === payload.nb)
        ].selected;
    },
    selectedToggleHiraganasCombis: (state) => {
      state.toggleFilterHiraganasCombis = !state.toggleFilterHiraganasCombis;
      if (state.toggleFilterHiraganasCombis === false) {
        state.listHiraganas
          .filter((e) => e.combi === true)
          .filter((e) => e.dakuten !== true)
          .map((a) => (a.selected = state.toggleFilterHiraganasCombis));
      } else {
        state.listHiraganas
          .filter((e) => e.combi === true)
          .map((a) => (a.selected = state.toggleFilterHiraganasCombis));
      }
    },
    selectedToggleKatakanasCombis: (state) => {
      state.toggleFilterKatakanasCombis = !state.toggleFilterKatakanasCombis;
      if (state.toggleFilterKatakanasDakuten === false) {
        state.listKatakanas
          .filter((e) => e.combi === true)
          .filter((e) => e.dakuten !== true)
          .map((a) => (a.selected = state.toggleFilterKatakanasCombis));
      } else {
        state.listKatakanas
          .filter((e) => e.combi === true)
          .map((a) => (a.selected = state.toggleFilterKatakanasCombis));
      }
    },

    selectedToggleHiraganasDakuten: (state) => {
      state.toggleFilterHiraganasDakuten = !state.toggleFilterHiraganasDakuten;
      if (state.toggleFilterHiraganasCombis === false) {
        state.listHiraganas
          .filter((e) => e.dakuten === true)
          .filter((e) => e.combi !== true)
          .map((a) => (a.selected = state.toggleFilterHiraganasDakuten));
      } else {
        state.listHiraganas
          .filter((e) => e.dakuten === true)
          .map((a) => (a.selected = state.toggleFilterHiraganasDakuten));
      }
    },

    selectedToggleKatakanasDakuten: (state) => {
      state.toggleFilterKatakanasDakuten = !state.toggleFilterKatakanasDakuten;
      if (state.toggleFilterKatakanasCombis === false) {
        state.listKatakanas
          .filter((e) => e.dakuten === true)
          .filter((e) => e.combi !== true)
          .map((a) => (a.selected = state.toggleFilterKatakanasDakuten));
      } else {
        state.listKatakanas
          .filter((e) => e.dakuten === true)
          .map((a) => (a.selected = state.toggleFilterKatakanasDakuten));
      }
    },
    selectedToggleAll: (state, { payload }) => {
      state.listHiraganas
        .filter((e) => e.combi !== true)
        .filter((e) => e.dakuten !== true)
        .map((a) => (a.selected = payload));
    },
    selectedToggleAllKatakanas: (state, { payload }) => {
      state.listKatakanas
        .filter((e) => e.combi !== true)
        .filter((e) => e.dakuten !== true)
        .map((a) => (a.selected = payload));
    },
  },
});

export const {
  rndCard,
  rndRectoVerso,
  flipCard,
  togglefilters,
  invertInfinite,
  resetToRecto,
  selectedToggleKanaFilter,
  selectedToggleAll,
  toggleSubFilters,
  selectedToggleHiraganasCombis,
  selectedToggleHiraganasDakuten,
  selectedToggleKatakanasCombis,
  selectedToggleKatakanasDakuten,
  toggleFilterHiraganasDakuten,
  toggleFilterKatakanasDakuten,
  listKatakanas,
  selectedToggleKatakanasFilter,
  selectedToggleAllKatakanas,
} = cardSlice.actions;

export default cardSlice.reducer;
