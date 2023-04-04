import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  InitNbCard: 0,
  rectoVerso: 0,
  infiniteMode: true,
  isFlipped: 0,
  listHiraganas : [
    { kana: "あ", romaji: "a", nb: 0 },
    { kana: "い", romaji: "i", nb: 1 },
    { kana: "う", romaji: "u", nb: 2 },
    { kana: "え", romaji: "e", nb: 3 },
    { kana: "お", romaji: "o", nb: 4 },
    { kana: "か", romaji: "ka", nb: 5 },
    { kana: "き", romaji: "ki", nb: 6 },
    { kana: "く", romaji: "ku", nb: 7 },
    { kana: "け", romaji: "ke", nb: 8 },
    { kana: "こ", romaji: "ko", nb: 9 },
    { kana: "さ", romaji: "sa", nb: 10 },
    { kana: "し", romaji: "shi", nb: 11 },
    { kana: "す", romaji: "su", nb: 12 },
    { kana: "せ", romaji: "se", nb: 13 },
    { kana: "そ", romaji: "so", nb: 14 },
    { kana: "た", romaji: "ta", nb: 15 },
    { kana: "ち", romaji: "chi", nb: 16 },
    { kana: "つ", romaji: "tsu", nb: 17 },
    { kana: "て", romaji: "te", nb: 18 },
    { kana: "と", romaji: "to", nb: 19 },
    { kana: "な", romaji: "na", nb: 20 },
    { kana: "に", romaji: "ni", nb: 21 },
    { kana: "ぬ", romaji: "nu", nb: 22 },
    { kana: "ね", romaji: "ne", nb: 23 },
    { kana: "の", romaji: "no", nb: 24 },
    { kana: "は", romaji: "ha", nb: 25 },
    { kana: "ひ", romaji: "hi", nb: 26 },
    { kana: "ふ", romaji: "fu", nb: 27 },
    { kana: "へ", romaji: "he", nb: 28 },
    { kana: "ほ", romaji: "ho", nb: 29 },
    { kana: "ま", romaji: "ma", nb: 30 },
    { kana: "み", romaji: "mi", nb: 31 },
    { kana: "む", romaji: "mu", nb: 32 },
    { kana: "め", romaji: "me", nb: 33 },
    { kana: "も", romaji: "mo", nb: 34 },
    { kana: "や", romaji: "ya", nb: 35 },
    { kana: "ゆ", romaji: "yu", nb: 36 },
    { kana: "よ", romaji: "yo", nb: 37 },
    { kana: "ら", romaji: "ra", nb: 38 },
    { kana: "り", romaji: "ri", nb: 39 },
    { kana: "る", romaji: "ru", nb: 40 },
    { kana: "れ", romaji: "re", nb: 41 },
    { kana: "ろ", romaji: "ro", nb: 42 },
    { kana: "わ", romaji: "wa", nb: 43 },
    { kana: "を", romaji: "wo", nb: 44 },
    { kana: "ん", romaji: "n", nb: 45 },
    { kana: "きゃ", romaji: "kya", nb: 46 },
    { kana: "きゅ", romaji: "kyu", nb: 47 },
    { kana: "きょ", romaji: "kyo", nb: 48 },
    { kana: "しゃ", romaji: "sha", nb: 49 },
    { kana: "しゅ", romaji: "shu", nb: 50 },
    { kana: "しょ", romaji: "sho", nb: 51 },
    { kana: "ちゃ", romaji: "cha", nb: 52 },
    { kana: "ちゅ", romaji: "chu", nb: 53 },
    { kana: "ちょ", romaji: "cho", nb: 54 },
    { kana: "にゃ", romaji: "nya", nb: 55 },
    { kana: "にゅ", romaji: "nyu", nb: 56 },
    { kana: "にょ", romaji: "nyo", nb: 57 },
    { kana: "ひゃ", romaji: "hya", nb: 58 },
    { kana: "ひゅ", romaji: "hyu", nb: 59 },
    { kana: "ひょ", romaji: "hyo", nb: 60 },
    { kana: "みゃ", romaji: "mya", nb: 61 },
    { kana: "みゅ", romaji: "myu", nb: 62 },
    { kana: "みょ", romaji: "myo", nb: 63 },
    { kana: "りゃ", romaji: "rya", nb: 64 },
    { kana: "りゅ", romaji: "ryu", nb: 65 },
    { kana: "りょ", romaji: "ryo", nb: 66 },
    { kana: "ぎゃ", romaji: "gya", nb: 67 },
    { kana: "ぎゅ", romaji: "gyu", nb: 68 },
    { kana: "ぎょ", romaji: "gyo", nb: 69 },
    { kana: "じゃ", romaji: "ja", nb: 70 },
    { kana: "じゅ", romaji: "ju", nb: 71 },
    { kana: "じょ", romaji: "jo", nb: 72 },
    { kana: "びゃ", romaji: "bya", nb: 73 },
    { kana: "びゅ", romaji: "byu", nb: 74 },
    { kana: "びょ", romaji: "byo", nb: 75 },
    { kana: "ぴゃ", romaji: "pya", nb: 76 },
    { kana: "ぴゅ", romaji: "pyu", nb: 77 },
    { kana: "ぴょ", romaji: "pyo", nb: 78 },
    { kana: "ぢゃ", romaji: "ja", nb: 79 },
    { kana: "ぢゅ", romaji: "ju", nb: 80 },
    { kana: "ぢょ", romaji: "jo", nb: 81 }
  ]
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    rndCard: (state) => {
      state.InitNbCard = Math.floor(Math.random() * state.listHiraganas.length);
    },
    rndRectoVerso: (state) => {
      state.rectoVerso = Math.floor(Math.random() * 2)
    },
    flipCard: (state) => {
      state.rectoVerso = !state.rectoVerso
    },
    invertInfinite: (state) => {
      state.infiniteMode = !state.infiniteMode
    }
  }
});

/* console.log(cardSlice) */

export const {rndCard, rndRectoVerso, flipCard, invertInfinite} = cardSlice.actions;

export default cardSlice.reducer

