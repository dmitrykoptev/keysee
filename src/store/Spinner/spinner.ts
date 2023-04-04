import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  show: boolean;
}
const initialState: IInitialState = {
  show: false,
};

const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    showSpinner(state) {
      return {
        ...state,
        show: true,
      };
    },
    hideSpinner(state) {
      return {
        ...state,
        show: false,
      };
    },
  },
});

export const spinnerActions = spinnerSlice.actions;

export default spinnerSlice.reducer;
