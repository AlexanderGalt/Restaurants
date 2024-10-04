import { Counter } from "../../../shared/Counter.jsx"
import { useCountMenu } from "./useCountMenu.js"

export function CounterOfMenu() {
	const { counterValue, increment, decrement } = useCountMenu();
	return <Counter
		counterValue={counterValue}
		increment={increment}
		decrement={decrement}
	/>
}