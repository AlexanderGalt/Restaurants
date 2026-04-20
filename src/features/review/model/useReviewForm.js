/* eslint-disable no-case-declarations */
import { useSendReviewMutation, useUpdateReviewByIdMutation } from "@entities/review/api/reviewApi";
import { useReducer } from "react";

const DEFAULT_FORM_STATE = {
  reviewName: "",
  reviewText: "",
  reviewRating: 0,
  error: "",
};

const CLEAR_REVIEW_FORM = "clearReviewForm";

const SET_NAME_REVIEW_FORM = "setNameReviewForm";
const SET_TEXT_REVIEW_FORM = "setTextReviewForm";

const INCREMENT_RATING_REVIEW_FORM = "incrementRatingReviewForm";
const DECREMENT_RATING_REVIEW_FORM = "decrementRatingReviewForm";
const SET_RATING_REVIEW_FORM = "setRatingReviewForm";

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME_REVIEW_FORM:
      return {
        ...state,
        reviewName: payload,
      };

    case SET_TEXT_REVIEW_FORM: {
      return {
        ...state,
        reviewText: payload,
      };
    }

    case INCREMENT_RATING_REVIEW_FORM: {
      if (state.reviewRating >= 5) {
        return state;
      } else {
        return {
          ...state,
          reviewRating: +state.reviewRating + 1,
        };
      }
    }

    case DECREMENT_RATING_REVIEW_FORM: {
      if (state.reviewRating <= 0) {
        return state;
      } else {
        return {
          ...state,
          reviewRating: +state.reviewRating - 1,
        };
      }
    }

    case SET_RATING_REVIEW_FORM: {
      let newReviewRatingValue = payload;

      if (payload < 0) {
        newReviewRatingValue = 0;
      } else if (payload > 5) {
        newReviewRatingValue = 5;
      }

      return {
        ...state,
        reviewRating: newReviewRatingValue,
      };
    }
    case CLEAR_REVIEW_FORM: {
      return { ...DEFAULT_FORM_STATE };
    }
    default: {
      return state;
    }
  }
}

export function useReviewForm({ restaurantId, searchParams, setSearchParams, userId }) {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_STATE);
  const [addReview, addReviewResult] = useSendReviewMutation();
  const [updateReviewById, updateReviewResult] = useUpdateReviewByIdMutation();

  const editingReviewId = searchParams.get("editingReviewId");

  const sendingReviewResult = editingReviewId ? updateReviewResult : addReviewResult;

  const sendReviewForm = async () => {
    try {
      if (editingReviewId) {
        await updateReviewById({ newReviewData: form.reviewText, reviewId: editingReviewId }).unwrap();

        const params = new URLSearchParams(searchParams);
        params.delete("editingReviewId");
        setSearchParams(params);
      } else {
        await addReview({ text: form.reviewText, rating: form.reviewRating, userId, restaurantId }).unwrap();
      }
      dispatch({ type: CLEAR_REVIEW_FORM });
    } catch (e) {
      console.dir(e);
    }
  };

  const increment = () => dispatch({ type: INCREMENT_RATING_REVIEW_FORM });
  const decrement = () => dispatch({ type: DECREMENT_RATING_REVIEW_FORM });

  const onChangeRatingReview = (e) => {
    const value = e.nativeEvent.data;
    const isNumber = (value) => /^-?\d+(\.\d+)?$/.test(value);

    if (isNumber(value)) dispatch({ type: SET_RATING_REVIEW_FORM, payload: value });
  };

  const setName = (e) => dispatch({ type: SET_NAME_REVIEW_FORM, payload: e.target.value });

  const setText = (e) => dispatch({ type: SET_TEXT_REVIEW_FORM, payload: e.target.value });

  const clearReviewForm = () => {
    const params = new URLSearchParams(searchParams);

    params.delete("editingReviewId");
    setSearchParams(params);
    dispatch({ type: CLEAR_REVIEW_FORM });
  };

  return {
    form,
    sendingReviewResult,
    setName,
    setText,
    clearReviewForm,
    sendReviewForm,
    increment,
    decrement,
    onChangeRatingReview,
  };
}
