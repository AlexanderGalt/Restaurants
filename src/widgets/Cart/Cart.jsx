import { useSelector } from "react-redux";
import { selectCart } from "../../app/redux/ui/cartSlice"
import { CartItem } from "./CartItem.jsx"

// --------------------------------------------------------------------------------------------------------------
// Этот варинт для красоты, т.к. смысла он не имеет, т.к. невозможно сценарий при котором изменился порядок позиций положенных в козину и при это не произошёл ререндер коризны, т.к. изменение порядка позиций в коризну - это всегда добавление и удаление товаров в корзине, т.к. на это всегда отреагирует наш слайс. Т.е. невозможно изменить порядок позиций в корзине не вызвав рерндера компонента корзины. Следовательно нет смысла предусматиривать чтобы наша функция сравнение коризн сравнивала массивы не образая внимания на разницу в порядке элементов, т.к. он всегда будет одинаковый.
// const isEqualCart = (a, b) => { // если мы не хотим ререндерить коризну при изменении порядка поизиий в ней. 
// 	if (a.length !== b.length) return false;

// 	const isEqualCartItem = (a, b) => ((a.productId === b.productId) && (a.amount === b.amount)) ? true : false;

// 	return a.every((elA) => b.some((elB) => isEqualCartItem(elA, elB)));
// };
// --------------------------------------------------------------------------------------------------------------


const isEqualCart = (a, b) => { // если мы хотим ререндерить коризну при изменении порядка поизиий в ней.
	const isEqualCartItem = (a, b) => ((a.productId === b.productId) && (a.amount === b.amount)) ? true : false;

	return a.length === b.length && a.every((el, index) => isEqualCartItem(el, b[index]));
};

// однострочная версия:
// const isEqualCart = (a, b) => a.length === b.length && a.every((el, index) => ((el.productId === b[index].productId) && (el.amount === b[index].amount)));

export const Cart = () => {
	const cart = useSelector(selectCart, isEqualCart); // Чтобы пофиксить лишние рерндеры компонента-корзины при каждом рандомном диспатче нужно написать свою функцию "isEqual" для второго параметра для хука "useSelector()".

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