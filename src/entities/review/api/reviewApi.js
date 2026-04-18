import { apiSlice } from "@shared/model/redux/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getReviewsByRestaurantId: build.query({
      query: (id) => `reviews?restaurantId=${id}`,
      providesTags: (result) =>
        result
          ? [...result.map((review) => ({ type: "Reviews", id: review.id })), { type: "Reviews", id: "LIST" }]
          : [{ type: "Reviews", id: "LIST" }],
    }),
    sendReview: build.mutation({
      query: ({ restaurantId, text, userId, rating }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: { text, userId, rating },
      }),
      invalidatesTags: () => [{ type: "Reviews", id: "LIST" }],
    }),
    updateReviewById: build.mutation({
      query: ({ newReviewData, reviewId }) => ({
        url: `review/${reviewId}`,
        method: "PATCH",
        body: { text: newReviewData },
      }),
      invalidatesTags: (result) => [{ type: "Reviews", id: result.id }],
    }),
  }),
  tagTypes: ["Reviews"],
});

export const { useGetReviewsByRestaurantIdQuery, useUpdateReviewByIdMutation, useSendReviewMutation } = reviewApi;
