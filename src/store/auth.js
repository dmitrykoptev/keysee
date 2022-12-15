import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: localStorage.getItem("token"), error: null },
  reducers: {
    logIn(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logOut(state) {
      state.token = "";
      localStorage.removeItem("token");
      console.log(state.token, state.isLoggedIn);
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
