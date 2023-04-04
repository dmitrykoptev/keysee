import { RootState } from "../store";

export const notificationSelector = (state: RootState) =>
  state.notification.notification;
export const showNotificationSelector = (state: RootState) =>
  state.notification.showNotification;
