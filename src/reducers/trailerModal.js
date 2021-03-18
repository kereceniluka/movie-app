import { OPEN_TRAILER_MODAL, CLOSE_TRAILER_MODAL, PLAY_TRAILER_MOVIE } from '../constants/trailerModal';

const initialState = {
    showModal: false,
    selectedMovie: {},
}

export const trailerModalReducer = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_TRAILER_MODAL:
            return { ...state, showModal: action.payload };
        case CLOSE_TRAILER_MODAL:
            return { ...state, showModal: action.payload };
        case PLAY_TRAILER_MOVIE:
            return { ...state, selectedMovie: action.payload };
        default:
            return state;
    }
}