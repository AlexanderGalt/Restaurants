import { Button } from "../../shared/ui/Button/Button.jsx";
import styles from "./AuthButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { actionToggleAuth, selectAuthorization } from "../../app/redux/ui/authSlice";
import { useCallback } from "react";

export const AuthButton = () => {
	const dispatch = useDispatch();
	const onClickCallback = useCallback(() => dispatch(actionToggleAuth()), [dispatch]);
	const { isAuth, name } = useSelector(selectAuthorization);

	return (
		<Button
			onClick={onClickCallback}
			className={styles.authButton}
		>
			{isAuth ? `${name} | LogOut` : "LogIn"}
		</Button>
	)
}