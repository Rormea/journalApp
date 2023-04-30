import { configureStore } from '@reduxjs/toolkit'
import { authSliceSlice } from './auth/authSlice';


export const store = configureStore({
    reducer: {
        auth: authSliceSlice.reducer,
    },
});