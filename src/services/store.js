import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article.js";
export const store = configureStore({
  reducer: { [articleApi.reducerPath]: articleApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
