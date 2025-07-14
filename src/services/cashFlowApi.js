import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  RapidAPI headers
const cashFlowApiHeaders = {
  "x-rapidapi-key": "a5a7b28b4dmsh762c2c6c3203ffcp181122jsn16a4c6bc3dce",
  "x-rapidapi-host": "real-time-finance-data.p.rapidapi.com",
};

//  Base URL
const baseUrl = "https://real-time-finance-data.p.rapidapi.com";

//  Request builder
const createRequest = (url, params = {}) => ({
  url,
  headers: cashFlowApiHeaders,
  params,
});
// RTK Query API setup
export const cashFlowApi = createApi({
  reducerPath: "cashFlowApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCashFlow: builder.query({
      query: ({ symbol = "AAPL:NASDAQ", period = "QUARTERLY", language = "en" }) =>
        createRequest("/company-cash-flow", { symbol, period, language }),
    }),
  }),
});

//  Export hook
export const { useGetCashFlowQuery } = cashFlowApi;
