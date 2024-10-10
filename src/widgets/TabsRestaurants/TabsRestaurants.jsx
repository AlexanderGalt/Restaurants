import { restaurants } from "../../../materials/mock.js";
import { RestaurantBody } from "./RestaurantBody/RestaurantBody.jsx";
import { useState } from 'react'
import styles from "./tabsRestaurants.module.css"
import classNames from "classnames"

export function TabsRestaurants() {
	const startRestaurantTab = restaurants.find((restaurantItem) => restaurantItem.name); // на случай если ресторан с индексом 0 будет без имени, т.е. невалидный. Иначе, если удалить имя у первого ресторана, то первый рендер будет баганый (будет пустой таб).
	const startId = startRestaurantTab.id;
	const [currId, setCurrId] = useState(startId);
	const currRestaurantData = restaurants.find((restaurant) => restaurant.id === currId);

	if (!restaurants.length) {
		return null
	}

	return (
		<div className={classNames("wrapper", styles['restaurantsTabs'])}>
			<div className={classNames(styles['restaurantsTabsHeader'])}>
				{
					restaurants.map((restaurant) => !!restaurant.name && (
						<button
							key={restaurant.id}
							onClick={() => setCurrId(restaurant.id)}
							className={
								classNames(styles['restaurantsTabsTitle'], {
									[styles['restaurantsTabsTitleActive']]: currId == restaurant.id
								})
							}
							disabled={currId == restaurant.id ? true : false}
						>{restaurant.name}</button>
					))
				}
			</div>

			<RestaurantBody
				restaurantId={currRestaurantData.id}
				restaurantName={currRestaurantData.name}
				restaurantMenu={currRestaurantData.menu}
				restaurantReviews={currRestaurantData.reviews}
			/>
		</div>
	)
}