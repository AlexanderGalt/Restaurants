import { Layout } from "./Layout.jsx";
import { TabsRestaurants } from "../widgets/TabsRestaurants/TabsRestaurants.jsx";
import { Provider as ReduxProvider } from "react-redux"
import { reduxStore } from "./redux/store"

export function App() {
	return (
		<ReduxProvider store={reduxStore}>
			<Layout>
				<TabsRestaurants />
			</Layout>
		</ReduxProvider>
	)
}