import { useReviewForm } from "./useReviewForm.js";
import { Counter } from "../../shared/Counter.jsx";

export function ReviewForm() {
	const { form, setName, setText, increment, decrement, sendReviewForm, clearReviewForm } = useReviewForm();

	return (
		<form
			className='review-form'
			onSubmit={(e) => e.preventDefault()}
		>
			<div className="review-form__body">
				<div
					className="review-form-field">
					<label className="squiz-field__label">
						<input
							type="text"
							name='reviewName'
							value={form.reviewName}
							onChange={setName}
							className="squiz-field__input"
							placeholder="Имя"
						/>
					</label>
				</div>
				<div className="review-form-field">
					<label className="squiz-field__label">
						<input
							type="text"
							name='reviewText'
							value={form.reviewText}
							onChange={setText}
							className="squiz-field__input"
							placeholder="Текст отзыва"
						/>
					</label>
				</div>
				<div className="review-form-field review-form-counter">
					<Counter
						counterValue={form.reviewRating}
						increment={increment}
						decrement={decrement}
					/>
				</div>
			</div>
			<button
				onClick={clearReviewForm}
				className="review-form__clear review-form__btn">
				Очистить форму
			</button>
			<button
				onClick={sendReviewForm}
				className="review-form__btn">
				Отправить отзыв
			</button>
		</form >
	)
}
