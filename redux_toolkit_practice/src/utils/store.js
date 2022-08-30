import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/Home/homeSlice.js";
import modalReducer from '../commons/Modal/modalSlice';

export default configureStore({
  reducer: {
    home: homeReducer,
    modal: modalReducer,
  },
});
