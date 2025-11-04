import { usersAdapter } from "./usersSlice";

export const {
  selectIds: selectUsersIds,
  selectById: selectUsersById,
  selectAll: selectUsersAll,
  selectEntities: selectUsersEntities,
  selectTotal: selectUsersTotlal,
} = usersAdapter.getSelectors((state) => state.users);

export const selectUsersRequestStatus = (state) => state.users.requestStatus;
