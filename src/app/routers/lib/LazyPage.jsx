import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

export const LazyPage = ({ modulePromise }) => {
	const { loaderData } = useLoaderData();
	const pagePromise = Promise.all([modulePromise, loaderData])
		.then(([module]) => module.default);

	return (
		<Suspense fallback={"Загрузка ..."}>
			<Await resolve={pagePromise}>
				{(Page) => <Page />}
			</Await>
		</Suspense >
	)
}