import { useReviewForm } from "./useReviewForm.js";
import { Counter } from "../../../shared/Counter/Counter.jsx";
import { Button } from "../../../shared/Button/Button.jsx"

import styles from "./reviewForm.module.css"
import classNames from "classnames"

export function ReviewForm() {
	const { form, setName, setText, increment, decrement, sendReviewForm, clearReviewForm } = useReviewForm();

	return (
		<form
			className={classNames(styles.reviewForm)}
			onSubmit={(e) => e.preventDefault()}
		>
			<h4 className={classNames(styles.reviewFormTitle)}>
				Форма отзыва
			</h4>
			<div className={classNames(styles.reviewFormBody)}>
				<div
					className={classNames(styles.reviewFormField)}>
					<label className={classNames(styles.reviewFieldLabel)}>
						<input
							type="text"
							name='reviewName'
							value={form.reviewName}
							onChange={setName}
							className={classNames(styles.reviewFieldInput)}
							placeholder="Имя"
						/>
					</label>
				</div>
				<div className={classNames(styles.reviewFormField)}>
					<label className={classNames(styles.reviewFieldLabel)}>
						<input
							type="text"
							name='reviewText'
							value={form.reviewText}
							onChange={setText}
							className={classNames(styles.reviewFieldInput)}
							placeholder="Текст отзыва"
						/>
					</label>
				</div>
				<div className={classNames(
					styles.reviewFormField,
					styles.reviewFormCounter
				)}>Оценка:
					<Counter
						counterValue={form.reviewRating}
						increment={increment}
						decrement={decrement}
					/>
				</div>
			</div>
			<div className={classNames(styles.reviewFormBtns)}>
				<Button
					onClick={clearReviewForm}
					className={classNames(styles.reviewFormClear, styles.reviewFormBtn)}>
					Очистить форму
				</Button>
				<Button
					onClick={sendReviewForm}
					className={classNames(styles.reviewFormBtn)}>
					Отправить отзыв
				</Button>
			</div>

		</form >
	)
}
