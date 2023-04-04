import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITweet } from "../../models/tweet";

interface IInitialState {
  items: ITweet[];
  isLoading: boolean;
}

const initialState: IInitialState = {
  items: [],
  isLoading: false,
};

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    replaceTweets(state, action: PayloadAction<ITweet[]>) {
      return {
        ...state,
        items: action.payload,
      };
    },
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
  },
});

export const tweetsActions = tweetsSlice.actions;

export default tweetsSlice.reducer;
