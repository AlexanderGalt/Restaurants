import { useParams } from "react-router-dom";
import { Breadcrumbs } from "@widgets/Breadcrumbs";
import { useGetRestaurantByIdQuery } from "@entities/restaurant/api/restaurantApi";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  const { status, data } = useGetRestaurantByIdQuery(restaurantId);

  if (status === "pending") return "loading";

  if (status === "rejected") return "Ошибка загрузки данных всех ресторанов";

  return (
    <>
      <Breadcrumbs name={data?.name} />
      <div className="Wrapper">
        <span>"Страница ресторана" + {data?.name}</span>
        <div>Наполнение станицы ондого ресторана</div>
      </div>
    </>
  );
};
