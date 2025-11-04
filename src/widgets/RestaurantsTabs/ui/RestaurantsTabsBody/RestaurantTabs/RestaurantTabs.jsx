import { NavLink, Outlet } from "react-router-dom";
import styles from "./restaurantTabs.module.css";
import classNames from "classnames";

export const RestaurantTabs = ({ restaurantId, restaurantMenuData, restaurantReviewsData }) => {
  const path = location.pathname;
  const segments = path.split("/").filter(Boolean);
  const lastSlug = segments[segments.length - 1];

  if (!restaurantMenuData && !restaurantReviewsData) {
    return `У ресторана ${"id: " + restaurantId} нет меню и отзывов`;
  }

  return (
    <div className={styles["restaurantTabs"]}>
      <div className={styles["restaurantTabsHead"]}>
        {restaurantMenuData && (
          <NavLink
            to="menu"
            className={({ isActive }) => {
              return classNames(styles.restaurantTabsTitle, {
                // [styles.active]: isActive || !restaurantId, // - не подходит т.к. появляется баг при url: http://localhost:5173/restaurants/reviews
                [styles.active]: lastSlug !== "reviews",
              });
            }}
          >
            Menu
          </NavLink>
        )}
        {restaurantReviewsData && (
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              classNames(styles.restaurantTabsTitle, {
                [styles.active]: isActive || (!restaurantId && !restaurantMenuData),
              })
            }
          >
            Reviews
          </NavLink>
        )}
      </div>
      <div className={styles["restaurantsTabsBody"]}>
        <Outlet context={{ restaurantMenuData, restaurantReviewsData, restaurantId }} />
      </div>
    </div>
  );
};
