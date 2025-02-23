import { Breadcrumbs } from "../../../widgets/Breadcrumbs/Breadcrumbs"
import { TabsRestaurants } from "../../../widgets/TabsRestaurants"

export const RestaurantsPage = () => {
	return (
		<>
			<Breadcrumbs />
			<TabsRestaurants />
			<div>другие секции страницы ресторанов</div>
		</>
	)
}