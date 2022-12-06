import { configureStore } from "@reduxjs/toolkit";

import accountsReducer from "./accounts";
import keysReducer from "./keys";
import notificationReducer from "./notification";

const store = configureStore({
  reducer: {
    accountsList: accountsReducer,
    keyList: keysReducer,
    notification: notificationReducer,
  },
});

export default store;
