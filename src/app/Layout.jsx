import { Header } from "../widgets/Header/Header.jsx"
import { Footer } from "../widgets/Footer/Footer.jsx"
import { ProgressBar } from "../widgets/ProgressBar/ProgressBar.jsx"
import { Cart } from "../widgets/Cart/Cart.jsx"
import { useSelector } from "react-redux";
import { selectAuthorization } from "./redux/ui/authSlice";
import { Outlet } from "react-router-dom";
import { Loading } from "../shared/ui/Loading";

export function Layout({ children }) {
	const { isAuth } = useSelector(selectAuthorization);
	console.log("Ререндер Layout");
	return (
		<>
			<Header />
			<main className="main">
				<Outlet />
				{children} {/* Это для страницы notFound (404, компонент: "NotFoundPage")*/}
			</main>
			<Loading />
			<ProgressBar />
			{isAuth && <Cart />}
			<Footer />
		</>
	)
}