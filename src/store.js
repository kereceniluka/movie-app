import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import { trailerModalReducer } from './reducers/trailerModal';
import { popularMovieDetailsReducer, popularTVsDetailsReducer } from './reducers/details';
import { searchedMovieReducer, searchedTVShowReducer } from './reducers/search';
import { authReducer } from './reducers/auth';
import { firebaseReducer, getFirebase } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    trailerModal: trailerModalReducer,
    trendingMovies: popularMovieDetailsReducer,
    trendingTVs: popularTVsDetailsReducer,
    searchedMovies: searchedMovieReducer,
    searchedTVShows: searchedTVShowReducer,
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

const initialState = {}

const middlewares = [
    thunk.withExtraArgument({ getFirebase }),
];

const store = createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;