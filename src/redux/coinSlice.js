import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coin: null,
};

export const searchSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    selectedCoin: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { selectedCoin } = coinSlice.actions;

export const selectCoin = (state) => state.coin.coin;

export default coinSlice.reducer;
