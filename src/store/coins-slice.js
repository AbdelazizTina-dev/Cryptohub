import { createSlice } from "@reduxjs/toolkit";

const coinsSlice = createSlice({
  name: "Coins List",
  initialState: {
    data: {},
    filteredData: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.filteredData = action.payload.coins;
    },
    filterByName: (state, action) => {
      const coinsList = state.data.coins;
      state.filteredData = coinsList.filter((i) =>
        i.name.toLowerCase().startsWith(action.payload.toLowerCase())
      );
    },
    resetFilter: (state) => {
      state.filteredData = state.data.coins
    }
  },
});

export const fetchCoins = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
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
        throw new Error("something went wrong when fetching coins data");

      const data = await response.json();

      dispatch(coinsActions.setData(data.data));
    };

    sendRequest().catch((error) => console.log(error));
  };
};

export const coinsActions = coinsSlice.actions;

export const coinsReducer = coinsSlice.reducer;
