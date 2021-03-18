import { StyledWatchTrailerBtnWrapper, StyledWatchTrailerBtnLabel } from './WatchTrailerBtnStyle';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaPlay } from 'react-icons/fa';

// actions
import { playTrailer } from '../../../../actions/trailerModal';

const WatchTrailerBtn = props => {

    const dispatch = useDispatch();

    const handleOpen = movie => {
        if(props?.type === 'movie') {
            dispatch(playTrailer(movie));
        }
    }

    return (
        <StyledWatchTrailerBtnWrapper className="position-absolute" onClick={() => handleOpen(props)}>
            <IconContext.Provider value={{ color: '#FCA311', size: '16px' }}>
                <FaPlay />
            </IconContext.Provider>
            <StyledWatchTrailerBtnLabel>Watch trailer</StyledWatchTrailerBtnLabel>
        </StyledWatchTrailerBtnWrapper>
    );
}

export default WatchTrailerBtn;
