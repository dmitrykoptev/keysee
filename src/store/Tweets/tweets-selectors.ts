import { RootState } from "../store";

export const loadingTweetsSelector = (state: RootState) =>
  state.tweetsList.isLoading;
export const tweetsSelector = (state: RootState) =>
  state.tweetsList.items
