import { useEffect } from "react"
import { useState } from "react"

function calcPercentage() {
	return (((document.documentElement.clientHeight + window.scrollY) / document.documentElement.scrollHeight) * 100).toFixed(0)
}

export function ProgressBar() {
	const [ProgressScrollBarValue, setProgressScrollBarValue] = useState("0%");

	useEffect(() => {
		setProgressScrollBarValue(calcPercentage());
		const handleScroll = (e) => {
			setProgressScrollBarValue(calcPercentage());
		};
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		}
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "20px",
				background: "#000",
			}}
			className="progress-scroll-bar"
		>
			<div
				style={{
					width: ProgressScrollBarValue + "%",
					height: "100%",
					background: "red",
				}}
				className="progress-scroll-bar__value">

			</div>
		</div>
	)
}