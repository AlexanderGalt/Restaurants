import { NavLink, Outlet, useParams } from 'react-router-dom';
import styles from './restaurantTabs.module.css';
import classNames from 'classnames';

export const RestaurantTabs = ({ restaurantMenuData, restaurantReviewsData }) => {
	const { restaurantId } = useParams();

	return (
		<div className={styles['restaurantTabs']}>
			<div className={styles['restaurantTabsHead']}>
				{restaurantMenuData && <NavLink to="menu" className={
					({ isActive }) => classNames(styles.restaurantTabsTitle, {
						[styles.active]: isActive || !restaurantId
					})
				}>
					Menu
				</NavLink>}
				{restaurantReviewsData && <NavLink to="reviews" className={
					({ isActive }) => classNames(styles.restaurantTabsTitle, {
						[styles.active]: isActive || (!restaurantId && !restaurantMenuData)
					})
				}>
					Reviews
				</NavLink>}
			</div>
			<div className={styles['restaurantsTabsBody']}>
				<Outlet context={{ restaurantMenuData, restaurantReviewsData }} />
			</div>
		</div>
	)
}