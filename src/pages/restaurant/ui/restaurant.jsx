import { useParams } from "react-router-dom";
import { Breadcrumbs } from "@widgets/Breadcrumbs";
import { useSelector } from "react-redux";
import { useRequest } from "@shared/api/requestsStatus";
import { getRestaurantById } from "@entities/restaurant/api/getRestaurantById";
import { selectRestaurantById } from "@entities/restaurant";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const requestStatus = useRequest(getRestaurantById, restaurantId);
  const requestData = useSelector((state) => selectRestaurantById(state, restaurantId));

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
