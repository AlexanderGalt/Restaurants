import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../api/getUsers";
import { usersAdapter, userInitialState } from "./usersAdapter";
import { reduxStore, rootReducer } from "../../../shared/model/redux/store";

export const userSlice = createSlice({
  name: "users",
  initialState: userInitialState,
  extraReducers: (builder) =>
    builder.addAsyncThunk(getUsers, {
      fulfilled(state, action) {
        state.requestStatus = "fulfilled";
        usersAdapter.setAll(state, action.payload);
      },
    }),
});

// вставляем (инжектим) слайз сользователей в глобальный стор.
const rootReducerWithReviewSlice = rootReducer.inject(userSlice);
reduxStore.replaceReducer(rootReducerWithReviewSlice);
