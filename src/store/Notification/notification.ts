import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotification } from "../../models/notification";

interface IInitialState {
  notification: { status: string | ""; message: string | "" };
  showNotification: boolean;
}

const initialState: IInitialState = {
  notification: { status: "", message: "" },
  showNotification: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(state, action: PayloadAction<INotification>) {
      return {
        ...state,
        showNotification: true,
        notification: {
          status: action.payload.status,
          message: action.payload.message,
        },
      };
    },
    hideNotification(state) {
      return {
        ...state,
        showNotification: false,
      };
    },
    resetNotification(state) {
      return {
        ...state,
        notification: { status: "", message: "" },
      };
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
