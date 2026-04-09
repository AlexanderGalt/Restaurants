import { createSlice } from "@reduxjs/toolkit";
import { reduxStore, rootReducer } from "../../../model/redux/store";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "dark" },
  reducers: {
    actionToggleTheme(state) {
      state.value === "dark" ? (state.value = "light") : (state.value = "dark");
    },
  },
  selectors: {
    selectTheme: (state) => state,
  },
});

export const { selectTheme } = themeSlice.selectors;
export const { actionToggleTheme } = themeSlice.actions;

// вставляем (инжектим) слайз темы в глобальный стор.
const rootReducerWithThemeSlice = rootReducer.inject(themeSlice);
reduxStore.replaceReducer(rootReducerWithThemeSlice);
