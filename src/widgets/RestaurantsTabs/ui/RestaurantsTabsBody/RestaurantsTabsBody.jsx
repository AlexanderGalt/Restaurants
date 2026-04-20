import { useSelector } from "react-redux";
import { selectAuthorization } from "@features/authorization/index.js";
import styles from "./RestaurantsTabsBody.module.css";
import { RestaurantTabs } from "./RestaurantTabs/RestaurantTabs.jsx";
import { ReviewForm } from "@features/review";

export function RestaurantsTabsBody({ restaurantId, restaurantName, restaurantMenuData, restaurantReviewsData }) {
  const { isAuth } = useSelector(selectAuthorization);

  return (
    <div className={styles["restaurantsTabsBody"]}>
      <h3 className={styles.restaurantsTabsBodyName}>{restaurantName}</h3>

      <RestaurantTabs {...{ restaurantId, restaurantMenuData, restaurantReviewsData }} />

      {isAuth && <ReviewForm {...{ restaurantId }} />}
    </div>
  );
}
