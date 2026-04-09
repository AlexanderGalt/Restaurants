import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
// import { dishesAdapter } from "./dishesSlice";

export const dishesAdapter = createEntityAdapter();

const selectDishesData = (state) => state.dishes;

export const {
  selectIds: selectDishesIds,
  selectById: selectDisheById,
  selectAll: selectDishesAll,
  selectEntities: selectDishesEntities,
  selectTotal: selectDishesTotlal,
} = dishesAdapter.getSelectors(selectDishesData);

export const selectDishesByIds = createSelector(
  [selectDishesEntities, (state, dishesIds) => dishesIds],
  (dishesEntities, dishesIds = []) => dishesIds.map((id) => dishesEntities[id]).filter(Boolean),
);
