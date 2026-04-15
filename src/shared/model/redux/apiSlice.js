import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/",
  }),
  endpoints: () => ({
    //   updatePost: builder.mutation({
    //     query(queryArg) {
    //       return { url: "?qwe", body: queryArg, method: "POST" };
    //     },
    //   }),
  }),
});

// export const {
//   useQuerySubscription: useGetRestaurantQuerySubscription,
//   useQueryState: useGetRestaurantQueryState,
//   useLazyQuerySubscription: useGetRestaurantLazyQuerySubscription,
// } = apiSlice.endpoints.getRestaurant;
