import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// 📰 Headers for Crypto News API via RapidAPI
const newsApiHeaders = {
  'x-rapidapi-key': 'a5a7b28b4dmsh762c2c6c3203ffcp181122jsn16a4c6bc3dce',
  'x-rapidapi-host': 'crypto-news51.p.rapidapi.com',
};

// 🔗 API base URL
const baseUrl = 'https://crypto-news51.p.rapidapi.com';

// 🛠️ Helper function to attach headers and optional params
const createRequest = (url, params = {}) => ({
  url,
  headers: newsApiHeaders,
  params,
});

// 🚀 RTK Query API for crypto news
export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // 🗞️ Get listing/delisting news
    getCryptoNews: builder.query({
      query: () =>
        createRequest('/api/v1/crypto/listing_delisting', {
          sort_by: 'published',
        }),
    }),
  }),
});

// 🧪 Export hook
export const {
  useGetCryptoNewsQuery,
} = newsApi;
