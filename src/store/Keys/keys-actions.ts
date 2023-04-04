import { keysAction } from "./keys";
import { callNotification } from "../Notification/notification-actions";
import { spinnerActions } from "../Spinner/spinner";
import { IKey } from "../../models/key";
import { AppDispatch } from "../store";

export const fetchKeysData = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(spinnerActions.showSpinner());
    const fetchData = async () => {
      const response = await fetch("/api/v1/keys", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(spinnerActions.hideSpinner());

      if (!response.ok) {
        throw new Error("Fetching keys failed ...");
      }

      const data: IKey[] = await response.json();
      return data;
    };

    try {
      const keyList = await fetchData();
      dispatch(keysAction.replaceKeys(keyList || []));
    } catch (err: any) {
      dispatch(callNotification("error", err.message));
    }
  };
};

export const addKey = (keyItem: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(spinnerActions.showSpinner());
    const sendRequest = async () => {
      const response = await fetch("/api/v1/keys", {
        method: "POST",
        body: JSON.stringify({
          key: keyItem,
        }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(spinnerActions.hideSpinner());

      if (!response.ok) {
        throw new Error("Adding key failed ...");
      }
      return;
    };

    try {
      await sendRequest();
      dispatch(fetchKeysData());
    } catch (err: any) {
      dispatch(callNotification("error", err.message));
    }
  };
};

export const deleteKey = (id: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(spinnerActions.showSpinner());
    const sendRequest = async function () {
      const response = await fetch("/api/v1/keys", {
        method: "DELETE",
        body: JSON.stringify({
          id: id,
        }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(spinnerActions.hideSpinner());

      if (!response.ok) {
        throw new Error("Deleting key failed ...");
      }
      return;
    };

    try {
      await sendRequest();
      dispatch(fetchKeysData());
    } catch (err: any) {
      dispatch(callNotification("error", err.message));
    }
  };
};
