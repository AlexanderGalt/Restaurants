import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./getUsers";

export const usersAdapter = createEntityAdapter();
console.dir(usersAdapter);
const initialState = usersAdapter.getInitialState({ requestStatus: "idle" });

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) =>
    builder.addAsyncThunk(getUsers, {
      fulfilled(state, action) {
        state.requestStatus = "fulfilled";
        usersAdapter.setAll(state, action.payload);
      },
    }),
});
