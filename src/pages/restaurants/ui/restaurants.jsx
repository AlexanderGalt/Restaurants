import { useRequest } from "@shared/api/requestsStatus";
import { Breadcrumbs } from "@widgets/Breadcrumbs/Breadcrumbs";
import { RestaurantsTabs } from "@widgets/RestaurantsTabs";
import { getRestaurants } from "@entities/restaurant";

export const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === "pending") return "loading";

  if (requestStatus === "rejected") return "Ошибка загрузки данных всех ресторанов";

  return (
    <>
      <Breadcrumbs />
      <RestaurantsTabs />
      <div>Другие секции страницы ресторанов</div>
    </>
  );
};
