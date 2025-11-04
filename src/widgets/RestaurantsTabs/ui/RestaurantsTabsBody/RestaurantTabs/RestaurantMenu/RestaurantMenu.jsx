import styles from "./restaurantMenu.module.css";
import classNames from "classnames";
import { RestaurantMenuItem } from "./RestaurantMenuItem/RestaurantMenuItem.jsx";
import { useOutletContext, useParams } from "react-router-dom";
import { useRequest } from "../../../../../../app/redux/ui/requestsSlice/index";
import { getDishesByRestaurantId, selectDishesByIds } from "../../../../../../app/redux/entities/dishes/index.js";
import { useSelector } from "react-redux";

export function RestaurantMenu() {
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
}
