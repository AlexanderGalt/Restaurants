import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../../../app/redux/entities/restaurants"
import { RestaurantBody } from "./RestaurantBody";

export const RestaurantBodyContainer = ({ id }) => {
	const restaurant = useSelector((state) => selectRestaurantsById(state, id));

	return (
		<RestaurantBody
			id={restaurant.id}
			restaurantName={restaurant.name}
			restaurantMenu={restaurant.menu}
			restaurantReviews={restaurant.reviews}
		/>
	)
}