import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Authetication/authSlice";
import accountsReducer from "./Accounts/accountsSlice";
import keysReducer from "./Keys/keysSlice";
import tweetsReducer from "./Tweets/tweetsSlice";
import modalsReducer from "./Modals/modalsSlice";
import notificationReducer from "./Notification/notificationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    accountsList: accountsReducer,
    keyList: keysReducer,
    tweetsList: tweetsReducer,
    modals: modalsReducer,
    notification: notificationReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
