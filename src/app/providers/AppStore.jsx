import { Provider as ReduxProvider } from "react-redux";
// import { reduxStore } from "@shared/model/redux/store.jsx";
import { reduxStore } from "/src/shared/model/redux/store";

export const AppStore = ({ children }) => <ReduxProvider store={reduxStore}>{children}</ReduxProvider>;
