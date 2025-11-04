import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsById } from "../restaurants";
import { selectReviewsByIds } from "./reviewsSelectors";

export const getReviewsByRestaurantId = createAsyncThunk(
  "reviews/getReviewsByRestaurantId",
  async (restaurantId, { rejectWithValue, fulfillWithValue, signal }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`, {
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
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantData = selectRestaurantsById(state, restaurantId);
      if (!restaurantData?.reviews) return false;
      const restaurantReviewsData = selectReviewsByIds(state, restaurantData?.reviews);
      if (restaurantReviewsData?.length === restaurantData?.reviews?.length) return false;
      return true;
    },
  },
);
