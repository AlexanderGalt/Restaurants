import { createSlice } from "@reduxjs/toolkit";
import { reduxStore, rootReducer } from "@shared/model/redux/store";

const authInitialState = { isAuth: false };

export const authSlice = createSlice({
  name: "authorization",
  initialState: authInitialState,
  reducers: {
    actionToggleAuth(state) {
      if (state.isAuth) {
        return authInitialState;
      } else {
        state.isAuth = true;
        state.name = "Antony";
        state.id = "a304959a-76c0-4b34-954a-b38dbf310360";
      }
    },
  },
  selectors: {
    selectAuthorization: (state) => state,
  },
});

export const { selectAuthorization } = authSlice.selectors;
export const { actionToggleAuth } = authSlice.actions;

// вставляем (инжектим) слайз аутентификации в глобальный стор.
const rootReducerWithAuthSlice = rootReducer.inject(authSlice);
reduxStore.replaceReducer(rootReducerWithAuthSlice);
