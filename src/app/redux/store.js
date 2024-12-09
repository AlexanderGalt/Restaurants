import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants";
import { dishesSlice } from "./entities/dishes";
import { reviewsSlice } from "./entities/reviews";
import { usersSlice } from "./entities/users";
import { authSlice } from "./ui/authSlice";
import { themeSlice } from "./ui/themeSlice";
import { cartSlice } from "./ui/cartSlice";

export const reduxStore = configureStore({
	reducer: {
		[restaurantsSlice.name]: restaurantsSlice.reducer,
		[dishesSlice.name]: dishesSlice.reducer,
		[reviewsSlice.name]: reviewsSlice.reducer,
		[usersSlice.name]: usersSlice.reducer,
		[authSlice.name]: authSlice.reducer,
		[themeSlice.name]: themeSlice.reducer,
		[cartSlice.name]: cartSlice.reducer,
	}
});