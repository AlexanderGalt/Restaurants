import { apiSlice } from "@shared/model/redux/apiSlice";
import { createEntityAdapter } from "@reduxjs/toolkit";

export const restaurantAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const restaurantApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getRestaurant: build.query({
      query: (id) => `/restaurant/${id}`,
    }),
    getRestaurants: build.query({
      query: () => `/restaurants`,
      transformResponse(response) {
        return restaurantAdapter.addMany(restaurantAdapter.getInitialState(), response);
      },
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetRestaurantQuery } = restaurantApi;
