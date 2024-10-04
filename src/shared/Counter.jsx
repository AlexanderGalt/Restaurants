import { useState } from 'react'

export function Counter() {
	const [counterValue, setCounter] = useState(0);

	const increment = () => {
		if (counterValue < 5) {
			setCounter(counterValue + 1);
		};
	}

	const decrement = () => {
		if (counterValue > 0) {
			setCounter(counterValue - 1);
		}
	};

	return (
		<>
			<button onClick={increment}>+</button>
			{counterValue}
			<button onClick={decrement}>-</button>
		</>
	)
};