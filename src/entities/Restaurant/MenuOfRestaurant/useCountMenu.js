import { useState } from "react";

export function useCountMenu() {
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

	return {
		counterValue,
		increment,
		decrement,
	}
};