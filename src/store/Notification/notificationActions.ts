import { AppDispatch } from "../store";
import { notificationActions } from "./notificationSlice";

export const callNotification = (status: string, message: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(
      notificationActions.showNotification({
        status: status,
        message: message,
      })
    );
    setTimeout(() => {
      dispatch(notificationActions.hideNotification());
    }, 2500);
    setTimeout(() => {
      dispatch(notificationActions.resetNotification());
    }, 4000);
  };
};
