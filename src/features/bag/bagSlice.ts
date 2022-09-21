import { createSlice } from "@reduxjs/toolkit";
import { ICardItem } from '../../components/CardItem';

export interface IBagItem extends ICardItem {
	amount: number
}

const bagItems: IBagItem[] = [];

const initialState = {
	bagItems: bagItems,
	amount: 0,
	total: 0
}

const bagSlice = createSlice({
	name: 'bag',
	initialState: initialState,
	reducers: {
		clearBag: (state) => {
			state.bagItems = [];
			state.amount = 0;
		},
		addItem: (state, action) => {
			const newItem = action.payload;
			const oldItem = state.bagItems.find(item => item.id === newItem.id)
			if (oldItem) {
				oldItem.amount++;
			} else {
				state.bagItems.push({...newItem, amount: 1})
			}
			state.amount++;
		},
		removeItem: (state, action) => {
			const itemId = action.payload;
			const item = state.bagItems.find(item => item.id === itemId);
			if (item) {
				const itemAmount = item.amount;
				state.amount -= itemAmount;
			}
			state.bagItems = state.bagItems.filter(item => item.id !== itemId);
		},
		increase: (state, action) => {
			const cartItem = state.bagItems.find(item => item.id === action.payload);
			if (cartItem) {
				cartItem.amount += 1;
				state.amount++;
			}
		},
		decrease: (state, action) => {
			const cartItem = state.bagItems.find(item => item.id === action.payload);
			if (cartItem) {
				cartItem.amount -= 1;
				state.amount--;
			}
		},
		calculateTotals: (state) => {
			let total = 0;
			state.bagItems.forEach(item => {
				total += item.amount * item.price;
			});
			state.total = total;
		}
	}
})

export const { clearBag, addItem, removeItem, increase, decrease, calculateTotals } = bagSlice.actions;
export default bagSlice.reducer;