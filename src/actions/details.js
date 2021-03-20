import api from '../services/api';
import axios from 'axios';
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

export const fetchPopular = (type = 'movie', period = 'week') => async (dispatch) => {
    try {
        if(type === 'movie') {
            dispatch({ type: TRENDING_MOVIES_REQUEST });

            const { data } = await api.get(`/trending/${type}/${period}`);
            dispatch({ type: TRENDING_MOVIES_SUCCESS, payload: data });
        } else {
            dispatch({ type: TRENDING_TVS_REQUEST });

            const { data } = await api.get(`/trending/${type}/${period}`);
            dispatch({ type: TRENDING_TVS_SUCCESS, payload: data });
        }
        
    } catch (error) {
        if(type === 'movie') {
            dispatch({ type: TRENDING_MOVIES_FAIL, payload: error });
        } else {
            dispatch({ type: TRENDING_TVS_FAIL, payload: error });
        }
    }
}

export const fetchAllGenres = () => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_GENRES_REQUEST });

        const { data } = await api.get('/genre/movie/list');
        dispatch({ type: MOVIE_GENRES_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: MOVIE_GENRES_FAIL, payload: error });
    }
}

export const fetchAllSeasons = (id, seasonNumber) => async (dispatch) => {
    try {
        const requests = [];

        for(let i = 1; i <= seasonNumber; i++) {
            requests.push(api.get(`/tv/${id}/season/${i}`));
        }

        dispatch({ type: TVSHOW_SEASONS_REQUEST });

        const data = await axios.all(requests);

        const allSeasons = data.map(({ data }) => data);

        dispatch({ type: TVSHOW_SEASONS_SUCCESS, payload: allSeasons });

    } catch (error) {
        dispatch({ type: TVSHOW_SEASONS_FAIL, payload: error });
    }
}

export const fetchDetails = (id, type) => async (dispatch) => {
    try {
        dispatch({ type: DETAILS_REQUEST });

        if(type === 'movie') {
            const { data: details } = await api.get(`/movie/${id}`);
            const { data: credits } = await api.get(`/movie/${id}/credits`);
            const { data: { results: reviews } } = await api.get(`/movie/${id}/reviews`);

            dispatch({ type: DETAILS_SUCCESS, payload: { details, credits, reviews } });

        } else {
            const { data: details } = await api.get(`/tv/${id}`);
            const { data: credits } = await api.get(`/tv/${id}/credits`);
            const { data: { results: reviews } } = await api.get(`/tv/${id}/reviews`);

            dispatch({ type: DETAILS_SUCCESS, payload: { details, credits, reviews } });
        }
    
    } catch (error) {
        dispatch({ type: DETAILS_FAIL, payload: error });
    }
}