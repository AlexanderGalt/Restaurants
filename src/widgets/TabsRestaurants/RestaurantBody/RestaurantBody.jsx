import { RestaurantMenu } from "../RestaurantMenu/RestaurantMenu.jsx";
import { RestaurantReviews } from "../RestaurantReviews/RestaurantReviews.jsx";
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx";
import styles from "./restaurantBody.module.css"
import classNames from "classnames"

export function RestaurantBody({ restaurantId, restaurantName, restaurantMenu, restaurantReviews }) {
	return ( // здесь условый рендеринг (restaurantData.name &&) не нужен, т.к. сюда всегда будут попадать "restaurantData", у которых есть имя, т.к. проверка на имя ресторана уже есть в заголовке таба.
		<div className={classNames(styles['restaurantsTabsBody'])}
			key={restaurantId}
		>
			<h3 className={classNames(styles.restaurantsTabsBodyName)}>
				{restaurantName}
			</h3>
			<RestaurantMenu menuData={restaurantMenu} />
			<RestaurantReviews reviewsData={restaurantReviews} />
			<ReviewForm />
			<ReviewForm />
			<ReviewForm />
			<ReviewForm />
		</div >
	)
}