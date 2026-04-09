import { createSlice } from "@reduxjs/toolkit";
import { restaurantInitialState, restaurantsAdapter } from "./restaurantsAdapter";
import { getRestaurants } from "../api/getRestaurants";
import { getRestaurantById } from "../api/getRestaurantById";
import { rootReducer } from "@shared/model/redux/store";
import { reduxStore } from "@shared/model/redux/store";

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: restaurantInitialState,
  reducers: {
    addOneRestaurant: restaurantsAdapter.addOne,
    addManyRestaurants: restaurantsAdapter.addMany,
    updateRestaurant: restaurantsAdapter.updateOne,
    removeRestaurant: restaurantsAdapter.removeOne,
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
// action creators
export const { removeRestaurant, addOneRestaurant, updateRestaurant, addManyRestaurants } = restaurantSlice.actions;

// вставляем (инжектим) слайз ресторанов в глобальный стор.
const rootReducerWithRestaurantSlice = rootReducer.inject(restaurantSlice);
reduxStore.replaceReducer(rootReducerWithRestaurantSlice);

// Расширяем TS-тип хранилища глобального стора вставкой типа нашего слайза. Т.е. вставляем тип нашего хранилища в тип глобальног стора.
// declare module './shared/model/redux/store' {
// 	// WithSlice utility assumes reducer is under slice.reducerPath
// 	export interface LazyLoadedSlices extends WithSlice<typeof restaurantSlice> {}
// }
