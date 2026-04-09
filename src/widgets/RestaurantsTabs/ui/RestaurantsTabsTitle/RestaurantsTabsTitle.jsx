import styles from "./RestaurantsTabsTitle.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "/src/entities/restaurant";

export const RestaurantsTabsTitle = ({ restaurantId, currId }) => {
  const { name, menu, reviews } = useSelector((state) => selectRestaurantById(state, restaurantId));
  let url = restaurantId;

  if (menu) url += "/menu";
  else if (reviews) url += "/reviews";

  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        classNames(styles.restaurantsTabsTitle, {
          [styles.restaurantsTabsTitleActive]: isActive || currId === restaurantId,
        })
      }
    >
      {name}
    </NavLink>
  );
};
