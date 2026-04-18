/* eslint-disable no-case-declarations */
import { useSendReviewMutation } from "@entities/review/api/reviewApi";
import { selectAuthorization } from "@features/authorization";
import { useReducer } from "react";
import { useSelector } from "react-redux";

const DEFOULT_FORM_STATE = {
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

    case SET_TEXT_REVIEW_FORM:
      return {
        ...state,
        reviewText: payload,
      };

    case INCREMENT_RATING_REVIEW_FORM:
      if (state.reviewRating >= 5) {
        return state;
      } else {
        return {
          ...state,
          reviewRating: +state.reviewRating + 1,
        };
      }

    case DECREMENT_RATING_REVIEW_FORM:
      if (state.reviewRating <= 0) {
        return state;
      } else {
        return {
          ...state,
          reviewRating: +state.reviewRating - 1,
        };
      }

    case SET_RATING_REVIEW_FORM:
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

    case CLEAR_REVIEW_FORM:
      return DEFOULT_FORM_STATE;

    default:
      return state;
  }
}

export function useReviewForm(restaurantId) {
  const { id: userId } = useSelector(selectAuthorization);
  const [form, dispatch] = useReducer(reducer, DEFOULT_FORM_STATE);
  const [sendReview, sendReviewResult] = useSendReviewMutation();

  const sendReviewForm = async () => {
    try {
      await sendReview({ text: form.reviewText, rating: form.reviewRating, userId, restaurantId }).unwrap();

      dispatch({ type: CLEAR_REVIEW_FORM });
    } catch (e) {
      // ничего диспатчить не нужно, т.к. ошибка уже есть в RTKQ
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

  const clearReviewForm = () => dispatch({ type: CLEAR_REVIEW_FORM });

  return {
    form,
    sendReviewResult,
    setName,
    setText,
    clearReviewForm,
    sendReviewForm,
    increment,
    decrement,
    onChangeRatingReview,
  };
}
