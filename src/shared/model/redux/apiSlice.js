// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3000",
//   }),
//   endpoints: (builder) => ({
//     updatePost: builder.mutation({
//       query(queryArg) {
//         return { url: "?qwe", body: queryArg, method: "POST" };
//       },
//     }),
//   }),
// });

// export const {
//   useGetRestaurantsQuery,
//   useLazyGetRestaurantQuery,
//   useQweQuery,
//   useGetRestaurantQuery,
//   useUpdatePostMutation,
//   useGetPagesInfiniteQuery,
// } = apiSlice;

// export const {
//   useQuerySubscription: useGetRestaurantQuerySubscription,
//   useQueryState: useGetRestaurantQueryState,
//   useLazyQuerySubscription: useGetRestaurantLazyQuerySubscription,
// } = apiSlice.endpoints.getRestaurant;
