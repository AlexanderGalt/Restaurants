import styles from "./restaurantsTabs.module.css";

import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectFirstValidRestaurant, selectRestaurantsIds } from "../../../app/redux/entities/restaurants/index.js";
import { RestaurantsTabsTitle } from './RestaurantsTabsBody/RestaurantsTabsTitle/RestaurantsTabsTitle.jsx';
import { useParams, Outlet } from 'react-router-dom';

export const TabsRestaurants = () => {
	const restaurantsIds = useSelector(selectRestaurantsIds);
	const startRestaurantTab = useSelector(selectFirstValidRestaurant); // на случай если ресторан с индексом 0 будет без имени, т.е. невалидный. Иначе, если удалить имя у первого ресторана, то первый рендер будет баганый (будет пустой таб).
	let startId = startRestaurantTab.id;

	const currId = useParams().restaurantId || startId;

	if (!restaurantsIds.length) {
		return null
	}

	return (
		<>
			<div className={styles['restaurantsTabsWrapper']}>
				<div className={classNames(styles['restaurantsTabsHead'])}>
					{
						restaurantsIds.map((restaurantsId) => (
							<RestaurantsTabsTitle
								key={restaurantsId}
								restaurantId={restaurantsId}
								currId={currId}
							/>
						))
					}
				</div>

				<Outlet context={{ currId }} />
			</div >
		</>
	)
}