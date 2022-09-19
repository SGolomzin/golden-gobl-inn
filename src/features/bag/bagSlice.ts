import { createSlice } from "@reduxjs/toolkit";
import { ICardItem } from '../../components/CardItem';

interface IBagItem extends ICardItem {
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
			state.bagItems = state.bagItems.filter(item => item.id !== itemId);
		},
		
		// increase: (state, action) => {
		// 	const cartItem = state.bagItems.find(item => item.id === action.payload);
		// 	cartItem.amount += 1;
		// },
		// decrease: (state, action) => {
		// 	const cartItem = state.bagItems.find(item => item.id === action.payload);
		// 	cartItem.amount -= 1;
		// },
		// calculateTotals: (state) => {
		// 	let amount = 0;
		// 	let total = 0;
		// 	state.bagItems.forEach(item => {
		// 		amount += item.amount;
		// 		total += item.amount * item.price;
		// 	});
		// 	state.amount = amount;
		// 	state.total = total;
		// }
	}
})

export const { clearBag, addItem, removeItem } = bagSlice.actions;
export default bagSlice.reducer;