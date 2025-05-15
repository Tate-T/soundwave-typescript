import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    genre: "",
    sortName: "abs",
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setGenre(state, action) {
      state.genre = action.payload;
    },
    setSortName(state, action) {
      state.sortName = action.payload;
    },
  },
});

export const selectFilters = (state: RootState) => state.filters;
export const { setName, setSortName, setGenre } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
