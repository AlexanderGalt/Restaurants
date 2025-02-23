import styles from "./restaurantMenu.module.css"
import classNames from "classnames"
import { RestaurantMenuItem } from "./RestaurantMenuItem/RestaurantMenuItem.jsx";
import { useOutletContext } from "react-router-dom";

export function RestaurantMenu() {
	const { restaurantMenuData } = useOutletContext();

	if (!restaurantMenuData.length) {
		return null
	}

	return (
		<div className={classNames(styles.restaurantMenu)}>
			<ul className={classNames(styles.restaurantMenuList)}>
				{restaurantMenuData.map(menuItem => (
					< RestaurantMenuItem
						key={menuItem}
						id={menuItem}
					/>
				))}
			</ul>
		</div >
	)
}