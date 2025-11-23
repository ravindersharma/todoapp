import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import taskReducer from "./taskSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});

export default store;
