import { MenuCounter } from "./MenuCounter.jsx";
import styles from "./restaurantMenu.module.css"
import classNames from "classnames"
import { useAuthContext } from "../../../app/providers/AuthProvider.jsx"

export function RestaurantMenu({ menuData }) {
	const { authValue } = useAuthContext();

	if (!menuData.length) {
		return null
	}
	return (
		<div className={classNames(styles.restaurantMenu)}>
			<h4 className={classNames(styles['restaurantMenuTitle'])}>Меню</h4>
			<ul className={classNames(styles['restaurantMenuList'])}>
				{menuData.map(menuItem => (
					<li
						key={menuItem.id}
						className={classNames(styles.restaurantMenuItem)}
						data-price={menuItem.price}
						data-ingredients={menuItem.ingredients}
					>
						{menuItem.name}

						{authValue.isAuth && <MenuCounter />}
					</li>
				))}
			</ul>
		</div >
	)
}