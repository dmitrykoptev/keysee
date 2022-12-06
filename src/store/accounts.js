import { createSlice } from "@reduxjs/toolkit";

const accountsInitialState = {
  items: [],
  quantity: 0,
  changed: false,
};

const accountsSlice = createSlice({
  name: "accountsList",
  initialState: accountsInitialState,
  reducers: {
    replaceAccounts(state, action) {
      state.items = action.payload.items;
      state.quantity = action.payload.quantity;
    },

    addAccount(state, action) {
      const newAccount = action.payload;
      state.items.push({
        id: newAccount.id,
        handle: newAccount.handle,
        accUrl: `https://twitter.com/${newAccount.handle}`,
      });
      state.quantity++;
      state.changed = true;
    },

    removeAccount(state, action) {
      const id = action.payload;
      state.items = state.items.filter((account) => account.id !== id);
      state.quantity--;
      state.changed = true;
    },
  },
});

export const accountsActions = accountsSlice.actions;

export default accountsSlice.reducer;
