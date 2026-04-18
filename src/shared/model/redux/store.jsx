import { apiSlice } from "./apiSlice";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Для TS:
// export interface LazyLoadedSlices {} // это нужно исключительно для корректной реализаци TS-типизации вставки типов хранилищ слайзов в тип глобального стора.

export const rootReducer = combineSlices({
  [apiSlice.reducerPath]: apiSlice.reducer, // подключаем сюда слайзы, который сразу будут в сторе. Здесь может вообще не быть слайзов.
});
// .withLazyLoadedSlices<LazyLoadedSlices>() // создаём глобальный редюсер (через который будем вставлять слайзы) для глобального стора. Обязательно делать это именно через "combineSlices()" (т.к. иначе невозможно), т.к. через "combineReducers()" код-сплитинг реализовать не получится.

export const reduxStore = configureStore({
  // создаём глобальный стор с толькочто созданным глобальным редюсером.
  reducer: rootReducer,
  middleware: (getDeafaultMiddlewares) => getDeafaultMiddlewares().concat(apiSlice.middleware), // подключаем мидлвары для рработы с api-слайзов (для корректной раобты с RTKQ). Это всегда необходимо для апи-слайза.
});

setupListeners(reduxStore.dispatch);

// Для TS:
// Тип всего состояния
// export type RootState = ReturnType<typeof reduxStore.getState>

// Тип dispatch
// export type AppDispatch = typeof reduxStore.dispatch
// кастомный dispatch с типами
// export const useAppDispatch = () => useDispatch<AppDispatch>()

// типизированный selector
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
