import { useRouteError } from "react-router-dom";

export const NotFoundPage = () => {
	console.log(useRouteError());
	return (
		<>
			{/* <Breadcrumbs /> */}
			<div>Наполнение страницы 404</div>
			{/* { другие секциии } */}
		</>
	)
}