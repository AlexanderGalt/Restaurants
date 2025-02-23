import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../../../../app/redux/entities/restaurants"
import { RestaurantsTabsBody } from "./RestaurantsTabsBody";
import { useOutletContext } from "react-router-dom";

export const RestaurantsTabsBodyContainer = () => {
	const { currId } = useOutletContext();
	const restaurantData = useSelector((state) => selectRestaurantsById(state, currId));

	return (
		<RestaurantsTabsBody
			id={currId}
			restaurantName={restaurantData.name}
			restaurantMenuData={restaurantData.menu}
			restaurantReviewsData={restaurantData.reviews}
		/>
	)
}