import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import accountsReducer from "./accounts";
import keysReducer from "./keys";
import modalsReducer from "./modals";
import notificationReducer from "./notification";

const store = configureStore({
  reducer: {
    auth: authReducer,
    accountsList: accountsReducer,
    keyList: keysReducer,
    modals: modalsReducer,
    notification: notificationReducer,
  },
});

export default store;
