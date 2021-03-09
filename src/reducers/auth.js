import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
} from '../constants/auth';

const initialState = {
    error: null,
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN_SUCCESS:
            return { ...state, error: null };
        case USER_LOGIN_FAIL:
            return { ...state, error: action.payload };
        case USER_SIGNUP_SUCCESS:
            return { ...state, error: null };
        case USER_SIGNUP_FAIL:
            return { ...state, error: action.payload };
        case USER_LOGOUT_SUCCESS:
            return state;
        case USER_LOGOUT_FAIL:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}