import { useSelector } from "react-redux";
import styles from "./RestaurantReviewsItem.module.css";
import { selectUserById } from "@entities/user";
import { useState } from "react";
import { selectAuthorization } from "@features/authorization";
import { ReviewEdit } from "./ReviewEdit.jsx";

export const RestaurantReviewsItem = ({ reviewAuthorId, reviewText, reviewId }) => {
  const reviewAuthorData = useSelector((state) => selectUserById(state, reviewAuthorId));

  const [mode, setMode] = useState("view"); // "view" | "editing"

  const { id: currentUserId, isAuth } = useSelector(selectAuthorization);

  return (
    <li className={styles.restaurantReviewsItem}>
      <span className={styles.restaurantReviewsItemUser}>{reviewAuthorData.name}: </span>

      {mode === "editing" && isAuth ? (
        <ReviewEdit defaultReviewText={reviewText} {...{ setMode, reviewId }} />
      ) : (
        <span className={styles.restaurantReviewsItemtext}>{reviewText}</span>
      )}

      {currentUserId === reviewAuthorId && (
        <div
          onClick={() => {
            setMode("editing");
          }}
          className={styles.restaurantReviewsItemEditButton}
        >
          Редактировать
        </div>
      )}
    </li>
  );
};
