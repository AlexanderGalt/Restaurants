export { restaurantApi } from "./api/restaurantApi";

// selectors
export {
  selectRestaurantsIds,
  selectRestaurantById,
  selectFirstValidRestaurant,
  selectRestaurantsAll,
} from "./model/restaurantSelectors.js";

export { useGetRestaurantsQuery, useGetRestaurantByIdQuery } from "./api";
