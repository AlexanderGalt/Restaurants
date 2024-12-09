import { useCallback } from "react";
import styles from "./TabsRestaurantsTitle.module.css";
import classNames from "classnames";
import { Button } from "../../../shared/Button/Button";

export const TabsRestaurantsTitle = ({ restaurantId, name, setCurrId, currId }) => {
	const ButtonOnClickCallback = useCallback(() => setCurrId(restaurantId), [setCurrId, restaurantId]);

	return (
		<Button
			onClick={ButtonOnClickCallback}
			className={
				classNames(styles['restaurantsTabsTitle'], {
					[styles['restaurantsTabsTitleActive']]: currId == restaurantId
				})
			}
			disabled={currId == restaurantId ? true : false}
		>{name}</Button>
	)
}