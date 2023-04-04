import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  token: string | null;
  error: string | null;
  rememberMe: boolean;
}

const initialState: IInitialState = {
  token: localStorage.getItem("token"),
  error: null,
  rememberMe: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<string>) {
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    },

    logOut(state) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        rememberMe: true,
      };
    },

    rememberMeHandler(state) {
      return {
        ...state,
        rememberMe: !state.rememberMe,
      };
    },

    showError(state, action: PayloadAction<string>) {
      const message = action.payload;
      return {
        ...state,
        error: message,
      };
    },

    removeError(state) {
      return {
        ...state,
        error: null,
      };
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
