import { configureStore } from "@reduxjs/toolkit";
import { tweetsReducer } from "./tweetsSlice";
// import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
  },
});
