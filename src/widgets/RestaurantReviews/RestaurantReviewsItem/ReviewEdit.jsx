import classNames from "classnames";
import styles from "./ReviewEdit.module.css";
import { useState } from "react";
import { Button } from "@shared/ui/Button";
import { useReviewEdit } from "./useReviewEdit";

export const ReviewEdit = ({ defaultReviewText, setMode, reviewId }) => {
  const [editingReviewText, setEditingReviewText] = useState(defaultReviewText);

  const { handleButtonAbort, handleButtonSend, updateReviewResult, handleEditingReviewText } = useReviewEdit(
    setMode,
    setEditingReviewText,
  );

  return (
    <>
      {updateReviewResult.isLoading && "Loading"}
      {updateReviewResult.error && updateReviewResult.error.error}

      <input value={editingReviewText} onChange={handleEditingReviewText} />

      <div className={classNames(styles.reviewEditButtons)}>
        <Button
          className={classNames(styles.reviewEditButton, styles.reviewEditButtonsAbort)}
          onClick={handleButtonAbort}
          disabled={updateReviewResult.isLoading}
        >
          Отмена
        </Button>

        <Button
          className={classNames(styles.reviewEditButton, styles.reviewEditButtonsSend)}
          onClick={() => handleButtonSend({ newReviewData: editingReviewText, reviewId })}
          disabled={updateReviewResult.isLoading}
        >
          Отправить
        </Button>
      </div>
    </>
  );
};
