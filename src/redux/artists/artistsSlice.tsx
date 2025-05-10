import { createSlice } from "@reduxjs/toolkit";

const artistsSlice = createSlice({
  name: "artists",
  initialState: [],
  reducers: {},
});

export const artistsReducer = artistsSlice.reducer;
