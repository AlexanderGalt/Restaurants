import { useSelector } from "react-redux";
import styles from "./RestaurantReviewsItem.module.css";
import { selectUserById } from "@entities/user";
import { selectAuthorization } from "@features/authorization";
import { useSearchParams } from "react-router-dom";

export const RestaurantReviewsItem = ({ reviewAuthorId, reviewText, reviewId }) => {
  const reviewAuthorData = useSelector((state) => selectUserById(state, reviewAuthorId));
  const [searchParams, setSearchParams] = useSearchParams();

  const { id: currentUserId, isAuth } = useSelector(selectAuthorization);

  const editReviewHandler = () => {
    setSearchParams((prevSearchParams) => {
      const nextSearchParams = new URLSearchParams(prevSearchParams);
      nextSearchParams.set("editingReviewId", reviewId);
      return nextSearchParams;
    });
  };

  return (
    <li className={styles.restaurantReviewsItem}>
      <div>{searchParams.get("editingReviewId") === reviewId && isAuth && "Этот отзыв сейчас редактируется"}</div>
      <span className={styles.restaurantReviewsItemUser}>{reviewAuthorData.name}: </span>

      <span className={styles.restaurantReviewsItemtext}>{reviewText}</span>

      {currentUserId === reviewAuthorId && (
        <div onClick={editReviewHandler} className={styles.restaurantReviewsItemEditButton}>
          Редактировать
        </div>
      )}
    </li>
  );
};
