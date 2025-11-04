import { lazy, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

export const LazyPage = ({ modulePromise, props, fallback = "Загрузка ...", pageComponentName = "default" }) => {
  const { loaderData } = useLoaderData();
  const pagePromise = Promise.all([modulePromise, loaderData]);

  return (
    <Suspense fallback={fallback}>
      <Await resolve={pagePromise}>{([{ [pageComponentName]: Page }, pageData]) => <Page {...{ pageData, ...props }} />}</Await>
    </Suspense>
  );
};
