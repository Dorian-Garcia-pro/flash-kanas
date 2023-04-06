import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  InitNbCard: 0,
  rectoVerso: true,
  infiniteMode: true,
  displayfilters: true,
  listHiraganas: [
    { kana: "あ", romaji: "a", nb: 0, selected: true },
    { kana: "い", romaji: "i", nb: 1, selected: true },
    { kana: "う", romaji: "u", nb: 2, selected: true },
    { kana: "え", romaji: "e", nb: 3, selected: true },
    { kana: "お", romaji: "o", nb: 4, selected: true },
    { kana: "か", romaji: "ka", nb: 5, selected: true },
    { kana: "き", romaji: "ki", nb: 6, selected: false },
    { kana: "く", romaji: "ku", nb: 7, selected: false },
    { kana: "け", romaji: "ke", nb: 8, selected: false },
    { kana: "こ", romaji: "ko", nb: 9, selected: false },
    { kana: "さ", romaji: "sa", nb: 10, selected: false },
    { kana: "し", romaji: "shi", nb: 11, selected: false },
    { kana: "す", romaji: "su", nb: 12, selected: false },
    { kana: "せ", romaji: "se", nb: 13, selected: false },
    { kana: "そ", romaji: "so", nb: 14, selected: false },
    { kana: "た", romaji: "ta", nb: 15, selected: false },
    { kana: "ち", romaji: "chi", nb: 16, selected: false },
    { kana: "つ", romaji: "tsu", nb: 17, selected: false },
    { kana: "て", romaji: "te", nb: 18, selected: false },
    { kana: "と", romaji: "to", nb: 19, selected: false },
    { kana: "な", romaji: "na", nb: 20, selected: false },
    { kana: "に", romaji: "ni", nb: 21, selected: false },
    { kana: "ぬ", romaji: "nu", nb: 22, selected: false },
    { kana: "ね", romaji: "ne", nb: 23, selected: false },
    { kana: "の", romaji: "no", nb: 24, selected: false },
    { kana: "は", romaji: "ha", nb: 25, selected: false },
    { kana: "ひ", romaji: "hi", nb: 26, selected: false },
    { kana: "ふ", romaji: "fu", nb: 27, selected: false },
    { kana: "へ", romaji: "he", nb: 28, selected: false },
    { kana: "ほ", romaji: "ho", nb: 29, selected: false },
    { kana: "ま", romaji: "ma", nb: 30, selected: false },
    { kana: "み", romaji: "mi", nb: 31, selected: false },
    { kana: "む", romaji: "mu", nb: 32, selected: false },
    { kana: "め", romaji: "me", nb: 33, selected: false },
    { kana: "も", romaji: "mo", nb: 34, selected: false },
    { kana: "や", romaji: "ya", nb: 35, selected: false },
    { kana: "ゆ", romaji: "yu", nb: 36, selected: false },
    { kana: "よ", romaji: "yo", nb: 37, selected: false },
    { kana: "ら", romaji: "ra", nb: 38, selected: false },
    { kana: "り", romaji: "ri", nb: 39, selected: false },
    { kana: "る", romaji: "ru", nb: 40, selected: false },
    { kana: "れ", romaji: "re", nb: 41, selected: false },
    { kana: "ろ", romaji: "ro", nb: 42, selected: false },
    { kana: "わ", romaji: "wa", nb: 43, selected: false },
    { kana: "を", romaji: "wo", nb: 44, selected: false },
    { kana: "ん", romaji: "n", nb: 45, selected: false },
    /*     { kana: "きゃ", romaji: "kya", nb: 46, cat:"combinaisons",selected: false },
    { kana: "きゅ", romaji: "kyu", nb: 47, cat:"combinaisons",selected: false },
    { kana: "きょ", romaji: "kyo", nb: 48, cat:"combinaisons",selected: false },
    { kana: "しゃ", romaji: "sha", nb: 49, cat:"combinaisons",selected: false },
    { kana: "しゅ", romaji: "shu", nb: 50, cat:"combinaisons",selected: false },
    { kana: "しょ", romaji: "sho", nb: 51, cat:"combinaisons",selected: false },
    { kana: "ちゃ", romaji: "cha", nb: 52, cat:"combinaisons",selected: false },
    { kana: "ちゅ", romaji: "chu", nb: 53, cat:"combinaisons",selected: false },
    { kana: "ちょ", romaji: "cho", nb: 54, cat:"combinaisons",selected: false },
    { kana: "にゃ", romaji: "nya", nb: 55, cat:"combinaisons",selected: false },
    { kana: "にゅ", romaji: "nyu", nb: 56, cat:"combinaisons",selected: false },
    { kana: "にょ", romaji: "nyo", nb: 57, cat:"combinaisons",selected: false },
    { kana: "ひゃ", romaji: "hya", nb: 58, cat:"combinaisons",selected: false },
    { kana: "ひゅ", romaji: "hyu", nb: 59, cat:"combinaisons",selected: false },
    { kana: "ひょ", romaji: "hyo", nb: 60, cat:"combinaisons",selected: false },
    { kana: "みゃ", romaji: "mya", nb: 61, cat:"combinaisons",selected: false },
    { kana: "みゅ", romaji: "myu", nb: 62, cat:"combinaisons",selected: false },
    { kana: "みょ", romaji: "myo", nb: 63, cat:"combinaisons",selected: false },
    { kana: "りゃ", romaji: "rya", nb: 64, cat:"combinaisons",selected: false },
    { kana: "りゅ", romaji: "ryu", nb: 65, cat:"combinaisons",selected: false },
    { kana: "りょ", romaji: "ryo", nb: 66, cat:"combinaisons",selected: false },
    { kana: "ぎゃ", romaji: "gya", nb: 67, cat:"combinaisons",selected: false },
    { kana: "ぎゅ", romaji: "gyu", nb: 68, cat:"combinaisons",selected: false },
    { kana: "ぎょ", romaji: "gyo", nb: 69, cat:"combinaisons",selected: false },
    { kana: "じゃ", romaji: "ja", nb: 70, cat:"combinaisons",selected: false },
    { kana: "じゅ", romaji: "ju", nb: 71, cat:"combinaisons",selected: false },
    { kana: "じょ", romaji: "jo", nb: 72, cat:"combinaisons",selected: false },
    { kana: "びゃ", romaji: "bya", nb: 73, cat:"combinaisons",selected: false },
    { kana: "びゅ", romaji: "byu", nb: 74, cat:"combinaisons",selected: false },
    { kana: "びょ", romaji: "byo", nb: 75, cat:"combinaisons",selected: false },
    { kana: "ぴゃ", romaji: "pya", nb: 76, cat:"combinaisons",selected: false },
    { kana: "ぴゅ", romaji: "pyu", nb: 77, cat:"combinaisons",selected: false },
    { kana: "ぴょ", romaji: "pyo", nb: 78, cat:"combinaisons",selected: false },
    { kana: "ぢゃ", romaji: "ja", nb: 79, cat:"combinaisons",selected: false },
    { kana: "ぢゅ", romaji: "ju", nb: 80, cat:"combinaisons",selected: false },
    { kana: "ぢょ", romaji: "jo", nb: 81, cat:"combinaisons",selected: false } */
  ],
  listKanasFilters: [{ kana: "あ", romaji: "a", nb: 0, selected: true }],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    rndCard: (state) => {
      state.InitNbCard = Math.floor(
        Math.random() *
          state.listHiraganas.filter((e) => e.selected === true).length
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
    selectedToggleAll: (state, { payload }) => {
      state.listHiraganas.map((a) => (a.selected = payload));
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
} = cardSlice.actions;

export default cardSlice.reducer;
