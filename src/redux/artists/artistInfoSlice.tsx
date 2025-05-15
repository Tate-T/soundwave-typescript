import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const artistInfoSlice = createSlice({
  name: "artistInfo",
  initialState: {
    isOpen: false,
    _id: "",
  },
  reducers: {
    toggleArtistInfo(state) {
      state.isOpen = !state.isOpen;
    },
    setId(state, action) {
      state._id = action.payload;
    },
  },
});

export const selectArtistInfo = (state: RootState) => state.artistInfo.isOpen;
export const selectArtistInfoId = (state: RootState) => state.artistInfo._id;
export const artistInfoReducer = artistInfoSlice.reducer;
export const { toggleArtistInfo, setId } = artistInfoSlice.actions;
