import api from '../services/api';
import { 
    TRENDING_MOVIES_REQUEST, 
    TRENDING_MOVIES_SUCCESS, 
    TRENDING_MOVIES_FAIL,
    TRENDING_TVS_REQUEST,
    TRENDING_TVS_SUCCESS,
    TRENDING_TVS_FAIL
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