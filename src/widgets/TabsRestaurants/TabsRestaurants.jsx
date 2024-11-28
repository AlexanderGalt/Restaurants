import { useState } from 'react';
import styles from "./tabsRestaurants.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { firstValidRestaurants, selectRestaurantsAll } from "../../app/redux/entities/restaurants/restaurantsSelects.js";
import { RestaurantBodyContainer } from "./RestaurantBody/RestaurantBodyContainer.jsx";
import { TabsRestaurantsTitle } from './TabsRestaurantsTitle/TabsRestaurantsTitle.jsx';

export function TabsRestaurants() {
	const restaurantsAll = useSelector(selectRestaurantsAll);

	const startRestaurantTab = useSelector(firstValidRestaurants); // на случай если ресторан с индексом 0 будет без имени, т.е. невалидный. Иначе, если удалить имя у первого ресторана, то первый рендер будет баганый (будет пустой таб).

	const startId = startRestaurantTab.id;

	const [currId, setCurrId] = useState(startId);

	if (!restaurantsAll.length) {
		return null
	}

	return (
		<div className={styles['restaurantsTabsWrapper']}>
			<div className={classNames(styles['restaurantsTabsHead'])}>
				{
					restaurantsAll.map((restaurant) => !!restaurant.name && (
						<TabsRestaurantsTitle
							key={restaurant.id}
							restaurantId={restaurant.id}
							currId={currId}
							setCurrId={setCurrId}
							name={restaurant.name}
						/>
					))
				}
			</div>

			<RestaurantBodyContainer
				id={currId}
			/>
		</div >
	)
}