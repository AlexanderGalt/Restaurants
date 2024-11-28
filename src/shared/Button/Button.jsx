import { useSelector } from "react-redux";
import styles from "./button.module.css"
import classNames from "classnames"
import { selectTheme } from "../../app/redux/ui/themeSlice";
import { memo } from "react";

export const Button = memo(({ onClick, className, disabled = false, children }) => {
	const { value: themeValue } = useSelector(selectTheme);

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={classNames(styles.button, {
				[styles.light]: themeValue === "light",
				[styles.dark]: themeValue === "dark"
			}, className)}>
			{children}
		</button>
	)
})

Button.displayName = Button; // to fix "Component definition is missing display name". Т.е. чтобы у компонента-функции было имя, т.к. иначе тяжлее дебажить в дев тулзах, т.к. компонент будет именоваться как "Anonymous".