import { OPEN_TRAILER_MODAL, CLOSE_TRAILER_MODAL, PLAY_TRAILER_MOVIE } from '../constants/trailerModal';

export const trailerModalReducer = (state = { showModal: false, selectedMovie: {} }, action) => {
    switch(action.type) {
        case OPEN_TRAILER_MODAL:
            return { showModal: action.payload, selectedMovie: {} };
        case CLOSE_TRAILER_MODAL:
            return { showModal: action.payload, selectedMovie: {} };
        case PLAY_TRAILER_MOVIE:
            return { ...state, selectedMovie: action.payload };
        default:
            return state;
    }
}