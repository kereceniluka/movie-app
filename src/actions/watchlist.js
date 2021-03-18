import {
    WATCHLIST_ADD_SUCCESS,
    WATCHLIST_ADD_FAIL,
    WATCHLIST_REMOVE_SUCCESS,
    WATCHLIST_REMOVE_FAIL,
} from '../constants/watchlist';
import { getFirestore } from 'redux-firestore';

export const addToWatchlist = data => async (dispatch, getState) => {
    try {
        const firestore = getFirestore();

        const uid = getState().firebase.auth.uid;
        const prevWatchlistState = getState().firebase.profile.watchlist;
        const { movies, tvShows } = prevWatchlistState;
        const dataExists = data.type === 'movie' ? movies.some(movie => movie.id === data.id) : tvShows.some(tvShow => tvShow.id === data.id);

        if(data.type === 'movie' && !dataExists) {
            await firestore.collection('users').doc(uid).set({ 
                watchlist: {
                    ...prevWatchlistState,
                    movies: [...movies, data],
                },
            });

            dispatch({ type: WATCHLIST_ADD_SUCCESS });

        } else if(data.type === 'tv' && !dataExists) {
            await firestore.collection('users').doc(uid).set({ 
                watchlist: {
                    ...prevWatchlistState,
                    tvShows: [...tvShows, data],
                },
            });

            dispatch({ type: WATCHLIST_ADD_SUCCESS });
        }

    } catch (error) {
        dispatch({ type: WATCHLIST_ADD_FAIL, payload: error });
    }
}

export const removeFromWatchlist = (id, type) => async (dispatch, getState) => {
    try {
        const firestore = getFirestore();

        const uid = getState().firebase.auth.uid;
        const prevWatchlistState = getState().firebase.profile.watchlist;
        const { movies, tvShows } = prevWatchlistState;
        const filteredData = type === 'movie' ? movies.filter(movie => movie.id !== id) : tvShows.filter(tvShow => tvShow.id !== id);

        if(type === 'movie') {
            await firestore.collection('users').doc(uid).set({ 
                watchlist: {
                    ...prevWatchlistState,
                    movies: [...filteredData],
                },
            });

            dispatch({ type: WATCHLIST_REMOVE_SUCCESS });

        } else {
            await firestore.collection('users').doc(uid).set({ 
                watchlist: {
                    ...prevWatchlistState,
                    tvShows: [...filteredData],
                },
            });

            dispatch({ type: WATCHLIST_REMOVE_SUCCESS });
        }

    } catch (error) {
        dispatch({ type: WATCHLIST_REMOVE_FAIL, payload: error });
    }
}