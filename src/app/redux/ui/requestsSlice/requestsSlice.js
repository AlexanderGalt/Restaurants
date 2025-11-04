import { createSlice } from "@reduxjs/toolkit";

export const requestsSlice = createSlice({
  name: "requests",
  initialState: {},
  selectors: {
    selectRequestStatusById: (state, id) => state[id] || "idle",
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = "pending";
        },
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = "fulfilled";
        },
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { meta }) => {
          state[meta.requestId] = "rejected";
        },
      ),
});

export const { selectRequestStatusById } = requestsSlice.selectors;
