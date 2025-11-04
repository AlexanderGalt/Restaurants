import { createSelector } from "@reduxjs/toolkit";
import { dishesAdapter } from "./dishesSlice";

const selectDishes = (state) => state.dishes;

export const {
  selectIds: selectDishesIds,
  selectById: selectDishesById,
  selectAll: selectDishesAll,
  selectEntities: selectDishesEntities,
  selectTotal: selectDishesTotlal,
} = dishesAdapter.getSelectors(selectDishes);

export const selectDishesByIds = createSelector(
  [selectDishesEntities, (state, dishesIds) => dishesIds],
  (dishesEntities, dishesIds = []) => dishesIds.map((id) => dishesEntities[id]).filter(Boolean),
);
