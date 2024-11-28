import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../../assets/normalized-mock";

export const reviewsAdapter = createEntityAdapter();
const initialState = reviewsAdapter.getInitialState(null, normalizedReviews);
export const reviewsSlice = createSlice({
	name: "reviews",
	initialState,
});

export const {
	selectIds: selectReviewsIds,
	selectById: selectReviewsById,
	selectAll: selectReviewsAll,
	selectEntities: selectReviewsEntities,
	selectTotal: selectReviewsTotlal,
} = reviewsAdapter.getSelectors((state) => state.reviews);