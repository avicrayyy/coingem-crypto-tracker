import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../redux/coinSlice";
import userReducer from "../redux/userSlice";

export const store = configureStore({
  reducer: {
    coin: coinReducer,
    user: userReducer,
  },
});
