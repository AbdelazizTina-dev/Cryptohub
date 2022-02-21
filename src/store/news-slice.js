import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "News List",
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

export const fethcNews = (searchQuery) => {
  return async (dispatch) => {
    dispatch(newsActions.startFetching());

    const sendRequest = async () => {
      const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${searchQuery}&count=40&setLang=EN&originalImg=true&freshness=Day&textFormat=Raw&safeSearch=Strict`, {
        "method": "GET",
        "headers": {
          "x-bingapis-sdk": "true",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key": "883aaf0f7fmsh4282892e27774dap1ff27fjsnc3f21f20f8dd"
        }
      })

      if (!response.ok)
        throw new Error("something went wrong when fetching news");

      const data = await response.json();

      dispatch(newsActions.setData(data.value));
    };

    sendRequest()
      .then(() => {
        dispatch(newsActions.stopFetching());
      })
      .catch((error) => console.log(error));
  };
};

export const newsActions = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
