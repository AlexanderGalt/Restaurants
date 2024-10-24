import styles from "./button.module.css"
import classNames from "classnames"
import { useThemeContext } from "../../app/providers/ThemeProvider.jsx";

export function Button({ onClick, className, children }) {
	const { themeValue } = useThemeContext();

	return (
		<button
			onClick={onClick}
			className={classNames(styles.button, {
				[styles.light]: themeValue === "light",
				[styles.dark]: themeValue === "dark"
			}, className)}>
			{children}
		</button>
	)
}