import styles from "./restaurantReviews.module.css"
import classNames from "classnames"
import { RestaurantReviewsItem } from "./RestaurantReviewsItem/RestaurantReviewsItem.jsx"

export function RestaurantReviews({ reviewsData }) {
	if (!reviewsData.length) {
		return null
	}

	return (
		<div className={classNames(styles.restaurantReviews)}>
			<h4 className={classNames(styles.restaurantReviewsTitle)}>Отзывы</h4>
			<ul className={classNames(styles.restaurantReviewsList)}>
				{reviewsData.map(reviewsItem => (
					<RestaurantReviewsItem
						key={reviewsItem}
						id={reviewsItem}
					/>
				))}
			</ul>
		</div>
	)
}