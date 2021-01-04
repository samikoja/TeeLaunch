import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "",
};

const slice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload.image;
    },
  },
});

export const imageSelector = (state) => state.image.image;

export const { setImage } = slice.actions;
export default slice.reducer;
