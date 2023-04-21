import { createSlice } from "@reduxjs/toolkit";
import { ITweet } from "../../models/tweet";
import { fetchLastResult, fetchTweets } from "./tweetsActions";

interface IInitialState {
  isLoading: boolean;
  error: null | string;
  items: ITweet[];
}

const initialState: IInitialState = {
  isLoading: false,
  error: null,
  items: [],
};

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchTweets
      .addCase(fetchTweets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTweets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // fetchLastResult
      .addCase(fetchLastResult.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLastResult.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchLastResult.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const tweetsActions = tweetsSlice.actions;

export default tweetsSlice.reducer;
