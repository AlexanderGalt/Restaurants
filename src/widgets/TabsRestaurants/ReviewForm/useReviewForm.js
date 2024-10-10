import { useReducer } from "react";

const DEFOULT_FORM_STATE = {
	reviewName: "",
	reviewText: "",
	reviewRating: 0,
}

const CLEAR_REVIEW_FORM = "clearReviewForm";
const SEND_REVIEW_FORM = "sendReviewForm";

const SET_NAME_REVIEW_FORM = "setNameReviewForm";
const SET_TEXT_REVIEW_FORM = "setTextReviewForm";

const INCREMENT_RATING_REVIEW_FORM = "incrementRatingReviewForm";
const DECREMENT_RATING_REVIEW_FORM = "decrementRatingReviewForm";

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
				return state
			} else {
				return {
					...state,
					reviewRating: state.reviewRating + 1,
				};
			}

		case DECREMENT_RATING_REVIEW_FORM:
			if (state.reviewRating <= 0) {
				return state
			} else {
				return {
					...state,
					reviewRating: state.reviewRating - 1,
				};
			}

		case CLEAR_REVIEW_FORM:
			return DEFOULT_FORM_STATE;

		case SEND_REVIEW_FORM:
			// fetch()
			return DEFOULT_FORM_STATE;

		default:
			return state
	}
}

export function useReviewForm() {
	const [form, dispatch] = useReducer(reducer, DEFOULT_FORM_STATE);

	const increment = () => dispatch({ type: INCREMENT_RATING_REVIEW_FORM });
	const decrement = () => dispatch({ type: DECREMENT_RATING_REVIEW_FORM });

	const setName = (e) => dispatch({ type: SET_NAME_REVIEW_FORM, payload: e.target.value });
	const setText = (e) => dispatch({ type: SET_TEXT_REVIEW_FORM, payload: e.target.value });
	const clearReviewForm = () => dispatch({ type: CLEAR_REVIEW_FORM });
	const sendReviewForm = () => dispatch({ type: SEND_REVIEW_FORM });

	return {
		form,
		setName,
		setText,
		clearReviewForm,
		sendReviewForm,
		increment,
		decrement,
	}
}