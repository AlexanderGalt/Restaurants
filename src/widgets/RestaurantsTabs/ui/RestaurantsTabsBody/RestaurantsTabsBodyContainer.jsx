import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantsById } from "../../../../app/redux/entities/restaurants";
import { RestaurantsTabsBody } from "./RestaurantsTabsBody";
import { useOutletContext } from "react-router-dom";

export const RestaurantsTabsBodyContainer = () => {
  const { currentId: restaurantId } = useOutletContext();

  const restaurantData = useSelector((state) => selectRestaurantsById(state, restaurantId));

  return (
    <RestaurantsTabsBody
      restaurantId={restaurantId}
      restaurantName={restaurantData?.name}
      restaurantMenuData={restaurantData?.menu}
      restaurantReviewsData={restaurantData?.reviews}
    />
  );
};
