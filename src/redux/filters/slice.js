import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    value: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload.toLowerCase().trim();
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;
