import styles from "./header.module.css";
import classNames from "classnames";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle.jsx";
import { AuthButton } from "../AuthButton/AuthButton.jsx";

export function Header() {
	return (
		<header
			className={classNames(styles.header)}>
			<div className={styles.headerWrapper}>
				HEADER
				<ThemeToggle />
				<AuthButton />
			</div>
		</header>
	)
}