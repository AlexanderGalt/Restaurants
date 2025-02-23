import { useState } from "react";
import { useClock } from "../model/useClock";

export const Clock = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	useClock(setTime);
	return time
}