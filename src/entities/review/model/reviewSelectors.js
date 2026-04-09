import { createSelector } from "@reduxjs/toolkit";
import { reviewsAdapter } from "./reviewsAdapter";

const selectReviewsData = (state) => state.reviews;

export const {
  selectIds: selectReviewsIds,
  selectById: selectReviewsById,
  selectAll: selectReviewsAll,
  selectEntities: selectReviewsEntities,
  selectTotal: selectReviewsTotlal,
} = reviewsAdapter.getSelectors(selectReviewsData);

export const selectReviewsByIds = createSelector(
  [selectReviewsEntities, (_, reviewsIds) => reviewsIds],
  (reviewsEntities, reviewsIds = []) => reviewsIds.map((id) => reviewsEntities[id]).filter(Boolean),
);
