import { useSelector } from "react-redux";
import { selectDisheById } from "/src/entities/dish";

export const CartItem = ({ id, amount }) => {
  const { name: cartItemName } = useSelector((state) => selectDisheById(state, id), [id]);

  return <span className="cartItem">{`${cartItemName}: ${amount}`}</span>;
};
