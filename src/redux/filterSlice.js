import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFiltredTweets,
  subscribeTweet,
  unSubscribeTweet,
} from "./operations";

export const statusFilters = Object.freeze({
  all: "",
  follow: false,
  followings: true,
});

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const filtersInitialState = {
  status: statusFilters.all,
  modalToShow: false,
  isLoading: false,
  error: null,
  filtredTweets: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setShowModal(state) {
      state.modalToShow = !state.modalToShow;
    },
  },
  extraReducers: {
    [fetchFiltredTweets.pending]: handlePending,
    [fetchFiltredTweets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.filtredTweets = action.payload;
    },
    [fetchFiltredTweets.rejected]: handleRejected,

    [subscribeTweet.pending]: handlePending,
    [subscribeTweet.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.filtredTweets.findIndex(
        (user) => user.id === action.payload.id
      );
      state.filtredTweets.splice(index, 1, action.payload);
    },
    [subscribeTweet.rejected]: handleRejected,
    [unSubscribeTweet.pending]: handlePending,
    [unSubscribeTweet.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.filtredTweets.findIndex(
        (user) => user.id === action.payload.id
      );
      state.filtredTweets.splice(index, 1, action.payload);
    },
    [unSubscribeTweet.rejected]: handleRejected,
  },
});

export const { setStatusFilter, setShowModal } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
