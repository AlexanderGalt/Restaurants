import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../../assets/normalized-mock";

export const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState(null, normalizedUsers);
export const usersSlice = createSlice({
	name: "users",
	initialState,
});

export const {
	selectIds: selectUsersIds,
	selectById: selectUsersById,
	selectAll: selectUsersAll,
	selectEntities: selectUsersEntities,
	selectTotal: selectUsersTotlal,
} = usersAdapter.getSelectors((state) => state.users);