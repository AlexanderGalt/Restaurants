import styles from "./restaurantMenu.module.css";
import classNames from "classnames";
import { RestaurantMenuItem } from "./RestaurantMenuItem/RestaurantMenuItem.jsx";
import { useOutletContext } from "react-router-dom";
import { useGetDishesByRestaurantIdQuery } from "@entities/dish/api/dishApi";

export const RestaurantMenu = () => {
  const { restaurantId, restaurantMenuData } = useOutletContext();
  const { status: menuDataStatus, data: menuDishesData } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (menuDataStatus === "pending") return "Loading ...";

  if (!restaurantMenuData.length) {
    return `У этого ресторана нет блюд`;
  }

  if (!menuDishesData.length) {
    return `Блюда текущего ресторана не загрузились`;
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
