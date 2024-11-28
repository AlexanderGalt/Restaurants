import { Counter } from "../../../shared/Counter/Counter.jsx"
import { useMenuCounter } from "./useMenuCounter.js"

export function MenuCounter({ id }) {
	const { cartCounter, increment, decrement, onChangeAmount } = useMenuCounter(id);

	return <Counter
		counterValue={cartCounter}
		increment={increment}
		decrement={decrement}
		onChange={onChangeAmount}
	/>
}