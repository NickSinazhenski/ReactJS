import { configureStore } from "@reduxjs/toolkit";
import yourReducer from "./cartSlice";
import fetchReducer from "./fetchSlice";
import authReducer from "./authorizationSlice";

export const store = configureStore({
  reducer: {
    yourData: yourReducer,
    fetch: fetchReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
