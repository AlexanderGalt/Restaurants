import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../../assets/normalized-mock";
import { getRestaurants } from "./getRestaurants";
import { getRestaurantById } from "./getRestaurantById";

export const restaurantsAdapter = createEntityAdapter({ requestStatus: "idle" });
// const initialState = restaurantsAdapter.getInitialState(null, normalizedRestaurants);

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: restaurantsAdapter.getInitialState(),
  reducers: {
    addOneTodoRestaurants: restaurantsAdapter.addOne,
    addManyTodoRestaurants: restaurantsAdapter.addMany,
    updateTodoRestaurants: restaurantsAdapter.updateOne,
    removeTodoRestaurants: restaurantsAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addAsyncThunk(getRestaurants, {
        fulfilled(state, action) {
          state.requestStatus = "fulfilled";
          restaurantsAdapter.setAll(state, action.payload);
        },
      })
      .addAsyncThunk(getRestaurantById, {
        fulfilled(state, action) {
          restaurantsAdapter.setOne(state, action.payload);
        },
      });
  },
});

// в приложении не используется, но для примера пусть будет:
export const { removeTodoRestaurants, addOneTodoRestaurants, updateTodoRestaurants, addManyTodoRestaurants } = restaurantsSlice.actions;
