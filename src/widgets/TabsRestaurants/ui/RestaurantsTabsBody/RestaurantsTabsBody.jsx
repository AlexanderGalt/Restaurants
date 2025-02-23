import { useSelector } from "react-redux";
import { selectAuthorization } from "../../../../app/redux/ui/authSlice/index.js";
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx";
import styles from "./RestaurantsTabsBody.module.css"
import { RestaurantTabs } from "./RestaurantTabs/RestaurantTabs.jsx";

export function RestaurantsTabsBody({ restaurantId, restaurantName, restaurantMenuData, restaurantReviewsData }) {
	const { isAuth } = useSelector(selectAuthorization);

	if (!restaurantMenuData && !restaurantReviewsData) {
		return "У ресторана нет меню и отзывов"
	}

	return (
		<div className={styles['restaurantsTabsBody']}
			key={restaurantId}
		>
			<h3 className={styles.restaurantsTabsBodyName}>
				{restaurantName}
			</h3>

			<RestaurantTabs {... { restaurantMenuData, restaurantReviewsData }} />

			{isAuth && <ReviewForm />}
		</div >
	)
}