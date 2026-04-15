import { restaurantApi } from "../api/restaurant.api";
import { restaurantInitialState, restaurantsAdapter } from "./restaurantsAdapter";

const selectRestaurantsResult = restaurantApi.endpoints.getRestaurants.select();

const selectRestaurantsData = (state) => selectRestaurantsResult(state).data ?? restaurantInitialState;

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
  selectAll: selectRestaurantsAll,
  selectEntities: selectRestaurantsEntities,
  selectTotal: selectRestaurantsTotlal,
} = restaurantsAdapter.getSelectors(selectRestaurantsData);

export const selectFirstValidRestaurant = (state) => {
  return selectRestaurantsAll(state).find((restaurantItem) => restaurantItem.name); // на случай если ресторан с индексом 0 будет без имени, т.е. невалидный. Иначе, если удалить имя у первого ресторана, то первый рендер будет баганый (будет пустой таб).
};
