import { 
    StyledCol, 
    StyledImageWrapper, 
    StyledOverlay, 
    StyledImage, 
    StyledDescriptionWrapper, 
    StyledVoteLabel, 
    StyledDetailCardTitle,
} from './DetailCardStyle';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaStar } from 'react-icons/fa';

// assets
import noImagePlaceholder from '../../assets/images/no-image-placeholder.svg';

// components
import WatchlistBtn from '../shared/buttons/WatchlistBtn';
import WatchTrailerBtn from '../shared/buttons/WatchTrailerBtn';

const DetailCard = props => {

    const history = useHistory();

    const { uid } = useSelector(state => state.firebase.auth);

    const handleOpenDetails = (id, type) => {
        history.push({
            pathname: '/details',
            state: { id, type },
        });
    }

    return (
        <StyledCol className="d-flex flex-column align-items-center overflow-hidden" sm={12} md={4}>
            <StyledImageWrapper className="d-flex align-items-center overflow-hidden">
                <StyledOverlay className="position-absolute overflow-hidden" />
                <StyledImage src={props?.poster_path ? `${process.env.REACT_APP_TMDB_IMAGES_URL}${props?.poster_path}` : noImagePlaceholder} alt={props?.title} />
            </StyledImageWrapper>
            {uid && <WatchlistBtn type={props?.media_type} {...props} />}
            {props?.media_type === 'movie' && <WatchTrailerBtn {...props} />}
            <StyledDescriptionWrapper className="w-100 d-flex flex-column">
                <span className="d-flex align-items-center mb-2">
                    <IconContext.Provider value={{ color: '#fca311', size: '24px' }}>
                        <FaStar />
                    </IconContext.Provider>
                    <StyledVoteLabel>{props?.vote_average}</StyledVoteLabel>
                </span>
                <StyledDetailCardTitle onClick={() => handleOpenDetails(props?.id, props?.media_type)}>{props?.title || props?.name}</StyledDetailCardTitle>
            </StyledDescriptionWrapper>
        </StyledCol>
    );
}

export default DetailCard;
