import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const artistsApi = createApi({
  reducerPath: "artists",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sound-wave.b.goit.study/api",
  }),
  endpoints: (builder) => ({
    getArtists: builder.query({
      query: (params) => `/artists?${params}`,
    }),
    getArtistById: builder.query({ query: (id: string) => `/artists/${id}` }),
  }),
});

export const { useGetArtistsQuery, useGetArtistByIdQuery } = artistsApi;
