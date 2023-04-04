import { ITweet } from "../../models/tweet";
import { callNotification } from "../Notification/notification-actions";
import { AppDispatch } from "../store";
import { tweetsActions } from "./tweets";

export const fetchTweetsData = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(tweetsActions.showLoading());
    const sendRequest = async () => {
      const response = await fetch("/api/v1/parsing", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(tweetsActions.hideLoading());

      const data: ITweet[] = await response.json();

      if (!response.ok) {
        throw new Error("Parcing failed... Please try again.");
      }

      return data;
    };

    try {
      const tweets = await sendRequest();
      if (tweets.length === 0) {
        dispatch(callNotification("error", "No tweets found by your order."));
      }
      dispatch(tweetsActions.replaceTweets(tweets || []));
    } catch (err: any) {
      dispatch(callNotification("error", err.message));
    }
  };
};

export const fetchLastResult = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(tweetsActions.showLoading());
    const sendRequest = async () => {
      const response = await fetch("/api/v1/last_results", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(tweetsActions.hideLoading());

      if (!response.ok) {
        throw new Error("Something went wrong ...");
      }

      const data: ITweet[] = await response.json();
      return data;
    };

    try {
      const tweets = await sendRequest();
      dispatch(tweetsActions.replaceTweets(tweets || []));
      if (tweets.length > 0) {
        dispatch(
          callNotification("loaded", "Previous successful result loaded.")
        );
      }
    } catch (err: any) {
      dispatch(callNotification("error", err.message));
    }
  };
};
