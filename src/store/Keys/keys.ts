import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IKey } from "../../models/key";

interface IInitialState {
  items: IKey[] | [];
}

const initialState: IInitialState = {
  items: [],
};

const keysSlice = createSlice({
  name: "keyList",
  initialState,
  reducers: {
    replaceKeys(state, action: PayloadAction<IKey[]>) {
      return {
        ...state,
        items: action.payload,
      };
    },
  },
});

export const keysAction = keysSlice.actions;

export default keysSlice.reducer;
