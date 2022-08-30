import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: "home",
  modalToggle: false,
};

export const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setScreen(state, action) {
      state.screen = action.payload;
    },
    toggleModal(state) {
      state.modalToggle = !state.modalToggle;
    },
  },
});

export const { setScreen, toggleModal } = homeSlice.actions;

export default homeSlice.reducer;
