import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "Currency price history chart",
  initialState: {
    change: 0,
    history: [],
  },
  reducers: {
    setData: (state, action) => {
      state.change = action.payload.change;
      state.history = action.payload.history;
    },
  },
});

export const fetchHistory = (uuid, timePeriod) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://coinranking1.p.rapidapi.com/coin/${uuid}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`,
        {
          headers: {
            "x-rapidapi-host": "coinranking1.p.rapidapi.com",
            "x-rapidapi-key":
              "883aaf0f7fmsh4282892e27774dap1ff27fjsnc3f21f20f8dd",
          },
        }
      );

      if (!response.ok)
        throw new Error(
          "Something went wrong while fetching coin price history"
        );

      const data = await response.json();

      dispatch(
        chartActions.setData({
          change: data.data.change,
          history: data.data.history.reverse(),
        })
      );
    };

    sendRequest().catch((error) => console.log(error));
  };
};

export const chartActions = chartSlice.actions;

export const chartReducer = chartSlice.reducer;
