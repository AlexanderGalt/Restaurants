import styles from "./header.module.css"
import classNames from "classnames"

export function Header() {
	return (
		<header
			className={classNames(styles.header)}>
			HEADER
		</header>
	)
}