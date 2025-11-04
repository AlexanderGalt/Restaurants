import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../../../widgets/Breadcrumbs/Breadcrumbs";
import { getRestaurantById } from "../../../app/redux/entities/restaurants/index";
import { useRequest } from "../../../app/redux/ui/requestsSlice/index";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../../../app/redux/entities/restaurants";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const requestStatus = useRequest(getRestaurantById, restaurantId);
  const requestData = useSelector((state) => selectRestaurantsById(state, restaurantId));

  if (requestStatus === "pending") return "loading";

  if (requestStatus === "rejected") return "Ошибка загрузки данных ресторана: " + restaurantId;

  return (
    <>
      <Breadcrumbs name={requestData?.name} />
      <div className="Wrapper">
        <span>"Страница ресторана" + {requestData?.name}</span>
        <div>Наполнение станицы ондого ресторана</div>
      </div>
    </>
  );
};
