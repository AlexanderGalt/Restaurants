import styles from "./counter.module.css"
import classNames from "classnames"

export function Counter({ counterValue, increment, decrement, onChange }) {
	return (
		<div
			className={classNames(styles.counter)}
		>
			<button
				className={classNames(styles.counterBtn)}
				onClick={increment}
			>+</button>

			<input
				className={classNames(styles.counterValue)}
				value={counterValue}
				onChange={onChange}
			></input>

			<button
				className={classNames(styles.counterBtn)}
				onClick={decrement}
			>-</button>
		</div>
	)
};