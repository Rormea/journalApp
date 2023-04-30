import { createSlice } from '@reduxjs/toolkit';


export const authSliceSlice = createSlice({

    name: 'auth',

    initialState: {
        status: 'no-autenticado', // no-autenticado y autenticado checking
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },

    reducers: {
        increment: (state /*action*/) => {
            state.counter += 1;
            /*state.counter += action.payload;*/
        },

        Login: (state, action) => {
            state.status = 'logged in',
                state.uid = action.payload.uid
            state.email = action.payload.email
            state.displayName = action.payload.displayName
            state.photoURL = action.payload.photoURL
            state.errorMessage = action.payload.errorMessage;
        },

        Logout: (state, { payload }) => {
            state.status = 'logged out',
                state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage;
        },


        ChekingCredentials: (state) => {
            state.status = 'checking';
        },
    },

});
// Action creators are generated for each case reducer function
export const { increment, Login, Logout, ChekingCredentials } = authSliceSlice.actions