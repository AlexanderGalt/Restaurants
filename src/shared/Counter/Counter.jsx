import styles from "./counter.module.css"
import classNames from "classnames"

export function Counter({ counterValue, increment, decrement }) {
	return (
		<div
			className={classNames(styles.counter)}
		>
			<button
				className={classNames(styles.counterBtn)}
				onClick={increment}
			>+</button>

			<div className={classNames(styles.counterValue)}>
				{counterValue}
			</div>

			<button
				className={classNames(styles.counterBtn)}
				onClick={decrement}
			>-</button>
		</div>
	)
};