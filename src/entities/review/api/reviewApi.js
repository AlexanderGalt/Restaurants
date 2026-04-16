import { apiSlice } from "@shared/model/redux/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getReviewsByRestaurantId: build.query({
      query: (id) => `reviews?restaurantId=${id}`,
    }),
  }),
});

export const { useGetReviewsByRestaurantIdQuery } = reviewApi;
