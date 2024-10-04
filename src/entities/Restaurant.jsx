import { Menu } from "../widgets/MenuOfRestaurant.jsx";
import { Reviews } from "../widgets/ReviewsOfRestaurant.jsx";

export function Restaurant({ restaurantId, restaurantName, restaurantMenu, restaurantReviews }) {
	return ( // здесь условый рендеринг (restaurantData.name &&) не нужен, т.к. сюда всегда будут попадать "restaurantData", у которых есть имя, т.к. проверка на имя ресторана ужеесть в заголовке таба.
		<div className="restaurant-item" key={restaurantId}>
			<h2 className="restaurant-item__name">
				{restaurantName}
			</h2>
			<Menu menuData={restaurantMenu} />
			<Reviews reviewsData={restaurantReviews} />
		</div>
	)
}