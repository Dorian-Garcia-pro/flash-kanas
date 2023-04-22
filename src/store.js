import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";
import quizReducer from "./quizSlice";

const store = configureStore({
  reducer: { card: cardReducer, quiz: quizReducer },
});

export default store;
