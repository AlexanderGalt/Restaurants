import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from "./store.js";

export const AppStore = ({ children }) => (
  <ReduxProvider store={reduxStore}>{children}</ReduxProvider>
);
