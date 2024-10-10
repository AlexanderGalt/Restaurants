import { Header } from "../widgets/Header/Header.jsx"
import { Footer } from "../widgets/Footer/Footer.jsx"
import { ProgressBar } from "../widgets/ProgressBar/ProgressBar.jsx"

export function Layout({ children }) {
	return (
		<>
			<Header />
			<main className="main">
				{children}
			</main>
			<ProgressBar />
			<Footer />
		</>
	)
}