import { createEntityAdapter } from "@reduxjs/toolkit";

export const restaurantsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const restaurantInitialState = restaurantsAdapter.getInitialState();
