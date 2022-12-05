import { createSlice } from "@reduxjs/toolkit";

const keysSlice = createSlice({
  name: "keyList",
  initialState: {
    items: [],
    quantity: 0,
    changed: false,
  },
  reducers: {
    replaceKeyList(state, action) {
      state.quantity = action.payload.quantity;
      state.items = action.payload.items;
    },
    addKey(state, action) {
      const newItem = action.payload;
      state.quantity++;
      state.changed = true;
      state.items.push({
        id: newItem.id,
        title: newItem.title,
      });
    },
    removeKey(state, action) {
      const id = action.payload;
      state.quantity--;
      state.changed = true;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const keysAction = keysSlice.actions;

export default keysSlice.reducer;
