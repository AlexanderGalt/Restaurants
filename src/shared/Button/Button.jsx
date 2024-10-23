import styles from "./button.module.css"
import classNames from "classnames"

export function Button({ onClick, className, children }) {
	return (
		<button
			onClick={onClick}
			className={classNames(styles.button, className)}>
			{children}
		</button>
	)
}