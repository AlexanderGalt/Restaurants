import { createEntityAdapter } from "@reduxjs/toolkit";

export const reviewsAdapter = createEntityAdapter();

export const reviewInitialState = reviewsAdapter.getInitialState({ requestStatus: "idle" });
