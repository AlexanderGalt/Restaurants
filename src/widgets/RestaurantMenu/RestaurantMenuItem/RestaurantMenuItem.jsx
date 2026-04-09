import { useSelector } from "react-redux";
import { MenuCounter } from "../MenuCounter";
import styles from "./RestaurantMenuItem.module.css";
import { selectAuthorization } from "../../../features/authorization";
import { Link } from "react-router-dom";

export const RestaurantMenuItem = ({ id, name }) => {
  const { isAuth } = useSelector(selectAuthorization);

  return (
    <li className={styles.restaurantMenuItem}>
      <Link to={`/dish/${id}`}>{name}</Link>
      {isAuth && <MenuCounter id={id} />}
    </li>
  );
};
