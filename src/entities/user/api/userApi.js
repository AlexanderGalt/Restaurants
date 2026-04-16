import { apiSlice } from "@shared/model/redux/apiSlice";
import { userInitialState, usersAdapter } from "../model/usersAdapter";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => `/users`,
      transformResponse(response) {
        return usersAdapter.addMany(userInitialState , response);
      },
    }),
  }),
});

export const { useGetUsersQuery} = userApi;
