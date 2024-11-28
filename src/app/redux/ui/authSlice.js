import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "authorization",
	initialState: {
		isAuth: false,
		name: null
	},
	reducers: {
		actionToggleAuth(state) {
			if (state.isAuth) {
				state.isAuth = false;
				state.name = null;
			} else {
				state.isAuth = true;
				state.name = "someName";
			}
		}
	},
	selectors: {
		selectAuthorization: (state) => state
	}
});

export const { selectAuthorization } = authSlice.selectors;
export const { actionToggleAuth } = authSlice.actions;