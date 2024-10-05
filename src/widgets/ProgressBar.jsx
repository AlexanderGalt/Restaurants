import { useEffect } from "react"
import { useState } from "react"

function calcPercentage() {
	return (
		((document.documentElement.clientHeight + window.scrollY) / document.documentElement.scrollHeight) * 100
	).toFixed(0)
}

export function ProgressBar() {
	const [progressScrollBarValue, setProgressScrollBarValue] = useState(); // если в "useState" указать в параметр "initialValue" вызов функции "calcPercentage()" и не вызывать отдельно "handleScroll()" в "useEffect()", то будет баг:
	// при открытии страницы значение прогресс-бара будет некорректным, т.к. возьмётся из параметра "initialValue", т.е. будет "calcPercentage()", но при открытии страницы ещё не все элементы ДОМа отрисовались, реакт не успевает их зарендерить. В следствии чего, на моммент подсчёта формулой "calcPercentage()", высота нашей страницы меньше, чем должна быть на самом деле (т.к. не всё ещё успело отрисоваться). Поэтому при открытии стрницы мы полчим не 70% прогресс бара (как должно быть), а 95% (т.к. страница ещё не успела вся зарендерится и занять долнжную высоту). Т.е. нам нужно считать значерние прогресбара только ПОСЛЕ того как все компаненты замаунтились (смантировались, зарендерились в ДОМ). Для этого необходимо использовать "useEffect()".

	useEffect(() => {
		const handleScroll = () => setProgressScrollBarValue(calcPercentage());
		handleScroll(); // если этого вызова не будет, то при открытии страницы, значение прогресс-бара будет некорректным, т.к. коректное значение посчитается только при скроле. Т.е. без этой строчки нам будет необходимо проскролить страницу чтобы увидитеть корректное значение прогресс-бара.
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
					width: progressScrollBarValue + "%",
					height: "100%",
					background: "red",
				}}
				className="progress-scroll-bar__value">

			</div>
		</div>
	)
}