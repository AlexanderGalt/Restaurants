import { useSelector } from "react-redux";
import styles from "./RestaurantReviewsItem.module.css";
import { selectUserById } from "@entities/user";

export const RestaurantReviewsItem = ({ reviewAuthorId, reviewText }) => {
  const reviewAuthorData = useSelector((state) => selectUserById(state, reviewAuthorId));
  return (
    <li className={styles.restaurantReviewsItem}>
      <span className={styles.restaurantReviewsItemUser}>{reviewAuthorData.name}: </span>
      <span className={styles.restaurantReviewsItemtext}>{reviewText}</span>
    </li>
  );
};
