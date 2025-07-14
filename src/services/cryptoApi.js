
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// 🌐 Headers for RapidAPI
const cryptoApiHeaders = {
  "x-rapidapi-key": "a5a7b28b4dmsh762c2c6c3203ffcp181122jsn16a4c6bc3dce",
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};

// 🔗 API base URL
const baseUrl = "https://coinranking1.p.rapidapi.com";

// 🛠️ Helper function to attach headers to any URL
const createRequest = (url, params = {}) => ({
  url,
  headers: cryptoApiHeaders,
  params,
});

// 🚀 RTK Query API
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // 📊 Get global stats
    getGlobalStats: builder.query({
      query: () =>
        createRequest("/stats", {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
        }),
    }),

    // 🪙 Get coins list
    getCryptos: builder.query({
      query: () =>
        createRequest("/coins", {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          limit: 100,
        }),
    }),

    // 🔍 Get details of a specific coin
    getCryptoDetails: builder.query({
      query: (coinUuid) => createRequest(`/coin/${coinUuid}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinUuid, timePeriod }) =>
        createRequest(`/coin/${coinUuid}/history`, { timePeriod }),
    }),
  }),
});

// 🧪 Export hooks
export const {
  useGetCryptosQuery,
  useGetGlobalStatsQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
