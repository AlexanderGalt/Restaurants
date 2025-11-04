import { Component, lazy, Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { use } from "react";
import { ThemeContext } from "../app/providers/ThemeProvider";

// var result = null;
// const promise = new Promise((res, rej) => setTimeout(() => res("Результат помиса"), 3_000)).then((r) => (result = r));

const Comp = () => {
  //   if (!result) throw promise;
  //   return result;
  const { loaderData: promise } = useLoaderData();

  //   const promise = new Promise((res, rej) => setTimeout(() => res("Результат помиса"), 5_000));
  console.log(promise);

  if (2 > 1) {
    var result = use(promise);
    var result2 = use(ThemeContext);
  }
  console.log(result);
  console.log(result2);

  return result;
};

export const Test = ({ pageData }) => {
  //   const loaderData = useLoaderData();

  //   const lc = <Comp />;
  //   console.dir(lc);

  //   const LazyCompFromReactLazy = lazy(
  //     () =>
  //       new Promise((res, rej) =>
  //         setTimeout(
  //           () =>
  //             res({
  //               default: function Comp() {
  //                 return "qweqwe123";
  //               },
  //             }),
  //           5_000,
  //         ),
  //       ),
  //   );
  //   console.log(LazyCompFromReactLazy);

  return (
    //<LazyCompFromReactLazy />
    <Suspense fallback="...">
      <Comp />
    </Suspense>
  );
};

export { Test as Component };
