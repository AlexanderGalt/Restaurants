import { restaurantsAdapter } from "./restaurantsSlice.js";

export const {
	selectIds: selectRestaurantsIds,
	selectById: selectRestaurantsById,
	selectAll: selectRestaurantsAll,
	selectEntities: selectRestaurantsEntities,
	selectTotal: selectRestaurantsTotlal,
} = restaurantsAdapter.getSelectors((state) => state.restaurants);

export const firstValidRestaurants = (state) => selectRestaurantsAll(state).find((restaurantItem) => restaurantItem.name); // на случай если ресторан с индексом 0 будет без имени, т.е. невалидный. Иначе, если удалить имя у первого ресторана, то первый рендер будет баганый (будет пустой таб).