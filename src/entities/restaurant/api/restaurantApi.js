import { apiSlice } from "@shared/model/redux/apiSlice";
import { restaurantInitialState, restaurantsAdapter } from "../model/restaurantsAdapter";

export const restaurantApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getRestaurantById: build.query({
      query: (id) => `/restaurant/${id}`,
    }),
    getRestaurants: build.query({
      query: () => `/restaurants`,
      transformResponse(response) {
        return restaurantsAdapter.addMany(restaurantInitialState, response);
      },
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = restaurantApi;
