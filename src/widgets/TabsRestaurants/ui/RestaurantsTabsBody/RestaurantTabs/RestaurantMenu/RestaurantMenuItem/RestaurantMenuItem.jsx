import { useSelector } from "react-redux"
import { selectDishesById } from "../../../../../../../app/redux/entities/dishes"
import { MenuCounter } from "../MenuCounter";
import styles from "./RestaurantMenuItem.module.css";
import { selectAuthorization } from "../../../../../../../app/redux/ui/authSlice";
import { Link } from "react-router-dom";

export const RestaurantMenuItem = ({ id }) => {
	const { isAuth } = useSelector(selectAuthorization);
	const dishe = useSelector((state) => selectDishesById(state, id));

	return (
		<li
			className={styles.restaurantMenuItem}
		>
			<Link to={`/dish/${id}`}>{dishe.name}</Link>
			{isAuth && <MenuCounter id={id} />}
		</li >
	)
}