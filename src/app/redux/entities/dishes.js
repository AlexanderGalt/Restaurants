import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../assets/normalized-mock";

export const dishesAdapter = createEntityAdapter();
const initialState = dishesAdapter.getInitialState(null, normalizedDishes);

export const dishesSlice = createSlice({
	name: "dishes",
	initialState,
});

export const {
	selectIds: selectDishesIds,
	selectById: selectDishesById,
	selectAll: selectDishesAll,
	selectEntities: selectDishesEntities,
	selectTotal: selectDishesTotlal,
} = dishesAdapter.getSelectors((state) => state.dishes);