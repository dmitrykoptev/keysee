import { accountsActions } from "./accounts";
import { notificationActions } from "./notification";

export const sendAccountsData = (accountsList) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      await fetch(
        "https://keysee-521c4-default-rtdb.firebaseio.com/accounts.json",
        {
          method: "PUT",
          body: JSON.stringify({
            quantity: accountsList.quantity,
            items: accountsList.items,
          }),
        }
      );
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          status: "error",
          message: "Applying account failed!",
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
        "https://keysee-521c4-default-rtdb.firebaseio.com/accounts.json"
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
          message: "Fetching accounts failed!",
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideNotification());
      }, 1500);
    }
  };
};
