import { configureStore } from "@reduxjs/toolkit";
import { coinsReducer } from "./coins-slice";

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});
