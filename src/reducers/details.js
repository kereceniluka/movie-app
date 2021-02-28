import {
    TRENDING_MOVIES_REQUEST,
    TRENDING_MOVIES_SUCCESS,
    TRENDING_MOVIES_FAIL,
    TRENDING_TVS_REQUEST,
    TRENDING_TVS_SUCCESS,
    TRENDING_TVS_FAIL
} from '../constants/details';

export const popularMovieDetailsReducer = (state = { loading: null, data: {}, error: null }, action) => {
    switch(action.type) {
        case TRENDING_MOVIES_REQUEST:
            return { loading: true, data: {} };
        case TRENDING_MOVIES_SUCCESS:
            return { loading: false, data: action.payload };
        case TRENDING_MOVIES_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const popularTVsDetailsReducer = (state = { loading: null, data: {}, error: null }, action) => {
    switch(action.type) {
        case TRENDING_TVS_REQUEST:
            return { loading: true, data: {} };
        case TRENDING_TVS_SUCCESS:
            return { loading: false, data: action.payload };
        case TRENDING_TVS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}