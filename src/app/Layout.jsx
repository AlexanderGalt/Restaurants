import { Header } from "../widgets/Header/Header.jsx"
import { Footer } from "../widgets/Footer/Footer.jsx"
import { ProgressBar } from "../widgets/ProgressBar/ProgressBar.jsx"
import { ThemeProvider } from "./providers/ThemeProvider.jsx"
import { AuthProvider } from "./providers/AuthProvider.jsx"

export function Layout({ children }) {
	return (
		<ThemeProvider>
			<AuthProvider>
				<Header />
				<main className="main">
					{children}
				</main>
				<ProgressBar />
				<Footer />
			</AuthProvider>
		</ThemeProvider>
	)
}