import { StyledWatchlistIconWrapper } from './WatchlistBtnStyle';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaPlus, FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

// actions
import { addToWatchlist, removeFromWatchlist } from '../../../../actions/watchlist';

const WatchlistBtn = props => {

    const dispatch = useDispatch();
    const watchlist = useSelector(state => state.firebase.profile.watchlist);

    const handleAddToWatchlist = data => {
        dispatch(addToWatchlist(data));
    }

    const handleRemoveFromWatchlist = ({ id, type }) => {
        dispatch(removeFromWatchlist(id, type));
    }

    const checkData = ({ id, type }) => {
        if(isLoaded(watchlist)) {
            return type === 'movie' ? watchlist.movies.some(movie => movie.id === id) : watchlist.tvShows.some(tvShow => tvShow.id === id);
        }
    }

    return (
        <>
            {checkData(props) ? (
                <StyledWatchlistIconWrapper poster={props?.poster} onClick={() => handleRemoveFromWatchlist(props)}>
                    <IconContext.Provider value={{ color: '#fca311', size: '16px' }}>
                        <FaCheck />
                    </IconContext.Provider>
                </StyledWatchlistIconWrapper>
            ) : (
                <StyledWatchlistIconWrapper poster={props?.poster} onClick={() => handleAddToWatchlist(props)}>
                    <IconContext.Provider value={{ color: '#fff', size: '16px' }}>
                        <FaPlus />
                    </IconContext.Provider>
                </StyledWatchlistIconWrapper>
            )}
        </>
    );
}

WatchlistBtn.propTypes = {
    props: PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
    })
};

export default WatchlistBtn;
