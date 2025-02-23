import { useEffect } from "react";

export const useClock = (setTime) => {
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
		return () => clearInterval(interval);
	}, [setTime]);
};