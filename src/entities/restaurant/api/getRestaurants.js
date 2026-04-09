import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsRequestStatus } from "../model/restaurantSelectors";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue, fulfillWithValue, signal }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/restaurants`, {
        signal,
      });

      if (!response.ok) throw Error("Ошибка HTTP-запроса:", response.status);

      const result = await response.json();

      if (!result.length) rejectWithValue(new Error("no data")); // спорно что именно тут нужно эту проверку делать, возможно лучше в конкретном компоненте отдлеьно отбрабатывать такой случай, .к. не всегда ответ с нулём сущностей - это какая-то ошибка.

      return fulfillWithValue(result);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
  {
    condition: (_, { getState }) => selectRestaurantsRequestStatus(getState()) !== "fulfilled",
  },
);
