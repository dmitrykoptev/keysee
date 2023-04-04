import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccount } from "../../models/account";

interface IInitialState {
  items: IAccount[];
}

const initialState: IInitialState = {
  items: [],
};

const accountsSlice = createSlice({
  name: "accountsList",
  initialState,
  reducers: {
    replaceAccounts(state, action: PayloadAction<IAccount[]>) {
      return {
        ...state,
        items: action.payload,
      };
    },
  },
});

export const accountsActions = accountsSlice.actions;

export default accountsSlice.reducer;
