import { singInGoogleAuth } from '../../firebase/providersAuth';
import { ChekingCredentials, Login, Logout } from './authSlice'



export const chekingAuthentication = (email, password) => {

    return async (dispatch) => {
        dispatch(ChekingCredentials());
    };
};

export const startGoogleSingIn = () => {

    return async (dispatch) => {
        dispatch(ChekingCredentials());

        const result = await singInGoogleAuth();
        // console.log(result)


        if (!result.ok) return dispatch(Logout(result.errorMessage));
        dispatch(Login(result))



    };
};
