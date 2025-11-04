import { useSelector } from "react-redux";
import { selectAuthorization } from "../../../../app/redux/ui/authSlice/index.js";
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx";
import styles from "./RestaurantsTabsBody.module.css";
import { RestaurantTabs } from "./RestaurantTabs/RestaurantTabs.jsx";

export function RestaurantsTabsBody({ restaurantId, restaurantName, restaurantMenuData, restaurantReviewsData }) {
  const { isAuth } = useSelector(selectAuthorization);
  
  return (
    <div className={styles["restaurantsTabsBody"]}>
      <h3 className={styles.restaurantsTabsBodyName}>{restaurantName}</h3>
      <RestaurantTabs {...{ restaurantId, restaurantMenuData, restaurantReviewsData }} />
      {isAuth && <ReviewForm />}
    </div>
  );
}
