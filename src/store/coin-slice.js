import { createSlice } from "@reduxjs/toolkit";

const coinSlice = createSlice({
  name: "Coin Info",
  initialState: {
    data: {
      //set a prototype object like the response
    },
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const fetchCoin = (uuid) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://coinranking1.p.rapidapi.com/coin/${uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coinranking1.p.rapidapi.com",
            "x-rapidapi-key":
              "883aaf0f7fmsh4282892e27774dap1ff27fjsnc3f21f20f8dd",
          },
        }
      );

      if (!response.ok)
        throw new Error("Something went wrong while fetching coin data");

      const responseData = await response.json();

      dispatch(coinActions.setData(responseData.data.coin));
    };

    sendRequest().catch((error) =>
      console.log("Error from coin thunk: " + error)
    );
  };
};

export const coinActions = coinSlice.actions;

export const coinReducer = coinSlice.reducer;
