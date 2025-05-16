import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const genresApi = createApi({
  reducerPath: "genres",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sound-wave.b.goit.study/api/genres",
  }),
  endpoints: (builder) => ({
    getGenres: builder.query({ query: () => `/` }),
  }),
});

export const { useLazyGetGenresQuery } = genresApi;
