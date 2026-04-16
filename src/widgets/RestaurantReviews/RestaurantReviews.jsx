import styles from "./restaurantReviews.module.css";
import classNames from "classnames";
import { RestaurantReviewsItem } from "./RestaurantReviewsItem/RestaurantReviewsItem.jsx";
import { useOutletContext } from "react-router-dom";
import { useGetReviewsByRestaurantIdQuery } from "@entities/review";
import { useGetUsersQuery } from "@entities/user/api/userApi";

export const RestaurantReviews = () => {
  const { restaurantId } = useOutletContext();

  const { status: reviewsDataStatus, data: reviewsDishesData } = useGetReviewsByRestaurantIdQuery(restaurantId);

  const { status: usersDataStatus } = useGetUsersQuery();

  if (usersDataStatus === "rejected" || reviewsDataStatus === "rejected") return "Ошибка при запросе данных отзывов";

  if (usersDataStatus === "pending" || reviewsDataStatus === "pending") return "Loading ...";

  if (!reviewsDishesData?.length) {
    return "Нет отзывов";
  }

  return (
    <div className={classNames(styles.restaurantReviews)}>
      <ul className={classNames(styles.restaurantReviewsList)}>
        {reviewsDishesData.map((reviewsItemData) => (
          <RestaurantReviewsItem
            key={reviewsItemData.id}
            reviewAuthorId={reviewsItemData.userId}
            reviewText={reviewsItemData.text}
          />
        ))}
      </ul>
    </div>
  );
};
