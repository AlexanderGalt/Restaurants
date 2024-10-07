import { Counter } from "../../../shared/Counter.jsx"
import { useMenuCounter } from "./useMenuCounter.js"

export function MenuCounter() {
	const { counterValue, increment, decrement } = useMenuCounter();
	return <Counter
		counterValue={counterValue}
		increment={increment}
		decrement={decrement}
	/>
}