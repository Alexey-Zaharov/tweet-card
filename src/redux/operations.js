import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTweets = createAsyncThunk(
  "tweets/fetch",
  async (_, thunkAPI) => {
    try {
      const respose = await fetch(
        "https://6478ab27362560649a2e3b8f.mockapi.io/users?page=1&limit=6",
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      );
      return respose.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const subscribeTweet = createAsyncThunk(
  "tweets/tweetSubscribe",
  async ({ id, followers }, thunkAPI) => {
    try {
      const response = await fetch(
        `https://6478ab27362560649a2e3b8f.mockapi.io/users/${id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ followers: followers + 1, subscribed: true }),
        }
      );
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const unSubscribeTweet = createAsyncThunk(
  "tweets/tweetUnSubscribe",
  async ({ id, followers }, thunkAPI) => {
    try {
      const response = await fetch(
        `https://6478ab27362560649a2e3b8f.mockapi.io/users/${id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ followers: followers - 1, subscribed: false }),
        }
      );
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadMoreTweets = createAsyncThunk(
  "tweets/nextPage",
  async (currentPage, thunkAPI) => {
    try {
      const respose = await fetch(
        `https://6478ab27362560649a2e3b8f.mockapi.io/users?page=${
          currentPage + 1
        }&limit=6`,
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      );
      return respose.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
