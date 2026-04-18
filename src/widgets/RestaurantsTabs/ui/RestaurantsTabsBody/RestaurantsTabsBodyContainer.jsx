import { useSelector } from "react-redux";
import { selectRestaurantById } from "@entities/restaurant";
import { RestaurantsTabsBody } from "./RestaurantsTabsBody";
import { useOutletContext } from "react-router-dom";

export const RestaurantsTabsBodyContainer = () => {
  const { currentId: restaurantId } = useOutletContext(); 

  const restaurantData = useSelector((state) => selectRestaurantById(state, restaurantId));

  return (
    <RestaurantsTabsBody
      restaurantId={restaurantId}
      restaurantName={restaurantData?.name}
      restaurantMenuData={restaurantData?.menu}
      restaurantReviewsData={restaurantData?.reviews}
    />
  );
};
