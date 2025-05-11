import { configureStore } from "@reduxjs/toolkit";
import { artistsApi } from "./artists/artistsApi";
import { paginationReducer } from "./pagination/paginationSlice";
import { filtersReducer } from "./filters/filtersSlice";
import { genresApi } from "./filters/genreApi";

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    filters: filtersReducer,
    [genresApi.reducerPath]: genresApi.reducer,
    [artistsApi.reducerPath]: artistsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(artistsApi.middleware)
      .concat(genresApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
