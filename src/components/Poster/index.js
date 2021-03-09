import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { FiPlus } from 'react-icons/fi';
import { StyledCard, StyledImgOverlay } from './PosterStyle';
import { AddIcon } from '../../theme/StyledElements';

// bootstrap
import { Card } from 'react-bootstrap';

// actions
import { playTrailer } from '../../actions/trailerModal';

const Poster = ({ id, poster_path, title }) => {

    const dispatch = useDispatch();

    const { uid } = useSelector(state => state.firebase.auth);

    const handleOpen = (movie) => {
        dispatch(playTrailer(movie));
    }

    return (
        <StyledCard key={id} onClick={() => handleOpen({ id, title })}>
            <Card.Img src={`${process.env.REACT_APP_TMDB_IMAGES_URL}${poster_path}`} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            <StyledImgOverlay className="d-flex flex-column align-items-center justify-content-end">
                {uid && (
                    <AddIcon poster>
                        <IconContext.Provider value={{ color: '#fff', size: '22px' }}>
                            <FiPlus />
                        </IconContext.Provider>
                    </AddIcon>
                )}
            </StyledImgOverlay>
        </StyledCard>
    );
}

export default Poster;
