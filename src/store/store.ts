import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Authetication/auth";
import accountsReducer from "./Accounts/accounts";
import keysReducer from "./Keys/keys";
import tweetsReducer from "./Tweets/tweets";
import modalsReducer from "./Modals/modals";
import notificationReducer from "./Notification/notification";
import spinnerReducer from "./Spinner/spinner";

const store = configureStore({
  reducer: {
    auth: authReducer,
    accountsList: accountsReducer,
    keyList: keysReducer,
    tweetsList: tweetsReducer,
    modals: modalsReducer,
    notification: notificationReducer,
    spinner: spinnerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
