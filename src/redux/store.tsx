import { configureStore } from "@reduxjs/toolkit";
import yourReducer from "./cartSlice";
import fetchReducer from "./fetchSlice";
import authReducer from "./authorizationSlice";
import menuUiReducer from "./menuUiSlice";
import themeReducer from "./themeSlice";


export const store = configureStore({
  reducer: {
    yourData: yourReducer,
    fetch: fetchReducer,
    auth: authReducer,
    menuUi: menuUiReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
