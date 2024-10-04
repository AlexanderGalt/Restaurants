import { Menu } from "./MenuOfRestaurant/MenuOfRestaurant.jsx";
import { Reviews } from "./ReviewsOfRestaurant.jsx";
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx";

export function Restaurant({ restaurantId, restaurantName, restaurantMenu, restaurantReviews }) {
	return ( // здесь условый рендеринг (restaurantData.name &&) не нужен, т.к. сюда всегда будут попадать "restaurantData", у которых есть имя, т.к. проверка на имя ресторана ужеесть в заголовке таба.
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
			<Menu menuData={restaurantMenu} />
			<Reviews reviewsData={restaurantReviews} />
			<ReviewForm />
			<ReviewForm />
			<ReviewForm />
			<ReviewForm />
		</div >
	)
}