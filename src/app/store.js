import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { newsApi } from "../services/NewsApi";
import { stocksApi } from "../services/stocksApi"; 
import { goldApi } from "../services/goldApi";
import { cashFlowApi } from "../services/cashFlowApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [stocksApi.reducerPath]: stocksApi.reducer, 
    [goldApi.reducerPath]: goldApi.reducer,
    [cashFlowApi.reducerPath]:cashFlowApi.reducwer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      newsApi.middleware,
      stocksApi.middleware, 
      goldApi.middleware,
      cashFlowApi.middleware
    ),
});
