import { useSelector } from "react-redux";
import { selectReviewsById } from "@entities/review";
import styles from "./RestaurantReviewsItem.module.css";
import { selectUserById } from "@entities/user";

export const RestaurantReviewsItem = ({ id }) => {
  const reviewsItem = useSelector((state) => selectReviewsById(state, id));

  const user = useSelector((state) => selectUserById(state, reviewsItem.userId));

  return (
    <li className={styles.restaurantReviewsItem}>
      <span className={styles.restaurantReviewsItemUser}>{user?.name}: </span>
      <span className={styles.restaurantReviewsItemtext}>{reviewsItem?.text}</span>
    </li>
  );
};
