import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: "", isLoggedin: false },
  reducers: {
    logIn(state, action) {
      state.token = action.payload;
      state.isLoggedin = true;
      console.log(state.token, state.isLoggedin);
    },
    logOut(state) {
      state.token = "";
      state.isLoggedin = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
