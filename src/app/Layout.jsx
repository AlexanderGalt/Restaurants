import { Header } from "../widgets/Header.jsx"
import { Footer } from "../widgets/Footer.jsx"

export function Layout({ children }) {
	return (
		<>
			<Header />
			<main className="main">
				{children}
			</main>
			<Footer />
		</>
	)
}