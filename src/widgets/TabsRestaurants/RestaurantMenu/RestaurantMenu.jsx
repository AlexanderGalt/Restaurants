import styles from "./restaurantMenu.module.css"
import classNames from "classnames"
import { RestaurantMenuItem } from "./RestaurantMenuItem/RestaurantMenuItem.jsx";

export function RestaurantMenu({ menuData }) {
	if (!menuData.length) {
		return null
	}

	return (
		<div className={classNames(styles.restaurantMenu)}>
			<h4 className={classNames(styles['restaurantMenuTitle'])}>Меню</h4>
			<ul className={classNames(styles['restaurantMenuList'])}>
				{menuData.map(menuItem => (
					< RestaurantMenuItem
						key={menuItem}
						id={menuItem}
					/>
				))}
			</ul>
		</div >
	)
}