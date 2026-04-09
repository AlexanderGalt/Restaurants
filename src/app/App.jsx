import { AppRouter } from "./routers";
import { AppStore } from "./providers/AppStore.jsx";

export function App() {
  return (
    <AppStore>
      <AppRouter />
    </AppStore>
  );
}
