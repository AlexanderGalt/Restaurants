export function Reviews({ reviewsData }) {
	return !!reviewsData.length && (
		<div className="restaurant-reviews">
			<h3 className="restaurant-reviews__title">Отзывы</h3>
			<ul className="restaurant-reviews__list">
				{reviewsData.map(reviewsItem => (
					<li
						key={reviewsItem.id}
						className="restaurant-reviews__item"
						data-rating={reviewsItem.rating}
						data-user={reviewsItem.user}
					>{reviewsItem.text}</li>
				))}
			</ul>
		</div>
	)
}