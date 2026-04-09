import { useEffect, useState } from "react";
console.log("Тест");
const C = () => {
  console.log("Рендер 'C'");

  useEffect(() => {
    console.log("Эффект 'С'");

    return () => console.log("CleanUp 'C'");
  }); // т.к. массив зависимостей не указан, эффект будет выполняться при каждом ререндере.

  return (
    <>
      <div>123</div>
    </>
  );
};

const B = () => {
  console.log("Рендер 'B'");

  useEffect(() => {
    console.log("Эффект 'B'");

    return () => console.log("CleanUp 'B'");
  }); // т.к. массив зависимостей не указан, эффект будет выполняться при каждом ререндере.

  return <C />;
};

const A = () => {
  const [value, setValue] = useState();

  console.log("Рендер 'A'");

  useEffect(() => {
    console.log("Эффект 'A'");

    return () => console.log("CleanUp 'A'");
  }); // т.к. массив зависимостей не указан, эффект будет выполняться при каждом ререндере.

  return (
    <>
      <button onClick={() => setValue((value) => !value)}>Ререндер</button>
      <br />
      <B />
    </>
  );
};

export const Test = () => {
  const [isShow, setValue] = useState(false);

  return (
    <>
      <button onClick={() => setValue((isShow) => !isShow)}>Маунт/анмаунт</button>
      <br />
      {/* {isShow ? <A /> : ""} */}
      {isShow && <A />}
    </>
  );
};

export { Test as Component };
