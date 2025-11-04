import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsById } from "../restaurants";
import { selectDishesByIds } from ".";

export const getDishesByRestaurantId = createAsyncThunk(
  "dishes/getDishesByRestaurantId",
  async (restaurantId, { rejectWithValue, fulfillWithValue, signal }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`, {
        signal,
      });

      if (!response.ok) throw Error("Ошибка HTTP-запроса:", response.status);

      const result = await response.json();

      if (!result.length) return rejectWithValue("Нет блюд для ресторана:", restaurantId);

      return fulfillWithValue(result);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantData = selectRestaurantsById(state, restaurantId);
      if (!restaurantData?.menu?.length) return false;

      const restaurantDishesData = selectDishesByIds(state, restaurantData.menu);
      // сравниваем длинну массива айдишников блюд в меню с длинной массива даных блюд, но тот случай если не для всех указанных в меню блюд (айдишников) будет иметься блюдо. Например если в меню указано 3 блюда (айдишника блюда), а от сервера мы получили данные только о двух из них. В таком случае нужно сделать резапрос.
      if (restaurantDishesData?.length === restaurantData.menu.length) return false;

      return true;
    },
  },
);
