import { Layout } from "../Layout.jsx";
import { HomePage } from "@pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "@pages/notFound";
import { RestaurantMenu } from "@widgets/RestaurantMenu/RestaurantMenu.jsx";
import { RestaurantReviews } from "@widgets/RestaurantReviews/RestaurantReviews.jsx";
import { RestaurantsTabsBodyContainer } from "@widgets/RestaurantsTabs/ui/RestaurantsTabsBody/RestaurantsTabsBodyContainer.jsx";
import { Test } from "@pages/Test.jsx";
import { RestaurantsTabsBodyDefault } from "@widgets/RestaurantsTabs/ui/RestaurantsTabsBody/RestaurantsTabsBodyDefault.jsx";
// import { Test } from "../../pages/Test.jsx";
// import { getFallbackPage } from "./lib/getFallbackPage.jsx";
import { LazyPage } from "./lib/LazyPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", // это указывается только для лучшей читаемости кода, без указания этого проперти будет всё так же хорошо работать.
    element: <Layout />,
    handle: {
      breadcrumbTitle: "Главная",
    },
    errorElement: (
      <Layout>
        <NotFoundPage />
      </Layout>
    ),
    children: [
      {
        index: true,
        id: "home",
        element: <HomePage />,
      },
      {
        path: "restaurant/:restaurantId",
        id: "restaurant",
        lazy: async () => import("../../pages/restaurant"),
        handle: {
          breadcrumbTitle: "Ресторан",
        },
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
                element: <RestaurantsTabsBodyDefault RestaurantMenu={RestaurantMenu} RestaurantReviews={RestaurantReviews} />,
              },
              {
                path: "menu",
                element: <RestaurantMenu />,
              },
              {
                path: "reviews",
                element: <RestaurantReviews />,
              },
            ],
          },
        ],
      },
      {
        path: "dish/:dishId", // указываю роутерские параметры тут же, т.к. на этой станице нет никаких своих инструментов навигации (ссылок).
        id: "dish",
        lazy: async () => import("../../pages/dish"),
      },
      {
        path: "test",

        // lazy: async () => new Promise((res) => setTimeout(async () => res(await import("../../pages/Test.jsx")), 1_000)),

        // lazy() {
        //   const modulePromise = import("../../pages/Test.jsx").then(
        //     async (result) =>
        //       new Promise((resolve) => {
        //         setTimeout(() => resolve(result), 0);
        //       }),
        //   );

        //   return {
        //     element: <LazyPage {...{ modulePromise }} pageComponentName="Component" fallback="Загрузка страницы теста ..." />,
        //   };
        // },

        loader: async ({ request }) => {
          return {
            loaderData: new Promise((res) =>
              //   setTimeout(() => (console.log("Выполнение loaderR", request), res("Ретурн loaderR")), 5_000),
              setTimeout(() => res("Ретурн loaderR"), 0),
            ),
          };
        },

        // loader: async ({ request }) =>
        //   new Promise((res) => setTimeout(() => (console.log("Выполнение loaderR", request), res("Ретурн loaderR")), 3_000)),
        element: <Test />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;

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
