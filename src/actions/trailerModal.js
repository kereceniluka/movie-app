import { OPEN_TRAILER_MODAL, CLOSE_TRAILER_MODAL, PLAY_TRAILER_MOVIE } from '../constants/trailerModal';
import movieTrailer from 'movie-trailer';

export const openModal = () => async (dispatch) => {
    dispatch({ type: OPEN_TRAILER_MODAL, payload: true });
}

export const closeModal = () => async (dispatch) => {
    dispatch({ type: CLOSE_TRAILER_MODAL, payload: false });
}

export const playTrailer = movie => async (dispatch) => {
    const trailerUrl = await movieTrailer(movie?.title || '');
    const urlParams = new URLSearchParams(new URL(trailerUrl).search);
    const trailer = urlParams.get('v');

    const movieInfo = {
        ...movie,
        trailer,
    }

    dispatch({ type: PLAY_TRAILER_MOVIE, payload: movieInfo });
}