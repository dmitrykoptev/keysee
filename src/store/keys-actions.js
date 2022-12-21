import { keysAction } from "./keys";
import { notificationActions } from "./notification";

export const sendKeysData = (keyList) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      await fetch("https://keysee-default-rtdb.firebaseio.com/keys.json", {
        method: "PUT",
        body: JSON.stringify({
          quantity: keyList.quantity,
          items: keyList.items,
        }),
      });
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          status: "error",
          message: "Applying key failed!",
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideNotification());
      }, 1500);
    }
  };
};

export const fetchKeysData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://keysee-default-rtdb.firebaseio.com/keys.json"
      );

      const data = await response.json();

      return data;
    };

    try {
      const keyListData = await fetchData();

      dispatch(
        keysAction.replaceKeyList({
          items: keyListData.items || [],
          quantity: keyListData.quantity,
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          status: "error",
          message: "Fetching keys failed!",
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideNotification());
      }, 1500);
    }
  };
};
