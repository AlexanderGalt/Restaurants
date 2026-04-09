import { usersAdapter } from "./usersAdapter";

const selectUsersData = (state) => state.users;

export const {
  selectIds: selectUsersIds,
  selectById: selectUserById,
  selectAll: selectUsersAll,
  selectEntities: selectUsersEntities,
  selectTotal: selectUsersTotlal,
} = usersAdapter.getSelectors(selectUsersData);

export const selectUsersRequestStatus = (state) => selectUsersData(state).requestStatus;
