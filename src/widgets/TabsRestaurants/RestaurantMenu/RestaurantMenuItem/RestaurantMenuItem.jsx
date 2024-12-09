import { useSelector } from "react-redux"
import { selectDishesById } from "../../../../app/redux/entities/dishes"
import { MenuCounter } from "../MenuCounter";
import styles from "./RestaurantMenuItem.module.css";
import { selectAuthorization } from "../../../../app/redux/ui/authSlice";

export const RestaurantMenuItem = ({ id }) => {
	const { isAuth } = useSelector(selectAuthorization);
	const dishe = useSelector((state) => selectDishesById(state, id));

	return (
		<li
			className={styles.restaurantMenuItem}
		>
			{dishe.name}
			{isAuth && <MenuCounter id={id} />}
		</li>
	)
}