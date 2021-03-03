import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import { trailerModalReducer } from './reducers/trailerModal';
import { popularMovieDetailsReducer, popularTVsDetailsReducer } from './reducers/details';
import { searchedMovieReducer, searchedTVShowReducer } from './reducers/search';

const reducer = combineReducers({
    trailerModal: trailerModalReducer,
    trendingMovies: popularMovieDetailsReducer,
    trendingTVs: popularTVsDetailsReducer,
    searchedMovies: searchedMovieReducer,
    searchedTVShows: searchedTVShowReducer,
});

const initialState = {}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;