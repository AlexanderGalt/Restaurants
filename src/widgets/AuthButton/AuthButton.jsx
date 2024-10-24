import { Button } from "../../shared/Button/Button.jsx";
import styles from "./AuthButton.module.css";
import { useAuthContext } from "../../app/providers/AuthProvider.jsx"

export const AuthButton = () => {
	const { doToggleAuth, authValue } = useAuthContext();

	return (
		<Button
			onClick={doToggleAuth}
			className={styles.authButton}
		>
			{authValue.isAuth ? `${authValue.name} | LogOut` : "LogIn"}
		</Button>
	)
}