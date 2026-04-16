import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MenuCounter } from "../../../widgets/RestaurantMenu/MenuCounter";
import { selectAuthorization } from "../../../features/authorization";
import { useGetDishByIdQuery } from "@entities/dish";

export const DishPage = () => {
  const { dishId } = useParams();
  const { data: dishData, status: dishDataStatus } = useGetDishByIdQuery(dishId);
  const { isAuth } = useSelector(selectAuthorization);

  if (dishDataStatus === "pending") return "Loading ...";

  return (
    <>
      <section className="Wrapper">
        <h2>{dishData?.name}</h2>
      </section>
      <section className="dishDescription Wrapper">
        <ul>
          <li>Price: {dishData?.price}$</li>
          <li>ingredients: {dishData?.ingredients.join(", ")} </li>
        </ul>
      </section>
      {isAuth && (
        <section className="Wrapper">
          Добавить в корзину: <MenuCounter id={dishData?.id} />
        </section>
      )}
    </>
  );
};
