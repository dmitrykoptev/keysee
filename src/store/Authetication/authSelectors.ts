import { RootState } from "../store";

export const authTokenSelector = (state: RootState) => !!state.auth.token;
export const authRememberMeSelector = (state: RootState) =>
  state.auth.rememberMe;
export const authIsErrorSelector = (state: RootState) => state.auth.error;
export const authIsLoadingSelector = (state: RootState) => state.auth.isLoading;
