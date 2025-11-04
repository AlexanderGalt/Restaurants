import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantId } from "./getDishesByRestaurantId";
import { getDishesById } from "./getDishesById";

export const dishesAdapter = createEntityAdapter();
const initialState = dishesAdapter.getInitialState();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  extraReducers: (builder) => {
    builder
      .addAsyncThunk(getDishesByRestaurantId, {
        fulfilled(state, action) {
          dishesAdapter.setMany(state, action.payload);
        },
      })
      .addAsyncThunk(getDishesById, {
        fulfilled(state, action) {
          dishesAdapter.setOne(state, action.payload);
        },
      });
  },
});
