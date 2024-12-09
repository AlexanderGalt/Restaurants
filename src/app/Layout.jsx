import { Header } from "../widgets/Header/Header.jsx"
import { Footer } from "../widgets/Footer/Footer.jsx"
import { ProgressBar } from "../widgets/ProgressBar/ProgressBar.jsx"
import { Cart } from "../widgets/Cart/Cart.jsx"
import { useSelector } from "react-redux";
import { selectAuthorization } from "./redux/ui/authSlice";

export function Layout({ children }) {
	const { isAuth } = useSelector(selectAuthorization);

	return (
		<>
			<Header />
			<main className="main">
				{children}
			</main>
			{isAuth && <Cart />}
			<ProgressBar />
			<Footer />
		</>
	)
}