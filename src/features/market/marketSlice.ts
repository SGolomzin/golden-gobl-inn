import { createSlice } from '@reduxjs/toolkit';
import storeItems from '../../storeItems';

const initialState = {
	itemsList: storeItems,
	modalActive: false,
	modalActiveItemId: null
}

const marketSlice = createSlice({
	name: 'market',
	initialState: initialState,
	reducers: {
		fetchItems: () => {},
		openModal: (state, action) => {
			state.modalActive = true;
			state.modalActiveItemId = action.payload;
		},
		closeModal: (state) => {
			state.modalActive = false;
			state.modalActiveItemId = null;
		}
	}
})

export const { fetchItems, openModal, closeModal } = marketSlice.actions; 
export default marketSlice.reducer;