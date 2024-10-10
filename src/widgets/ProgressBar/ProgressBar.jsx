import { useEffect } from "react";
import { useState } from "react";

import styles from "./progressBar.module.css";
import classNames from "classnames";

export function ProgressBar() {
	const [progressScrollBar, setProgressScrollBar] = useState(0); // 0 - значение прогрес-скролбара при открытии страницы.

	useEffect(() => {
		const handleScroll = () => {
			const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
			const documentHeight = scrollHeight - clientHeight; // вся высота документа, которую нам можно проскролить.
			setProgressScrollBar((scrollTop / documentHeight) * 100);
		};
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll); // очистка события при размонтировании компонента
	}, []);

	return (
		<div className={classNames(styles.progressBar)}>
			<div
				className={classNames(styles.progressBarValue)}
				style={{
					width: `${progressScrollBar}%`
				}}></div>
		</div>
	);
};