import { createSlice } from "@reduxjs/toolkit";
import { authFuction } from "./authActions";

interface IInitialState {
  token: string | null;
  error: string | null;
  isLoading: boolean;
  rememberMe: boolean;
}

const initialState: IInitialState = {
  token: localStorage.getItem("token"),
  error: null,
  isLoading: false,
  rememberMe: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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

    removeError(state) {
      return {
        ...state,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authFuction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authFuction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.access_token;
        if (action.payload.access_token !== undefined) {
          localStorage.setItem("token", action.payload.access_token);
        }
      })
      .addCase(authFuction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
