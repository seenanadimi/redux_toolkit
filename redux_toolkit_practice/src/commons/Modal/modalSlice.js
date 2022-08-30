import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalToggle: false,
};

export const homeSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    toggleModalOff: (state) => {
      const offToggle = { ...state, modalToggle: false };
      return offToggle;
    },
    toggleModalOn: (state) => {
      const onToggle = { ...state, modalToggle: true };
      return onToggle;
    },
  },
});

export const { toggleModalOn, toggleModalOff } = homeSlice.actions;

export default homeSlice.reducer;
