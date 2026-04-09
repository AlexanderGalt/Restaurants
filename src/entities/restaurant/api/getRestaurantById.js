import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "../model/restaurantSelectors";

export const getRestaurantById = createAsyncThunk(
  "restaurants/getRestaurantById",
  async (restaurantId, { rejectWithValue, fulfillWithValue, signal }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/restaurant/${restaurantId}`, {
        signal,
      });

      if (!response.ok) throw Error("Ошибка HTTP-запроса:", response.status);

      const result = await response.json();

      if (!result.length) rejectWithValue(new Error("no data"));

      return fulfillWithValue(result);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
  {
    condition: (restaurantId, { getState }) => !selectRestaurantById(getState(), restaurantId),
  },
);
