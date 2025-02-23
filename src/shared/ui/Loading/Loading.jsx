import { useNavigation } from "react-router-dom";
import styles from "./loading.module.css";

export const Loading = () => {
	const navigation = useNavigation();

	if (navigation.state === "idle") {
		return null;
	}

	return (
		<div className={styles["loading"]}>
			<div className={styles["loadingContent"]}>
				Загрузка...
			</div>
		</div>
	)
}