import { useSelector } from "react-redux";
import { selectReviewsById } from "../../../../app/redux/entities/reviews";
import styles from "./RestaurantReviewsItem.module.css";

export const RestaurantReviewsItem = ({ id }) => {
	const reviewsItem = useSelector((state) => selectReviewsById(state, id));

	return (
		<li
			className={styles.restaurantReviewsItem}
		>{reviewsItem.text}</li>
	)
}