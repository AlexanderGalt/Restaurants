import styles from "./restaurantsTabs.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectFirstValidRestaurant, selectRestaurantsIds, selectRestaurantsAll } from "@entities/restaurant";
import { RestaurantsTabsTitle } from "./RestaurantsTabsTitle/RestaurantsTabsTitle.jsx";
import { useParams, Outlet, Link } from "react-router-dom";
import { reduxStore } from "@shared/model/redux/store";

export const RestaurantsTabs = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  
  const startRestaurantTab = useSelector(selectFirstValidRestaurant); // на случай если ресторан с индексом 0 будет без имени, т.е. невалидный. Иначе, если удалить имя у первого ресторана, то первый рендер будет баганый (будет пустой таб).
  const currentId = useParams()?.restaurantId || startRestaurantTab?.id;

  if (!restaurantsIds.length) return "Рестаранов нет";

  return (
    <>
      <div className={styles["restaurantsTabsWrapper"]}>
        <div className={classNames(styles["restaurantsTabsHead"])}>
          {restaurantsIds.map((restaurantsId) => (
            <RestaurantsTabsTitle key={restaurantsId} restaurantId={restaurantsId} currId={currentId} />
          ))}
        </div>
        <Link to={`/restaurant/${currentId}`}>Ссылка на страницу рестарана</Link>

        <Outlet context={{ currentId }} />
      </div>
    </>
  );
};
