import { AppRouter } from "./routers/index.jsx";
import { AppStore } from "./redux/index.jsx";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";

export function App() {
  return (
    <AppStore>
      <AppRouter />
    </AppStore>
  );
}
/* <ReduxProvider store={reduxStore}>
			<AppRouter />
		</ReduxProvider > */
