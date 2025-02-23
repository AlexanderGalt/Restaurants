import { useDispatch, useSelector } from "react-redux";
import { actionDecrement, actionIncrement, actionSetAmount, selectCartProductById } from "../../../../../../app/redux/ui/cartSlice";

export function useMenuCounter(id) {
	const dispatch = useDispatch();
	const cartCounter = useSelector((state) => selectCartProductById(state, id)) || 0;

	const increment = () => {
		if (cartCounter < 9) dispatch(actionIncrement(id));
	}

	const decrement = () => {
		if (cartCounter > 0) dispatch(actionDecrement(id));
	};

	const onChangeAmount = (e) => {
		const newAmount = e.nativeEvent.data;
		const isNumber = (value) => /^-?\d+(\.\d+)?$/.test(value);

		if (
			isNumber(newAmount) &&
			newAmount >= 0 &&
			newAmount <= 9
		) dispatch(actionSetAmount({ id, newAmount }));
	};

	return {
		cartCounter,
		increment,
		decrement,
		onChangeAmount,
	}
};