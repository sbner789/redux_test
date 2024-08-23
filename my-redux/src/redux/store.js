import { configureStore } from '@reduxjs/toolkit';
import customReducer from './customSlice'

export const store = configureStore({
    reducer: {
        customState: customReducer
    },
});