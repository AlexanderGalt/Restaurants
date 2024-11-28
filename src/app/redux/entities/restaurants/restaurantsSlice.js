import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../../assets/normalized-mock";

export const restaurantsAdapter = createEntityAdapter();
const initialState = restaurantsAdapter.getInitialState(null, normalizedRestaurants);


export const restaurantsSlice = createSlice({
	name: "restaurants",
	initialState,
	reducers: {
		addOneTodoRestaurants: restaurantsAdapter.addOne,
		addManyTodoRestaurants: restaurantsAdapter.addMany,
		updateTodoRestaurants: restaurantsAdapter.updateOne,
		removeTodoRestaurants: restaurantsAdapter.removeOne,
	},
});

// в приложении не используется, но для примера пусть будет:
export const {
	removeTodoRestaurants,
	addOneTodoRestaurants,
	updateTodoRestaurants,
	addManyTodoRestaurants
} = restaurantsSlice.actions;