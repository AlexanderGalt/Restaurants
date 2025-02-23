import { useParams } from "react-router-dom";
import { selectDishesById } from "../../../app/redux/entities/dishes";
import { useSelector } from "react-redux";
import { MenuCounter } from "../../../widgets/TabsRestaurants/ui/RestaurantsTabsBody/RestaurantTabs/RestaurantMenu/MenuCounter";
import { selectAuthorization } from "../../../app/redux/ui/authSlice";

export const DishPage = () => {
	const { dishId } = useParams();
	const dishData = useSelector((state) => selectDishesById(state, dishId));
	const { isAuth } = useSelector(selectAuthorization);

	return (
		<>
			<section className="Wrapper">
				<h2>{dishData.name}
				</h2>
			</section>
			<section className="dishDescription Wrapper">
				<ul>
					<li>Price: {dishData.price}$</li>
					<li>ingredients: {dishData.ingredients.join(", ")} </li>
				</ul>
			</section>
			{isAuth && <section className="Wrapper">
				Добавить в корзину: <MenuCounter id={dishData.id} />
			</section>}
		</>
	)
}