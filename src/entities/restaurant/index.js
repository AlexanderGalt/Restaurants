// slice
export { restaurantSlice } from "./model/restaurantSlice.js";

// actions
export { updateRestaurant, addOneRestaurant, removeRestaurant, addManyRestaurants } from "./model/restaurantSlice.js";

// thunks
export { getRestaurants, getRestaurantById } from "./api";

// selectors
export {
  selectRestaurantsIds,
  selectRestaurantById,
  selectFirstValidRestaurant,
  selectRestaurantsAll,
} from "./model/restaurantSelectors.js";
