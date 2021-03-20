import {
    StyledCard,
    StyledImage, 
    StyledImgOverlay 
} from './PosterStyle';
import { useSelector } from 'react-redux';

// components
import WatchlistBtn from '../shared/buttons/WatchlistBtn';
import WatchTrailerBtn from '../shared/buttons/WatchTrailerBtn';

const Poster = props => {

    const { uid } = useSelector(state => state.firebase.auth);

    return (
        <StyledCard key={props?.id}>
            <StyledImage src={`${process.env.REACT_APP_TMDB_IMAGES_URL}${props?.poster_path}`} alt={props?.title} />
            <StyledImgOverlay className="d-flex flex-column align-items-center justify-content-end">
                {uid && <WatchlistBtn poster="true" {...props} />}
            </StyledImgOverlay>
            {props?.type === 'movie' && <WatchTrailerBtn isOnPoster="true" {...props} />}
        </StyledCard>
    );
}

export default Poster;
