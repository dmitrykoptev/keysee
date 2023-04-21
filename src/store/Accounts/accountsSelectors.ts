import { RootState } from "../store";

export const accountsListSelector = (state: RootState) =>
  state.accountsList.items;
export const accountsIsLoadingSelector = (state: RootState) =>
  state.accountsList.isLoading;
