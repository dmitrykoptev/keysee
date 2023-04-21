import { createSlice } from "@reduxjs/toolkit";
import { IKey } from "../../models/key";
import { addKey, deleteKey, fetchKeys } from "./keysActions";

interface IInitialState {
  isLoading: boolean;
  error: string | null;
  items: IKey[] | [];
}

const initialState: IInitialState = {
  isLoading: false,
  error: null,
  items: [],
};

const keysSlice = createSlice({
  name: "keyList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchKeys
      .addCase(fetchKeys.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchKeys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchKeys.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // addKey
      .addCase(addKey.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addKey.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(addKey.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // deleteKey
      .addCase(deleteKey.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteKey.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(deleteKey.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default keysSlice.reducer;
