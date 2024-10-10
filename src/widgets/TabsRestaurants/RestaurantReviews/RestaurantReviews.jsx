import styles from "./restaurantReviews.module.css"
import classNames from "classnames"

export function RestaurantReviews({ reviewsData }) {
	if (!reviewsData.length) {
		return null
	}

	return (
		<div className={classNames(styles.restaurantReviews)}>
			<h4 className={classNames(styles.restaurantReviewsTitle)}>Отзывы</h4>
			<ul className={classNames(styles.restaurantReviewsList)}>
				{reviewsData.map(reviewsItem => (
					<li
						key={reviewsItem.id}
						className={classNames(styles.restaurantReviewsItem)}
						data-rating={reviewsItem.rating}
						data-user={reviewsItem.user}
					>{reviewsItem.text}</li>
				))}
			</ul>
		</div>
	)
}