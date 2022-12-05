import { configureStore } from "@reduxjs/toolkit";

import keysReducer from "./keys";
import notificationReducer from "./notification";

const store = configureStore({
  reducer: { keyList: keysReducer, notification: notificationReducer },
});

export default store;
