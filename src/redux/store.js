import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "./slice/words";

export const store = configureStore({
  reducer: {
    word: wordsReducer,
  },
});
