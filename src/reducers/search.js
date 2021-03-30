import { 
    SEARCH_MOVIE_REQUEST,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAIL,
    SEARCH_TV_REQUEST,
    SEARCH_TV_SUCCESS,
    SEARCH_TV_FAIL,
} from '../constants/search';

const initialState = {
    loading: null,
    data: {},
    error: null,
}

export const searchedDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_MOVIE_REQUEST:
            return { ...state, loading: true };
        case SEARCH_MOVIE_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case SEARCH_MOVIE_FAIL:
            return { ...state, loading: false, error: action.payload };
        case SEARCH_TV_REQUEST:
            return { ...state, loading: true };
        case SEARCH_TV_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case SEARCH_TV_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}