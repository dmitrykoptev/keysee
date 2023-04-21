import { IKey } from "../../models/key";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { callNotification } from "../Notification/notificationActions";
import { AppDispatch } from "../store";

export const fetchKeys = createAsyncThunk(
  "fetchKeys",
  async (dispatch: AppDispatch, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/v1/keys", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Fetching keys failed ...");
      }

      const data = (await response.json()) as IKey[];
      return data;
    } catch (error: any) {
      dispatch(callNotification("error", error.message));
      return rejectWithValue(error.message);
    }
  }
);

interface IAddKeyProps {
  dispatch: AppDispatch;
  inputKey: string;
}

export const addKey = createAsyncThunk(
  "addKey",
  async ({ dispatch, inputKey }: IAddKeyProps, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/v1/keys", {
        method: "POST",
        body: JSON.stringify({
          key: inputKey,
        }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Adding key failed ...");
      }

      const data = (await response.json()) as IKey[];
      return data;
    } catch (error: any) {
      dispatch(callNotification("error", error.message));
      return rejectWithValue(error.message);
    }
  }
);

interface IDeleteKeyProps {
  dispatch: AppDispatch;
  id: number;
}

export const deleteKey = createAsyncThunk(
  "deleteKey",
  async ({ dispatch, id }: IDeleteKeyProps, { rejectWithValue }) => {
    try {
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

      if (!response.ok) {
        throw new Error("Deleting key failed ...");
      }

      const data = (await response.json()) as IKey[];
      return data;
    } catch (error: any) {
      dispatch(callNotification("error", error.message));
      return rejectWithValue(error.message);
    }
  }
);
