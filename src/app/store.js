import { configureStore } from "@reduxjs/toolkit";
import ImageReducer from "../features/ImageSlice";

export default configureStore({
  reducer: {
    image: ImageReducer,
  },
});
