import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {},
	reducers: {
		actionIncrement(state, { payload: productId }) {
			state[productId] = + (state[productId] || 0) + 1;
		},
		actionDecrement(state, { payload: productId }) {
			if (state[productId] === 1) {
				delete state[productId];
			} else {
				state[productId] = + (state[productId] || 0) - 1;
			}
		},
		actionSetAmount(state, { payload }) {
			const { newAmount, id: productId } = payload;

			if (+newAmount === 0) delete state[productId];
			else state[productId] = newAmount;
		}
	},
	selectors: {
		selectCart: (state) => Object.keys(state).reduce((acc, productId) => {
			acc.push({ productId, amount: state[productId] });
			return acc
		}, []),
		selectCartProductById: (state, id) => state[id] || 0,
	},
})

export const { actionIncrement, actionDecrement, actionSetAmount } = cartSlice.actions;
export const { selectCart, selectCartProductById } = cartSlice.selectors;
