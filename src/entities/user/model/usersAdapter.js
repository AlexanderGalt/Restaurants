import { createEntityAdapter } from "@reduxjs/toolkit";

export const usersAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const userInitialState = usersAdapter.getInitialState();
