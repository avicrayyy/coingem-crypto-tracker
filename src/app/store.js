import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../redux/coinSlice";
import searchReducer from "../redux/searchSlice";

export const store = configureStore({
  reducer: {
    coin: coinReducer,
    search: searchReducer,
  },
});
