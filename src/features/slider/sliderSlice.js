import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    index: 0,
  },
  reducers: {
    nextSlide: (state, action) => {
      state.index = (state.index + 1) % action.payload;
    },
  },
});

export const { nextSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
