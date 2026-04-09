import { createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantId } from "../api/getDishesByRestaurantId";
import { getDishesById } from "../api/getDishesById";
import { reduxStore, rootReducer } from "../../../shared/model/redux/store";
import { disheInitialState, dishesAdapter } from "./dishesAdapter";

export const dishSlice = createSlice({
  name: "dishes",
  initialState: disheInitialState,
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

// вставляем (инжектим) слайз блюд в глобальный стор.
export const rootReducerWithDishSlice = rootReducer.inject(dishSlice);
reduxStore.replaceReducer(rootReducerWithDishSlice);
