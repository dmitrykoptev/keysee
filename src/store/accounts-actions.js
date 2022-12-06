import { accountsActions } from "./accounts";
import { notificationActions } from "./notification";

export const sendAccountsData = (accountsList) => {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending account data!",
      })
    );
    const sendRequest = async () => {
      await fetch("https://keysee-default-rtdb.firebaseio.com/accounts.json", {
        method: "PUT",
        body: JSON.stringify({
          quantity: accountsList.quantity,
          items: accountsList.items,
        }),
      });
    };

    try {
      await sendRequest();
      dispatch(
        notificationActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent account data successfully!",
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
          message: "Sending account data failed!",
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideNotification());
      }, 1500);
    }
  };
};

export const fetchAccountsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://keysee-default-rtdb.firebaseio.com/accounts.json"
      );

      const data = await response.json();

      return data;
    };

    try {
      const accountsListData = await fetchData();

      dispatch(
        accountsActions.replaceAccounts({
          quantity: accountsListData.quantity,
          items: accountsListData.items || [],
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching data failed!",
        })
      );
    }
  };
};
