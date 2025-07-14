import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// 🛡️ Headers for RapidAPI
const goldApiHeaders = {
  "x-rapidapi-key": "a5a7b28b4dmsh762c2c6c3203ffcp181122jsn16a4c6bc3dce",
  "x-rapidapi-host": "harem-altin-anlik-altin-fiyatlari-live-rates-gold.p.rapidapi.com",
};

// 🌍 Base URL
const baseUrl = "https://harem-altin-anlik-altin-fiyatlari-live-rates-gold.p.rapidapi.com";

// 🛠️ Helper to attach headers
const createRequest = (url, params = {}) => ({
  url,
  headers: goldApiHeaders,
  params,
});

// 🚀 RTK Query API
export const goldApi = createApi({
  reducerPath: "goldApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getLiveGoldRates: builder.query({
      query: () =>
        createRequest("/economy/live-exchange-rates", {
          type: "gold",
          code: "CEYREKALTIN,USDTRY",
        }),
    }),
  }),
});

// 🧪 Export hook
export const { useGetLiveGoldRatesQuery } = goldApi;
