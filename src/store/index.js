import { configureStore } from "@reduxjs/toolkit";
import { chartReducer } from "./chart-slice";
import { coinReducer } from "./coin-slice";
import { coinsReducer } from "./coins-slice";

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
    coin: coinReducer,
    chart: chartReducer,
  },
});
