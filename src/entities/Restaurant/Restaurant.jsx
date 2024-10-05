import { RestaurantMenu } from "./RestaurantMenu/RestaurantMenu.jsx";
import { RestaurantReviews } from "./RestaurantReviews.jsx";
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx";

export function Restaurant({ restaurantId, restaurantName, restaurantMenu, restaurantReviews }) {
	return ( // здесь условый рендеринг (restaurantData.name &&) не нужен, т.к. сюда всегда будут попадать "restaurantData", у которых есть имя, т.к. проверка на имя ресторана уже есть в заголовке таба.
		<div
			className="restaurant-item"
			key={restaurantId}
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "100px",
			}}>
			<h2 className="restaurant-item__name">
				{restaurantName}
			</h2>
			<RestaurantMenu menuData={restaurantMenu} />
			<RestaurantReviews reviewsData={restaurantReviews} />
			<ReviewForm />
			<ReviewForm />
			<ReviewForm />
			<ReviewForm />
		</div >
	)
}