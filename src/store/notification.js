import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notification: { status: "", message: "" },
    showNotification: false,
  },
  reducers: {
    showNotification(state, action) {
      state.showNotification = true;
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    hideNotification(state) {
      state.showNotification = false;
    },
    resetNotification(state) {
      state.notification = { status: "", message: "" };
      console.log(state.notification.message);
    },
  },
});

// Создать функцию вызова уведомления, где будут диспатиться все три редюсера: шоу, хайд и ресет.
// Функция будет получать статус и сообщение

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
