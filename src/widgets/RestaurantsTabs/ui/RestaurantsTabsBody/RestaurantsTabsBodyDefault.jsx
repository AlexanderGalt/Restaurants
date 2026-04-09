import { useOutletContext } from "react-router-dom";

export const RestaurantsTabsBodyDefault = ({ RestaurantMenu, RestaurantReviews }) => {
  const { restaurantMenuData, restaurantReviewsData } = useOutletContext();

  if (restaurantMenuData) return <RestaurantMenu />;

  if (restaurantReviewsData) return <RestaurantReviews />;
};
