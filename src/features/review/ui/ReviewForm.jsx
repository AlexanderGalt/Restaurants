import { useReviewForm } from "../model/useReviewForm.js";
import { Counter } from "@shared/ui/Counter/Counter.jsx";
import { Button } from "@shared/ui/Button/Button.jsx";
import styles from "./reviewForm.module.css";
import classNames from "classnames";
import { useSearchParams } from "react-router-dom";
import { selectAuthorization } from "@features/authorization/index.js";
import { useSelector } from "react-redux";

export const ReviewForm = ({ restaurantId }) => {
  const { id: userId, name } = useSelector(selectAuthorization);
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    form,
    setName,
    setText,
    increment,
    decrement,
    onChangeRatingReview,
    sendReviewForm,
    clearReviewForm,
    sendingReviewResult,
  } = useReviewForm({ restaurantId, userId, searchParams, setSearchParams });

  return (
    <form className={classNames(styles.reviewForm)} onSubmit={(e) => e.preventDefault()}>
      <h4 className={classNames(styles.reviewFormTitle)}>Форма отзыва</h4>
      {sendingReviewResult.isLoading && "Loading"}

      {sendingReviewResult.error && (
        <div>
          {"error" in sendingReviewResult.error ? sendingReviewResult.error.error : JSON.stringify(sendingReviewResult.error)}
        </div>
      )}

      <div className={classNames(styles.reviewFormBody)}>
        {searchParams.get("editingReviewId") ? (
          <span> {name} </span>
        ) : (
          <div className={styles.reviewFormField}>
            <label className={classNames(styles.reviewFieldLabel)}>
              <input
                type="text"
                name="reviewName"
                value={form.reviewName}
                onChange={setName}
                className={classNames(styles.reviewFieldInput)}
                placeholder="Имя"
              />
            </label>
          </div>
        )}
        <div className={styles.reviewFormField}>
          <label className={classNames(styles.reviewFieldLabel)}>
            <textarea
              type="text"
              name="reviewText"
              value={form.reviewText}
              onChange={setText}
              className={classNames(styles.reviewFieldInput)}
              placeholder="Текст отзыва"
            />
          </label>
        </div>
        <div className={classNames(styles.reviewFormField, styles.reviewFormCounter)}>
          Оценка:
          <Counter counterValue={form.reviewRating} increment={increment} decrement={decrement} onChange={onChangeRatingReview} />
        </div>
      </div>
      <div className={classNames(styles.reviewFormBtns)}>
        <Button disabled={sendingReviewResult.isLoading} onClick={clearReviewForm}>
          Отмена
        </Button>
        <Button disabled={sendingReviewResult.isLoading} onClick={sendReviewForm}>
          Отправить отзыв
        </Button>
      </div>
    </form>
  );
};
