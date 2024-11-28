import { useSelector } from "react-redux";
import { selectCart } from "../../app/redux/ui/cartSlice"
import { CartItem } from "./CartItem.jsx"

export const Cart = () => {
	const cart = useSelector(selectCart);

	if (!cart.length) return null;

	return (
		<div className="cart">
			<ul className="cartList">
				{cart.map(({ productId, amount }) =>
					<li key={productId} className="cartListLi">
						<CartItem id={productId} amount={amount} />
					</li>
				)}
			</ul>
		</div>
	)
}