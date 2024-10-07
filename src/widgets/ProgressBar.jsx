import { useEffect } from "react"
import { useState } from "react"

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
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				height: '16px',
				width: "100%",
			}}>
			<div style={{
				width: `${progressScrollBar}%`,
				background: "red",
				transition: '0.3s ease-out',
				height: "100%"
			}}></div>
		</div>
	);
};