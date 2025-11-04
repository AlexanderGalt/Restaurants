import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsById } from "../restaurants";
import { selectDishesById, selectDishesByIds } from ".";

export const getDishesById = createAsyncThunk(
  "dishes/getDishesById",
  async (dishesId, { getState, rejectWithValue, fulfillWithValue, signal }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/dish/${dishesId}`, {
        signal,
      });

      if (!response.ok) throw Error("Ошибка HTTP-запроса:", response.status);

      const result = await response.json();

      return fulfillWithValue(result);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
  {
    condition: (dishesId, { getState }) => !selectDishesById(getState(), dishesId),
  },
);
