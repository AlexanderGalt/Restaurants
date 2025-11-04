import { createSelector } from "@reduxjs/toolkit";
import { reviewsAdapter } from "./reviewsSlice";

const selectReviews = (state) => state.reviews;

export const {
  selectIds: selectReviewsIds,
  selectById: selectReviewsById,
  selectAll: selectReviewsAll,
  selectEntities: selectReviewsEntities,
  selectTotal: selectReviewsTotlal,
} = reviewsAdapter.getSelectors(selectReviews);

export const selectReviewsByIds = createSelector(
  [selectReviewsEntities, (_, reviewsIds) => reviewsIds],
  (reviewsEntities, reviewsIds = []) => reviewsIds.map((id) => reviewsEntities[id]).filter(Boolean),
);
