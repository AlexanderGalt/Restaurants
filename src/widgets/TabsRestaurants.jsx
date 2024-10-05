import { restaurants } from "../../materials/mock.js";
import { Restaurant } from "../entities/Restaurant/Restaurant.jsx";
import { useState } from 'react'

export function TabsRestaurants() {
	const startRestaurantTab = restaurants.find((restaurantItem) => restaurantItem.name); // на случай если ресторан с индексом 0 будет без имени, т.е. невалидный. Иначе, если удалить имя у первого ресторана, то первый рендер будет баганый (будет пустой таб).
	const startId = startRestaurantTab.id;
	const [currId, setCurrId] = useState(startId);
	const currRestaurantData = restaurants.find((restaurant) => restaurant.id === currId);

	if (!restaurants.length) {
		return null
	}

	return (
		<div className="restaurants-tabs">
			<div className="restaurants-tabs__header">
				{
					restaurants.map((restaurant) => !!restaurant.name && (
						<div
							key={restaurant.id}
							onClick={() => setCurrId(restaurant.id)}
							className={currId == restaurant.id ? "restaurants-tabs__title activeTab" : "restaurants-tabs__title"}
						>{restaurant.name}</div>
					))
				}
			</div>

			<div className="restaurants-tabs__body">
				<Restaurant
					restaurantId={currRestaurantData.id}
					restaurantName={currRestaurantData.name}
					restaurantMenu={currRestaurantData.menu}
					restaurantReviews={currRestaurantData.reviews}
				/>
			</div>
		</div>
	)
}