import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/Home/homeSlice.js";
import modalReducer from "../commons/Modal/modalSlice.js";
import profileReducer from "../features/Profile/profileSlice.js";

export default configureStore({
  reducer: {
    home: homeReducer,
    modal: modalReducer,
    profile: profileReducer,
  },
});
