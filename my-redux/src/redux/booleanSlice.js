import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false
}

const booleanSlice = createSlice({
    name: 'boolean',
    initialState,
    reducers: {
        pressFalse: (state) => {
            state.value = false;
        },
        pressTrue: (state) => {
            state.value = true;
        },
        toggleSwitch: (state) => {
            state.value = !state.value;
        }
    },
})

export const { pressFalse, pressTrue, toggleSwitch } = booleanSlice.actions;
export default booleanSlice.reducer;