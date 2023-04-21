import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITweet } from "../../models/tweet";
import { AppDispatch } from "../store";
import { callNotification } from "../Notification/notificationActions";

export const fetchTweets = createAsyncThunk(
  "fetchTweets",
  async (dispatch: AppDispatch, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/v1/parsing", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Parcing failed... Please try again.");
      }

      const data: ITweet[] = await response.json();
      return data;
    } catch (error: any) {
      dispatch(callNotification("error", error.message));
      return rejectWithValue(error.message);
    }
  }
);

export const fetchLastResult = createAsyncThunk(
  "fetchLastResult",
  async (dispatch: AppDispatch, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/v1/last_results", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Parcing failed... Please try again.");
      }

      const data: ITweet[] = await response.json();
      dispatch(
        callNotification("loaded", "Previous successful result loaded.")
      );
      return data;
    } catch (error: any) {
      dispatch(callNotification("error", error.message));
      return rejectWithValue(error.message);
    }
  }
);
