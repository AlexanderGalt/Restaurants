import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersRequestStatus } from "./usersSelectors";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue, fulfillWithValue, signal }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/users`, {
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
    condition: (_, { getState }) => selectUsersRequestStatus(getState()) !== "fulfilled",
  },
);
