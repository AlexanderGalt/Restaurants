import { createEntityAdapter } from "@reduxjs/toolkit";

export const restaurantsAdapter = createEntityAdapter();

export const restaurantInitialState = restaurantsAdapter.getInitialState({ requestStatus: "idle" });