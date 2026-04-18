import { useUpdateReviewByIdMutation } from "@entities/review/api/reviewApi";

export const useReviewEdit = (setMode, setEditingReviewText) => {
  const [trigger, updateReviewResult] = useUpdateReviewByIdMutation();

  const handleEditingReviewText = (e) => {
    setEditingReviewText(e.target.value);
  };

  const handleButtonAbort = () => setMode("view");

  const handleButtonSend = async ({ newReviewData, reviewId }) => {
    const promiseResponse = trigger({ reviewId, newReviewData });

    try {
      const result = await promiseResponse;

      if (result.data) {
        setMode("view");
      }
    } catch (e) {
      console.log(e.error);
    }
  };

  return {
    handleButtonAbort,
    handleButtonSend,
    updateReviewResult,
    handleEditingReviewText,
  };
};
