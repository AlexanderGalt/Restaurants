import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./getReviewsByRestaurantId";

export const reviewsAdapter = createEntityAdapter();

const initialState = reviewsAdapter.getInitialState();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  extraReducers(builder) {
    builder.addAsyncThunk(getReviewsByRestaurantId, {
      fulfilled(state, action) {
        reviewsAdapter.setMany(state, action.payload);
      },
    });
  },
});
