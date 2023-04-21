import { createSlice } from "@reduxjs/toolkit";
import { IAccount } from "../../models/account";
import { addAccount, deleteAccount, fetchAccounts } from "./accountsActions";

interface IInitialState {
  isLoading: boolean;
  error: null | string;
  items: IAccount[];
}

const initialState: IInitialState = {
  isLoading: false,
  error: null,
  items: [],
};

const accountsSlice = createSlice({
  name: "accountsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchAccounts
      .addCase(fetchAccounts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // addAccount
      .addCase(addAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(addAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // deleteAccount
      .addCase(deleteAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const accountsActions = accountsSlice.actions;

export default accountsSlice.reducer;
