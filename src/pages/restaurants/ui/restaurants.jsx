import { Breadcrumbs } from "@widgets/Breadcrumbs/Breadcrumbs";
import { RestaurantsTabs } from "@widgets/RestaurantsTabs";
import { useGetRestaurantsQuery } from "@entities/restaurant/api";

export const RestaurantsPage = () => {
  const { status} = useGetRestaurantsQuery();

  if (status === "pending") return "loading";

  if (status === "rejected") return "Ошибка загрузки данных всех ресторанов";

  return (
    <>
      <Breadcrumbs />
      <RestaurantsTabs />
      <div>Другие секции страницы ресторанов</div>
    </>
  );
};
