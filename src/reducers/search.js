import { 
    SEARCH_MOVIE_REQUEST,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAIL,
    SEARCH_TV_REQUEST,
    SEARCH_TV_SUCCESS,
    SEARCH_TV_FAIL,
} from '../constants/search';

export const searchedMovieReducer = (state = { loading: null, data: {}, error: null }, action) => {
    switch(action.type) {
        case SEARCH_MOVIE_REQUEST:
            return { loading: true, data: {} };
        case SEARCH_MOVIE_SUCCESS:
            return { loading: false, data: action.payload };
        case SEARCH_MOVIE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const searchedTVShowReducer = (state = { loading: null, data: {}, error: null }, action) => {
    switch(action.type) {
        case SEARCH_TV_REQUEST:
            return { loading: true, data: {} };
        case SEARCH_TV_SUCCESS:
            return { loading: false, data: action.payload };
        case SEARCH_TV_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}