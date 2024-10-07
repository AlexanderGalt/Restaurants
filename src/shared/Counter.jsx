export function Counter({ counterValue, increment, decrement }) {
	return (
		<>
			<button onClick={increment}>+</button>
			{counterValue}
			<button onClick={decrement}>-</button>
		</>
	)
};