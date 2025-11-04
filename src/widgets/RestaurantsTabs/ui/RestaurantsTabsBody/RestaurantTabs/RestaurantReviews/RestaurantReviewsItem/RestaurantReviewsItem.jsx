import { useSelector } from "react-redux";
import { selectReviewsById } from "../../../../../../../app/redux/entities/reviews/reviewsSelectors";
import styles from "./RestaurantReviewsItem.module.css";
import { selectUsersById } from "../../../../../../../app/redux/entities/users";

export const RestaurantReviewsItem = ({ id }) => {
  const reviewsItem = useSelector((state) => selectReviewsById(state, id));

  const user = useSelector((state) => selectUsersById(state, reviewsItem.userId));

  return (
    <li className={styles.restaurantReviewsItem}>
      <span className={styles.restaurantReviewsItemUser}>{user?.name}: </span>
      <span className={styles.restaurantReviewsItemtext}>{reviewsItem?.text}</span>
    </li>
  );
};
