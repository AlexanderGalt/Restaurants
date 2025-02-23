// import { TabsRestaurants } from "../widgets/TabsRestaurants/TabsRestaurants.jsx";
import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from "./redux/store";
import { AppRouter } from "./routers/index.jsx";

export function App() {
	return (
		<ReduxProvider store={reduxStore}>
			<AppRouter />
		</ReduxProvider >
	)
}