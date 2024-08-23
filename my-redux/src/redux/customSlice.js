import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    toggle: false,
};

const customSlice = createSlice({
    name: 'customState',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        incrementByAmount : (state, action) => {
            state.counter += action.payload;
        },
        toggleSwitch : (state) => {
            state.toggle = !state.toggle;
        },
    },
});

export const { increment, decrement, incrementByAmount, toggleSwitch } = customSlice.actions;
export default customSlice.reducer;