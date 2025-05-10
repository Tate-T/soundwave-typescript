import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 1,
    limit: 8,
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const selectPagination = (state: RootState) => state.pagination;
export const { setPage } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
