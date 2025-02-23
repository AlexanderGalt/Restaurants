import { useOutletContext } from "react-router-dom"
import { RestaurantMenu } from "../RestaurantMenu/RestaurantMenu";
import { RestaurantReviews } from "../RestaurantReviews/RestaurantReviews";

export const RestaurantsTabsBodyDefault = () => {
	const { restaurantMenuData, restaurantReviewsData } = useOutletContext();

	if (restaurantMenuData) return <RestaurantMenu restaurantMenuData={restaurantMenuData} />
	if (restaurantReviewsData) return <RestaurantReviews restaurantReviewsData={restaurantReviewsData} />
}