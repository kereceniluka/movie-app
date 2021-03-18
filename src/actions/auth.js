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
import { getFirestore } from 'redux-firestore';

export const login = (email, password) => async (dispatch) => {
    try {
        const firebase = getFirebase();

        const data = await firebase.auth().signInWithEmailAndPassword(email, password);
        dispatch({ type: USER_LOGIN_SUCCESS });

    } catch (error) {
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
        const firestore = getFirestore();

        const { user: { uid } } = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await firestore.collection('users').doc(uid).set({ 
            watchlist: {
                movies: [],
                tvShows: [],
            }, 
        });

        dispatch({ type: USER_SIGNUP_SUCCESS });

    } catch (error) {
        dispatch({ type: USER_SIGNUP_FAIL, payload: error });
    }
}