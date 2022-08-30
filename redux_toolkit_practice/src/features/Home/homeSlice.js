import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: "home",
};

export const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setScreen(state, action) {
      state.screen = action.payload;
    },
  },
});

export const { setScreen } = homeSlice.actions;

export default homeSlice.reducer;
