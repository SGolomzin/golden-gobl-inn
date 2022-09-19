import { createSlice } from '@reduxjs/toolkit';
import storeItems from '../../storeItems';

const initialState = {
	itemsList: storeItems
}

const marketSlice = createSlice({
	name: 'market',
	initialState: initialState,
	reducers: {
		fetchItems: () => {}
	}
})

export const { fetchItems } = marketSlice.actions; 
export default marketSlice.reducer;