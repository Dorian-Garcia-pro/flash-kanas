import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  InitNbCard: 0,
  rectoVerso: true,
  infiniteMode: true,
  listHiraganas : [
    { kana: "あ", romaji: "a", nb: 0, selected: true },
    { kana: "い", romaji: "i", nb: 1, selected: true },
    { kana: "う", romaji: "u", nb: 2, selected: true },
    { kana: "え", romaji: "e", nb: 3, selected: true },
    { kana: "お", romaji: "o", nb: 4, selected: true },
    { kana: "か", romaji: "ka", nb: 5, selected: true },
    { kana: "き", romaji: "ki", nb: 6, selected: true },
    { kana: "く", romaji: "ku", nb: 7, selected: true },
    { kana: "け", romaji: "ke", nb: 8, selected: true },
    { kana: "こ", romaji: "ko", nb: 9, selected: true },
    { kana: "さ", romaji: "sa", nb: 10, selected: true },
    { kana: "し", romaji: "shi", nb: 11, selected: true },
    { kana: "す", romaji: "su", nb: 12, selected: true },
    { kana: "せ", romaji: "se", nb: 13, selected: true },
    { kana: "そ", romaji: "so", nb: 14, selected: true },
    { kana: "た", romaji: "ta", nb: 15, selected: true },
    { kana: "ち", romaji: "chi", nb: 16, selected: true },
    { kana: "つ", romaji: "tsu", nb: 17, selected: true },
    { kana: "て", romaji: "te", nb: 18, selected: true },
    { kana: "と", romaji: "to", nb: 19, selected: true },
    { kana: "な", romaji: "na", nb: 20, selected: true },
    { kana: "に", romaji: "ni", nb: 21, selected: true },
    { kana: "ぬ", romaji: "nu", nb: 22, selected: true },
    { kana: "ね", romaji: "ne", nb: 23, selected: true },
    { kana: "の", romaji: "no", nb: 24, selected: true },
    { kana: "は", romaji: "ha", nb: 25, selected: true },
    { kana: "ひ", romaji: "hi", nb: 26, selected: true },
    { kana: "ふ", romaji: "fu", nb: 27, selected: true },
    { kana: "へ", romaji: "he", nb: 28, selected: true },
    { kana: "ほ", romaji: "ho", nb: 29, selected: true },
    { kana: "ま", romaji: "ma", nb: 30, selected: true },
    { kana: "み", romaji: "mi", nb: 31, selected: true },
    { kana: "む", romaji: "mu", nb: 32, selected: true },
    { kana: "め", romaji: "me", nb: 33, selected: true },
    { kana: "も", romaji: "mo", nb: 34, selected: true },
    { kana: "や", romaji: "ya", nb: 35, selected: true },
    { kana: "ゆ", romaji: "yu", nb: 36, selected: true },
    { kana: "よ", romaji: "yo", nb: 37, selected: true },
    { kana: "ら", romaji: "ra", nb: 38, selected: true },
    { kana: "り", romaji: "ri", nb: 39, selected: true },
    { kana: "る", romaji: "ru", nb: 40, selected: true },
    { kana: "れ", romaji: "re", nb: 41, selected: true },
    { kana: "ろ", romaji: "ro", nb: 42, selected: true },
    { kana: "わ", romaji: "wa", nb: 43, selected: true },
    { kana: "を", romaji: "wo", nb: 44, selected: true },
    { kana: "ん", romaji: "n", nb: 45, selected: true },
    { kana: "きゃ", romaji: "kya", nb: 46, cat:"combinaisons",selected: true },
    { kana: "きゅ", romaji: "kyu", nb: 47, cat:"combinaisons",selected: true },
    { kana: "きょ", romaji: "kyo", nb: 48, cat:"combinaisons",selected: true },
    { kana: "しゃ", romaji: "sha", nb: 49, cat:"combinaisons",selected: true },
    { kana: "しゅ", romaji: "shu", nb: 50, cat:"combinaisons",selected: true },
    { kana: "しょ", romaji: "sho", nb: 51, cat:"combinaisons",selected: true },
    { kana: "ちゃ", romaji: "cha", nb: 52, cat:"combinaisons",selected: true },
    { kana: "ちゅ", romaji: "chu", nb: 53, cat:"combinaisons",selected: true },
    { kana: "ちょ", romaji: "cho", nb: 54, cat:"combinaisons",selected: true },
    { kana: "にゃ", romaji: "nya", nb: 55, cat:"combinaisons",selected: true },
    { kana: "にゅ", romaji: "nyu", nb: 56, cat:"combinaisons",selected: true },
    { kana: "にょ", romaji: "nyo", nb: 57, cat:"combinaisons",selected: true },
    { kana: "ひゃ", romaji: "hya", nb: 58, cat:"combinaisons",selected: true },
    { kana: "ひゅ", romaji: "hyu", nb: 59, cat:"combinaisons",selected: true },
    { kana: "ひょ", romaji: "hyo", nb: 60, cat:"combinaisons",selected: true },
    { kana: "みゃ", romaji: "mya", nb: 61, cat:"combinaisons",selected: true },
    { kana: "みゅ", romaji: "myu", nb: 62, cat:"combinaisons",selected: true },
    { kana: "みょ", romaji: "myo", nb: 63, cat:"combinaisons",selected: true },
    { kana: "りゃ", romaji: "rya", nb: 64, cat:"combinaisons",selected: true },
    { kana: "りゅ", romaji: "ryu", nb: 65, cat:"combinaisons",selected: true },
    { kana: "りょ", romaji: "ryo", nb: 66, cat:"combinaisons",selected: true },
    { kana: "ぎゃ", romaji: "gya", nb: 67, cat:"combinaisons",selected: true },
    { kana: "ぎゅ", romaji: "gyu", nb: 68, cat:"combinaisons",selected: true },
    { kana: "ぎょ", romaji: "gyo", nb: 69, cat:"combinaisons",selected: true },
    { kana: "じゃ", romaji: "ja", nb: 70, cat:"combinaisons",selected: true },
    { kana: "じゅ", romaji: "ju", nb: 71, cat:"combinaisons",selected: true },
    { kana: "じょ", romaji: "jo", nb: 72, cat:"combinaisons",selected: true },
    { kana: "びゃ", romaji: "bya", nb: 73, cat:"combinaisons",selected: true },
    { kana: "びゅ", romaji: "byu", nb: 74, cat:"combinaisons",selected: true },
    { kana: "びょ", romaji: "byo", nb: 75, cat:"combinaisons",selected: true },
    { kana: "ぴゃ", romaji: "pya", nb: 76, cat:"combinaisons",selected: true },
    { kana: "ぴゅ", romaji: "pyu", nb: 77, cat:"combinaisons",selected: true },
    { kana: "ぴょ", romaji: "pyo", nb: 78, cat:"combinaisons",selected: true },
    { kana: "ぢゃ", romaji: "ja", nb: 79, cat:"combinaisons",selected: true },
    { kana: "ぢゅ", romaji: "ju", nb: 80, cat:"combinaisons",selected: true },
    { kana: "ぢょ", romaji: "jo", nb: 81, cat:"combinaisons",selected: true }
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
    },
    resetToRecto: (state) => {
      state.rectoVerso = true
      
    }
  }
});

/* console.log(cardSlice) */

export const {rndCard, rndRectoVerso, flipCard, invertInfinite, resetToRecto} = cardSlice.actions;

export default cardSlice.reducer

