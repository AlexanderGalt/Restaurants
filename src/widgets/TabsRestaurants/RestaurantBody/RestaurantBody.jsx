import { useSelector } from "react-redux";
import { selectAuthorization } from "../../../app/redux/ui/AuthSlice.js";
import { RestaurantMenu } from "../RestaurantMenu/RestaurantMenu.jsx";
import { RestaurantReviews } from "../RestaurantReviews/RestaurantReviews.jsx";
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx";
import styles from "./restaurantBody.module.css"

export function RestaurantBody({ restaurantId, restaurantName, restaurantMenu, restaurantReviews }) {
	const { isAuth } = useSelector(selectAuthorization);
	return (
		<div className={styles['restaurantsTabsBody']}
			key={restaurantId}
		>
			<h3 className={styles.restaurantsTabsBodyName}>
				{restaurantName}
			</h3>
			<RestaurantMenu menuData={restaurantMenu} />
			<RestaurantReviews reviewsData={restaurantReviews} />

			{isAuth && <ReviewForm />}
		</div >
	)
}