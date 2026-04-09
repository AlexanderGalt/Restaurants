import { createEntityAdapter } from "@reduxjs/toolkit";

export const dishesAdapter = createEntityAdapter();

export const disheInitialState = dishesAdapter.getInitialState({ requestStatus: "idle" });
