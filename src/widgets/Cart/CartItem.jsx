import { useSelector } from "react-redux";
import { selectDishesById } from "../../app/redux/entities/dishes";

export const CartItem = ({ id, amount }) => {
	const { name: cartItemName } = useSelector((state) => selectDishesById(state, id), [id]);

	return (
		<span className="cartItem">{`${cartItemName}: ${amount}`}</span>
	)
}