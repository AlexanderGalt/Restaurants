import { createEntityAdapter } from "@reduxjs/toolkit";

export const usersAdapter = createEntityAdapter();

export const userInitialState = usersAdapter.getInitialState({ requestStatus: "idle" });
