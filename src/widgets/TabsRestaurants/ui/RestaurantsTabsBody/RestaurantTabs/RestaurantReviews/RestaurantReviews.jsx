import styles from "./restaurantReviews.module.css"
import classNames from "classnames"
import { RestaurantReviewsItem } from "./RestaurantReviewsItem/RestaurantReviewsItem.jsx"
import { useOutletContext } from "react-router-dom";

export function RestaurantReviews() {
	const { restaurantReviewsData } = useOutletContext();

	if (!restaurantReviewsData.length) {
		return null
	}

	return (
		<div className={classNames(styles.restaurantReviews)}>
			<ul className={classNames(styles.restaurantReviewsList)}>
				{restaurantReviewsData.map(reviewsItem => (
					<RestaurantReviewsItem
						key={reviewsItem}
						id={reviewsItem}
					/>
				))}
			</ul>
		</div>
	)
}