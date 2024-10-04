import { Header } from "../widgets/Header.jsx"
import { Footer } from "../widgets/Footer.jsx"
import { ProgressBar } from "../widgets/ProgressBar.jsx"
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