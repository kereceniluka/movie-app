import api from '../services/api';
import { 
    SEARCH_MOVIE_REQUEST,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAIL,
    SEARCH_TV_REQUEST,
    SEARCH_TV_SUCCESS,
    SEARCH_TV_FAIL,
} from '../constants/search';

export const searchMovie = term => async (dispatch) => {
    try {
        dispatch({ type: SEARCH_MOVIE_REQUEST });

        const { data } = await api.get('/search/movie', {
            params: {
                query: term,
            },
        });

        dispatch({ type: SEARCH_MOVIE_SUCCESS, payload: data });
        
    } catch (error) {
        dispatch({ type: SEARCH_MOVIE_FAIL, payload: error });
    }
}

export const searchTVShow = term => async (dispatch) => {
    try {
        dispatch({ type: SEARCH_TV_REQUEST });

        const { data } = await api.get('/search/tv', {
            params: {
                query: term,
            },
        });
        
        dispatch({ type: SEARCH_TV_SUCCESS, payload: data });
        
    } catch (error) {
        dispatch({ type: SEARCH_TV_FAIL, payload: error });
    }
}