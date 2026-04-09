import styles from "./restaurantMenu.module.css";
import classNames from "classnames";
import { RestaurantMenuItem } from "./RestaurantMenuItem/RestaurantMenuItem.jsx";
import { useOutletContext } from "react-router-dom";
import { useRequest } from "@shared/api/requestsStatus/index";
import { getDishesByRestaurantId, selectDishesByIds } from "@entities/dish";
import { useSelector } from "react-redux";

export const RestaurantMenu = () => {
  const { restaurantId, restaurantMenuData } = useOutletContext();
  const menuDataStatus = useRequest(getDishesByRestaurantId, restaurantId);
  const menuDishesData = useSelector((state) => selectDishesByIds(state, restaurantMenuData));

  if (menuDataStatus === "pending") return "Loading ...";

  if (!menuDishesData?.length) {
    return `Блюда не загрузились`;
  }

  return (
    <div className={classNames(styles.restaurantMenu)}>
      <ul className={classNames(styles.restaurantMenuList)}>
        {menuDishesData.map((dishe) => (
          <RestaurantMenuItem key={dishe?.id} id={dishe?.id} name={dishe?.name} />
        ))}
      </ul>
    </div>
  );
};
