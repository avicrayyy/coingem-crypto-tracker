import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCoin: null,
};

export const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    selectCoin: (state, action) => {
      state.selectedCoin = action.payload;
    },
  },
});

export const { selectCoin } = coinSlice.actions;

export const selectOpenCoin = (state) => state.coin.selectedCoin;

export default coinSlice.reducer;
