import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    error: null,
    rememberMe: true,
  },
  reducers: {
    logIn(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },

    logOut(state) {
      state.token = "";
      localStorage.removeItem("token");
    },

    rememberMeHandler(state) {
      state.rememberMe = !state.rememberMe;
    },

    showError(state, action) {
      const message = action.payload;
      state.error = { errorMessage: message };
    },

    removeError(state) {
      state.error = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
