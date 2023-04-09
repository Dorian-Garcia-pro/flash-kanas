import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  InitNbCard: 0,
  rectoVerso: true,
  infiniteMode: true,
  displayfilters: false,
  toggleFilterHiraganas: false,
  toggleFilterHiraganasCombis: false,
  toggleFilterHiraganasDakuten: false,
  toggleFilterKatakanas: false,
  toggleFilterKatakanasCombis: false,
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
    toggleSubFilters: (state, { payload }) => {
      switch (payload) {
        case "toggleFilterHiraganas":
          state.toggleFilterHiraganas = !state.toggleFilterHiraganas;
          break;
        case "toggleFilterHiraganasCombis":
          state.toggleFilterHiraganasCombis =
            !state.toggleFilterHiraganasCombis;
          break;
        case "toggleFilterKatakanas":
          state.toggleFilterKatakanas = !state.toggleFilterKatakanas;
          break;
        case "toggleFilterKatakanasCombis":
          state.toggleFilterKatakanasCombis =
            !state.toggleFilterKatakanasCombis;
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
    selectedToggleHiraganasCombis: (state) => {
      state.listHiraganas
        .filter((e) => e.combi === true)
        .map((a) => (a.selected = !a.selected));
      state.toggleFilterHiraganasCombis = !state.toggleFilterHiraganasCombis;
    },
    selectedToggleHiraganasDakuten: (state) => {
      state.listHiraganas
        .filter((e) => e.dakuten === true)
        .map((a) => (a.selected = !a.selected));
      state.toggleFilterHiraganasDakuten = !state.toggleFilterHiraganasDakuten;
    },
    selectedToggleAll: (state, { payload }) => {
      state.listHiraganas
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
  toggleFilterHiraganasDakuten,
} = cardSlice.actions;

export default cardSlice.reducer;
