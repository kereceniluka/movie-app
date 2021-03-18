import {
    TRENDING_MOVIES_REQUEST,
    TRENDING_MOVIES_SUCCESS,
    TRENDING_MOVIES_FAIL,
    TRENDING_TVS_REQUEST,
    TRENDING_TVS_SUCCESS,
    TRENDING_TVS_FAIL,
    MOVIE_GENRES_REQUEST,
    MOVIE_GENRES_SUCCESS,
    MOVIE_GENRES_FAIL,
    TVSHOW_SEASONS_REQUEST,
    TVSHOW_SEASONS_SUCCESS,
    TVSHOW_SEASONS_FAIL,
    DETAILS_REQUEST,
    DETAILS_SUCCESS,
    DETAILS_FAIL,
} from '../constants/details';

const initialState = {
    loading: null,
    data: {},
    error: null,
}

export const popularMovieDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TRENDING_MOVIES_REQUEST:
            return { ...state, loading: true };
        case TRENDING_MOVIES_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case TRENDING_MOVIES_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const popularTVsDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TRENDING_TVS_REQUEST:
            return { ...state, loading: true };
        case TRENDING_TVS_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case TRENDING_TVS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const movieGenresReducer = (state = initialState, action) => {
    switch(action.type) {
        case MOVIE_GENRES_REQUEST:
            return { ...state, loading: true };
        case MOVIE_GENRES_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case MOVIE_GENRES_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const tvShowSeasonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TVSHOW_SEASONS_REQUEST:
            return { ...state, loading: true };
        case TVSHOW_SEASONS_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case TVSHOW_SEASONS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const detailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case DETAILS_REQUEST:
            return { ...state, loading: true };
        case DETAILS_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}