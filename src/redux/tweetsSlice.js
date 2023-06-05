import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTweets,
  loadMoreTweets,
  subscribeTweet,
  unSubscribeTweet,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tweetSlice = createSlice({
  name: "tweets",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
    currentPage: 1,
  },
  extraReducers: {
    [fetchTweets.pending]: handlePending,
    [fetchTweets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    },
    [fetchTweets.rejected]: handleRejected,
    [subscribeTweet.pending]: handlePending,
    [subscribeTweet.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      state.users.splice(index, 1, action.payload);
    },
    [subscribeTweet.rejected]: handleRejected,
    [unSubscribeTweet.pending]: handlePending,
    [unSubscribeTweet.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      state.users.splice(index, 1, action.payload);
    },
    [unSubscribeTweet.rejected]: handleRejected,

    [loadMoreTweets.pending]: handlePending,
    [loadMoreTweets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.users = [...state.users, ...action.payload];
      state.currentPage += 1;
    },
    [loadMoreTweets.rejected]: handleRejected,
  },
});

export const tweetsReducer = tweetSlice.reducer;
