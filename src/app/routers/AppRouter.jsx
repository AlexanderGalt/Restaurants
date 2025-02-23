import { Layout } from "../Layout.jsx";
import { HomePage } from "../../pages/home";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "../../pages/notFound";
import { RestaurantMenu } from "../../widgets/TabsRestaurants/ui/RestaurantsTabsBody/RestaurantTabs/RestaurantMenu/RestaurantMenu.jsx";
import { RestaurantReviews } from "../../widgets/TabsRestaurants/ui/RestaurantsTabsBody/RestaurantTabs/RestaurantReviews/RestaurantReviews.jsx";
import { RestaurantsTabsBodyContainer } from "../../widgets/TabsRestaurants/ui/RestaurantsTabsBody/RestaurantsTabsBodyContainer.jsx";
import { RestaurantsTabsBodyDefault } from "../../widgets/TabsRestaurants/ui/RestaurantsTabsBody/RestaurantTabs/RestaurantsTabsBodyDefault/RestaurantsTabsBodyDefault.jsx";

const router = createBrowserRouter([
	{
		path: "/", // это указывается только для лучшей читаемости кода, без указания этого проперти будет всё так же хорошо работать.
		element: <Layout />,
		handle: {
			breadcrumbTitle: "Главная",
		},
		errorElement: <Layout><NotFoundPage /></Layout>,
		children: [
			{
				index: true,
				id: "home",
				element: <HomePage />
			},
			{
				path: "restaurants",
				id: "restaurants",
				lazy: async () => import("../../pages/restaurants"),
				handle: {
					breadcrumbTitle: "Рестораны",
				},
				children: [
					{
						path: ":restaurantId?",
						element: <RestaurantsTabsBodyContainer />,
						children: [
							{
								index: true,
								element: <RestaurantsTabsBodyDefault />
							},
							{
								path: "menu",
								element: <RestaurantMenu />,
							},
							{
								path: "reviews",
								element: <RestaurantReviews />,
							}
						]
					}
				]
			},
			{
				path: "dish/:dishId", // указываю роктерские параметры тут же, т.к. на этой станице нет никаких своих инструментов навигации (ссылок).
				id: "dish",
				lazy: async () => import("../../pages/dish"),
			},
		]
	}
]);

export const AppRouter = () => <RouterProvider router={router} />

// для примера компонентного роутера:
// export const AppRouter = () => (<BrowserRouter >
// 	<Routes>
// 		<Route path="/" element={<Layout />}>
// 			<Route index element={<HomePage />} />
// 			<Route
// 				path="restaurants"
// 				element={<RestaurantsPage />}
// 			// lazy={() => import("../../pages/restaurants")}
// 			// lazy={() => { Component: () => 123 }}
// 			/>
// 			<Route
// 				path="qwe"
// 				element={<Component />}
// 			/>
// 		</Route>
// 		<Route path="*" element={<Layout><NotFoundPage /></Layout>} />
// 	</Routes>
// </BrowserRouter>)
