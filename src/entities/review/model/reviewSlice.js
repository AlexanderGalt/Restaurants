import { createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "../api/getReviewsByRestaurantId";
import { reduxStore, rootReducer } from "@shared/model/redux/store";
import {reviewsAdapter, reviewInitialState } from "./reviewsAdapter";

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: reviewInitialState,
  extraReducers(builder) {
    builder.addAsyncThunk(getReviewsByRestaurantId, {
      fulfilled(state, action) {
        reviewsAdapter.setMany(state, action.payload);
      },
    });
  },
});

// вставляем (инжектим) слайз отзывов в глобальный стор.
const rootReducerWithReviewSlice = rootReducer.inject(reviewSlice);
reduxStore.replaceReducer(rootReducerWithReviewSlice);
