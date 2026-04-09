import styles from "./restaurantReviews.module.css";
import classNames from "classnames";
import { RestaurantReviewsItem } from "./RestaurantReviewsItem/RestaurantReviewsItem.jsx";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRequest } from "../../shared/api/requestsStatus/index";
import { getReviewsByRestaurantId } from "/src/entities/review";
import { selectReviewsByIds } from "/src/entities/review";
import { getUsers } from "@entities/user";

export const RestaurantReviews = () => {
  const { restaurantId, restaurantReviewsData } = useOutletContext();

  const reviewsDataStatus = useRequest(getReviewsByRestaurantId, restaurantId);

  const reviewsDishesData = useSelector((state) => selectReviewsByIds(state, restaurantReviewsData));

  const usersDataStatus = useRequest(getUsers);

  if (usersDataStatus === "rejected" || reviewsDataStatus === "rejected") return "Ошибка при запросе данных отзывов";

  if (usersDataStatus === "pending" || reviewsDataStatus === "pending") return "Loading ...";

  if (!reviewsDishesData?.length) {
    return "Отзывы не загрузились.";
  }

  return (
    <div className={classNames(styles.restaurantReviews)}>
      <ul className={classNames(styles.restaurantReviewsList)}>
        {reviewsDishesData.map((reviewsItem) => (
          <RestaurantReviewsItem key={reviewsItem.id} id={reviewsItem.id} />
        ))}
      </ul>
    </div>
  );
};
