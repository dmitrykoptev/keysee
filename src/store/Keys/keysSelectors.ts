import { RootState } from "../store";

export const keysListSelector = (state: RootState) => state.keyList.items;
export const keysIsLoadingSelector = (state: RootState) =>
  state.keyList.isLoading;
