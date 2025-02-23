import styles from "./header.module.css";
import classNames from "classnames";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle.jsx";
import { AuthButton } from "../AuthButton/AuthButton.jsx";
import { NavLink } from "react-router-dom";
import { Clock } from "../../shared/ui/Clock";

export function Header() {
	return (
		<header
			className={classNames(styles.header)}>
			<div className={styles.headerWrapper}>
				<NavLink to="/">HEADER</NavLink>
				<NavLink to="restaurants"
					relative="path">рестораны</NavLink>
				<ThemeToggle />
				<Clock />
				<AuthButton />
			</div>
		</header >
	)
}