import { RootState } from "../store";

export const authTokenSelector = (state: RootState) => !!state.auth.token;
export const rememberMeSelector = (state: RootState) => state.auth.rememberMe;
export const isErrorSelector = (state: RootState) => state.auth.error;
