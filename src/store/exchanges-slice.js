import { createSlice } from "@reduxjs/toolkit";

const exchangesSlice = createSlice({
  name: "Exchanges List",
  initialState: {
    data: [],
    isFetching: undefined,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    startFetching: (state) => {
      state.isFetching = true;
    },
    stopFetching: (state) => {
      state.isFetching = false;
    },
  },
});

export const fethcExchanges = () => {
  return async (dispatch) => {
    dispatch(exchangesActions.startFetching());

    const sendRequest = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/exchanges/"
      );

      if (!response.ok)
        throw new Error("something went wrong when fetching exchanges");

      const data = await response.json();

      dispatch(exchangesActions.setData(data));
    };

    sendRequest()
      .then(() => {
        dispatch(exchangesActions.stopFetching());
      })
      .catch((error) => console.log(error));
  };
};

export const exchangesActions = exchangesSlice.actions;
export const exchangesReducer = exchangesSlice.reducer;
