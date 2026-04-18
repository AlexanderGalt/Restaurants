import { userApi } from "../api/userApi";
import { userInitialState, usersAdapter } from "./usersAdapter";

const selectUsersResult = userApi.endpoints.getUsers.select();

const selectUsersData = (state) => selectUsersResult(state).data ?? userInitialState;

export const {
  selectIds: selectUsersIds,
  selectById: selectUserById,
  selectAll: selectUsersAll,
  selectEntities: selectUsersEntities,
  selectTotal: selectUsersTotlal,
} = usersAdapter.getSelectors(selectUsersData);
