import styles from "./RestaurantsTabsTitle.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../../../../../app/redux/entities/restaurants";

export const RestaurantsTabsTitle = ({ restaurantId, currId }) => {
	const { name, menu, reviews } = useSelector((state) => selectRestaurantsById(state, restaurantId));
	let url = restaurantId;

	if (menu) url += "/menu"
	else if (reviews) url += "/reviews";

	return (
		<NavLink
			to={url}
			className={({ isActive }) => classNames(styles.restaurantsTabsTitle, {
				[styles.restaurantsTabsTitleActive]: isActive || currId === restaurantId
			})}
		>
			{name}
		</NavLink>
	)
}