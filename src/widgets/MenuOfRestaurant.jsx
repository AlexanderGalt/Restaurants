import { Counter } from "../shared/Counter.jsx";

export function Menu({ menuData }) {
	return !!menuData.length && (
		<div className="restaurant-menu">
			<h3 className="restaurant-menu__title">Меню</h3>
			<ul className="restaurant-menu__list">
				{menuData.map(menuItem => (
					<li
						key={menuItem.id}
						className="restaurant-menu__item"
						data-price={menuItem.price}
						data-ingredients={menuItem.ingredients}
					>
						{menuItem.name}
						<Counter />
					</li>
				))}
			</ul>
		</div>
	)
}