import React from 'react';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaRegPlayCircle } from 'react-icons/fa';
import { StyledCard, StyledImgOverlay, StyledTitle, PlayTrailerIcon } from './PosterStyle';

// bootstrap
import { Card } from 'react-bootstrap';

// actions
import { openModal, playTrailer } from '../../actions/trailerModal';

const Poster = ({ id, poster_path, title, name, type }) => {

    const dispatch = useDispatch();

    const handleOpen = (movie) => {
        if(type === 'movie') {
            dispatch(openModal());
            dispatch(playTrailer(movie));
        }
    }

    return (
        <StyledCard key={id} onClick={() => handleOpen({ id, title })}>
            <Card.Img src={`${process.env.REACT_APP_TMDB_IMAGES_URL}${poster_path}`} alt={title} />
            {type === 'movie' && (
                <StyledImgOverlay>
                    <IconContext.Provider value={{ color: 'rgba(255, 255, 255, .75)', size: '38px' }}>
                        <PlayTrailerIcon>
                            <FaRegPlayCircle />
                        </PlayTrailerIcon>
                    </IconContext.Provider>
                </StyledImgOverlay>
            )}
        </StyledCard>
    );
}

export default Poster;
