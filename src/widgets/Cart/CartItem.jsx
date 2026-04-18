import { useGetDishByIdQuery } from "@entities/dish";

export const CartItem = ({ id, amount }) => {
  const { data: dishData } = useGetDishByIdQuery(id);

  return <span className="cartItem">{`${dishData?.name}: ${amount}`}</span>;
};
