import { configureStore } from "@reduxjs/toolkit";
import { artistsApi } from "./artists/artistsApi";
import { paginationReducer } from "./pagination/paginationSlice";
import { filtersReducer } from "./filters/filtersSlice";
import { genresApi } from "./filters/genreApi";
import persistReducer from "redux-persist/lib/persistReducer";
import sessionStorage from "redux-persist/lib/storage/session";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

const persistedPaginationReducer = persistReducer(
  persistConfig,
  paginationReducer
);
const persistedFiltersReducer = persistReducer(persistConfig, filtersReducer);

const store = configureStore({
  reducer: {
    pagination: persistedPaginationReducer,
    filters: persistedFiltersReducer,
    [genresApi.reducerPath]: genresApi.reducer,
    [artistsApi.reducerPath]: artistsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(artistsApi.middleware)
      .concat(genresApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
