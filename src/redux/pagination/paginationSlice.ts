import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 1,
    totalPages: undefined,
    limit: 8,
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
});

export const selectPagination = (state: RootState) => state.pagination;
export const { setPage, setTotalPages } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
