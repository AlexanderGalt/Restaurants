import styles from "./ThemeToggle.module.css";
import classNames from "classnames";
import { useThemeContext } from "../../app/providers/ThemeProvider.jsx"

export const ThemeToggle = () => {
	const { doToggleTheme, themeValue } = useThemeContext();

	return (
		<div
			onClick={doToggleTheme}
			className={classNames(
				[styles.themeToggle],
				{
					[styles.dark]: themeValue === "dark",
					[styles.light]: themeValue === "light"
				}
			)}>

			<div className={styles.themeToggleMoonImg}>
				<img src="/assets/icons/moon.svg" alt="moon" />
			</div>

			<div className={styles.themeToggleSunImg}>
				<img src="/assets/icons/sun.svg" alt="sun" />
			</div>

			<div className={styles.themeToggleCircle}></div>
		</div>
	)
}