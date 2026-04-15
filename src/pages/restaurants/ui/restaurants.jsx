// import { useRequest } from "@shared/api/requestsStatus";
import { Breadcrumbs } from "@widgets/Breadcrumbs/Breadcrumbs";
import { RestaurantsTabs } from "@widgets/RestaurantsTabs";
// import { getRestaurants } from "@entities/restaurant";
import { useGetRestaurantsQuery } from "@entities/restaurant/api";

export const RestaurantsPage = () => {
  const { status, data } = useGetRestaurantsQuery();
  
  if (status === "pending") return "loading";

  if (status === "rejected") return "Ошибка загрузки данных всех ресторанов";

  if (!data) return null; // !!!

  return (
    <>
      <Breadcrumbs />
      <RestaurantsTabs />
      <div>Другие секции страницы ресторанов</div>
    </>
  );
};
