import { CounterOfMenu } from "./CounterOfMenu.jsx";

export function Menu({ menuData }) {
	return !!menuData.length && (
		<div className="restaurant-menu">
			<h3 className="restaurant-menu__title">Меню</h3>
			<ul className="restaurant-menu__list">
				{menuData.map(menuItem => (
					<li
						key={menuItem.id} // здесь не нужен ".key", т.к. "li" - это не компонент, но для красоты указал
						className="restaurant-menu__item"
						data-price={menuItem.price}
						data-ingredients={menuItem.ingredients}
					>
						{menuItem.name}
						<CounterOfMenu />
					</li>
				))}
			</ul>
		</div>
	)
}