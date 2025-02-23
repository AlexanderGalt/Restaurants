import { Link, useMatches } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

export const Breadcrumbs = () => {
	const matches = useMatches();

	return (
		< ul className={`${styles.breadcrumbsList} Wrapper`
		}> {
				matches.map((route) => route.handle?.breadcrumbTitle && (
					<li
						className={styles.breadcrumbsListItem}
						key={route.id}
					>
						<Link
							className={styles.breadcrumbsLink}
							to={route.pathname}
						> {route.handle.breadcrumbTitle} </ Link>
					</li>)
				)
			}</ul >
	)
}

