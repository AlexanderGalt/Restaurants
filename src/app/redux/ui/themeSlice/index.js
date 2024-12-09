import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
	name: "theme",
	initialState: { value: "dark" },
	reducers: {
		actionToggleTheme(state) {
			state.value === "dark" ? state.value = "light" : state.value = "dark";
		}
	},
	selectors: {
		selectTheme: (state) => state,
	}
});

export const { selectTheme } = themeSlice.selectors;
export const { actionToggleTheme } = themeSlice.actions;