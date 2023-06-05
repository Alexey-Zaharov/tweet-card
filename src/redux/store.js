import { configureStore } from "@reduxjs/toolkit";
import { tweetsReducer } from "./tweetsSlice";
import { filtersReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    filters: filtersReducer,
  },
});
