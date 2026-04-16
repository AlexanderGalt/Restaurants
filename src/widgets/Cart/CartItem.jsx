import { useGetDishByIdQuery } from "@entities/dish";

export const CartItem = ({ id, amount }) => {
  const { data: dishData } = useGetDishByIdQuery(id);
  const { name: cartItemName } = dishData;

  return <span className="cartItem">{`${cartItemName}: ${amount}`}</span>;
};
