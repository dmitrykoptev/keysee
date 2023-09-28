import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { callNotification } from "../Notification/notificationActions";
import { IAccount } from "../../models/account";

export const fetchAccounts = createAsyncThunk(
  "fetchAccounts",
  async (dispatch: AppDispatch, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/v1/accounts", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Fetching accounts failed ...");
      }

      const data = (await response.json()) as IAccount[];
      return data;
    } catch (error: any) {
      dispatch(callNotification("error", error.message));
      return rejectWithValue(error.message);
    }
  }
);

interface IAddAccountProps {
  dispatch: AppDispatch;
  inputHandle: string;
}

export const addAccount = createAsyncThunk(
  "addAccount",
  async ({ dispatch, inputHandle }: IAddAccountProps, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/v1/accounts", {
        method: "POST",
        body: JSON.stringify({
          account: inputHandle,
        }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Adding account failed ...");
      }

      const data = (await response.json()) as IAccount[];
      return data;
    } catch (error: any) {
      dispatch(callNotification("error", error.message));
      return rejectWithValue(error.message);
    }
  }
);

interface IDeleteAccountProps {
  dispatch: AppDispatch;
  id: number;
}

export const deleteAccount = createAsyncThunk(
  "deleteAccount",
  async ({ dispatch, id }: IDeleteAccountProps, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/v1/accounts", {
        method: "DELETE",
        body: JSON.stringify({
          id: id,
        }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Deleting account failed ...");
      }

      dispatch(fetchAccounts(dispatch));
    } catch (error: any) {
      dispatch(callNotification("error", error.message));
      return rejectWithValue(error.message);
    }
  }
);
