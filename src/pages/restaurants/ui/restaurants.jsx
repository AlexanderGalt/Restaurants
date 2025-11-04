import { Breadcrumbs } from "../../../widgets/Breadcrumbs/Breadcrumbs";
import { RestaurantsTabs } from "../../../widgets/RestaurantsTabs";
import { getRestaurants } from "../../../app/redux/entities/restaurants";
import { useRequest } from "../../../app/redux/ui/requestsSlice/index";

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
