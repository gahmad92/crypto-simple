import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// 🧾 Headers for RapidAPI (Yahoo Finance Insider Trades)
const stocksApiHeaders = {
  "x-rapidapi-key": "a5a7b28b4dmsh762c2c6c3203ffcp181122jsn16a4c6bc3dce",
  "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
};

// 🌐 Base URL for the stocks API
const baseUrl = "https://yahoo-finance15.p.rapidapi.com/api/v1";

// 🛠️ Helper function for constructing requests
const createRequest = (url, params = {}) => ({
  url,
  headers: stocksApiHeaders,
  params,
});

// 🚀 RTK Query API setup
export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // 🕵️ Get insider trades data
    getInsiderTrades: builder.query({
      query: () => createRequest("/markets/insider-trades"),
    }),
  }),
});

// 🧪 Export hooks
export const { useGetInsiderTradesQuery } = stocksApi;
