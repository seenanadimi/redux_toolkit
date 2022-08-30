import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/Home/homeSlice.js";

export default configureStore({
  reducer: {
    home: homeReducer,
  },
});
