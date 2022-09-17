import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	signed: false
}

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		login: (state) => {
			state.signed = true;
		},
		logout: (state) => {
			state.signed = false;
		}
	}
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
