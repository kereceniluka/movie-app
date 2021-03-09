import { 
    USER_SIGNUP, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_FAIL,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL, 
} from '../constants/auth';
import { getFirebase } from 'react-redux-firebase';

export const login = (email, password) => async (dispatch) => {
    try {
        const firebase = getFirebase();
        const data = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(data);
        dispatch({ type: USER_LOGIN_SUCCESS });

    } catch (error) {
        console.log(error);
        dispatch({ type: USER_LOGIN_FAIL, payload: error });
    }
}

export const logout = () => async (dispatch) => {
    try {
        const firebase = getFirebase();
        await firebase.auth().signOut();
        dispatch({ type: USER_LOGOUT_SUCCESS });

    } catch (error) {
        dispatch({ type: USER_LOGOUT_FAIL, payload: error });
    }
}

export const signup = (email, password) => async (dispatch) => {
    try {
        const firebase = getFirebase();
        const data = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(data);
        dispatch({ type: USER_SIGNUP_SUCCESS });

    } catch (error) {
        dispatch({ type: USER_SIGNUP_FAIL, payload: error });
    }
}