import { useOutletContext } from "react-router-dom";
import { RestaurantMenu } from "../RestaurantTabs/RestaurantMenu/RestaurantMenu";
import { RestaurantReviews } from "../RestaurantTabs/RestaurantReviews/RestaurantReviews";

export const RestaurantsTabsBodyDefault = () => {
  const { restaurantMenuData, restaurantReviewsData } = useOutletContext();
  if (restaurantMenuData) return <RestaurantMenu />;
  if (restaurantReviewsData) return <RestaurantReviews />;
};
