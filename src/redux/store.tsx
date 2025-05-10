import { configureStore } from "@reduxjs/toolkit";
import { artistsApi } from "./artists/artistsApi";
import { paginationReducer } from "./pagination/paginationSlice";

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    [artistsApi.reducerPath]: artistsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artistsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
