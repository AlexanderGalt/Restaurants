import { apiSlice } from "@shared/model/redux/apiSlice";

export const dishApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getDishById: build.query({
      query: (id) => `/dish/${id}`,
    }),
    getDishesByRestaurantId: build.query({
      query: (id) => `/dishes?restaurantId=${id}`,
    }),
  }),
});

export const { useGetDishByIdQuery, useGetDishesByRestaurantIdQuery } = dishApi;
