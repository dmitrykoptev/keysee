import { keysAction } from "./keys";
import { notificationActions } from "./notification";

export const sendKeysData = (keyList) => {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending key data",
      })
    );
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
      dispatch(
        notificationActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent key data successfully!",
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideNotification());
      }, 1500);
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
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
          title: "Error!",
          message: "Fetching keys failed!",
        })
      );
    }
  };
};
