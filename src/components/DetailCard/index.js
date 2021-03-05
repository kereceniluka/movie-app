import React from 'react';
import { StyledCol, StyledImageWrapper, StyledOverlay, StyledImage, StyledWatchTrailerBtn, StyledWatchTrailerBtnLabel, StyledDescriptionWrapper, StyledVoteLabel, StyledDetailCardTitle } from './DetailCardStyle';
import { AddIcon } from '../../theme/StyledElements';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaPlay, FaStar } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

// assets
import noImagePlaceholder from '../../assets/images/no-image-placeholder.svg';

// actions
import { playTrailer } from '../../actions/trailerModal';


const DetailCard = props => {

    const dispatch = useDispatch();

    const handleOpen = movie => {
        if(props?.type === 'movie') {
            dispatch(playTrailer(movie));
        }
    }

    return (
        <StyledCol className="d-flex flex-column align-items-center overflow-hidden" sm={12} md={4}>
            <StyledImageWrapper className="d-flex align-items-center overflow-hidden">
                <StyledOverlay className="position-absolute overflow-hidden" onClick={() => handleOpen(props)} />
                {props?.poster_path ? (
                    <StyledImage src={`${process.env.REACT_APP_TMDB_IMAGES_URL}${props?.poster_path}`} alt={props?.title} />
                ) : (
                    <StyledImage src={noImagePlaceholder} alt={props?.title} />
                )}
            </StyledImageWrapper>
            <AddIcon>
                <IconContext.Provider value={{ color: '#fff', size: '22px' }}>
                    <FiPlus />
                </IconContext.Provider>
            </AddIcon>
            {props?.type === 'movie' && (
                <StyledWatchTrailerBtn className="position-absolute" onClick={() => handleOpen(props)}>
                    <IconContext.Provider value={{ color: '#FCA311', size: '16px' }}>
                        <FaPlay />
                    </IconContext.Provider>
                    <StyledWatchTrailerBtnLabel>Watch trailer</StyledWatchTrailerBtnLabel>
                </StyledWatchTrailerBtn>
            )}
            <StyledDescriptionWrapper className="w-100 d-flex flex-column">
                <span className="d-flex align-items-center" style={{ marginBottom: '12px' }}>
                    <IconContext.Provider value={{ color: '#f7d633', size: '24px' }}>
                        <FaStar />
                    </IconContext.Provider>
                    <StyledVoteLabel>{props?.vote_average}</StyledVoteLabel>
                </span>
                <StyledDetailCardTitle>{props?.title || props?.name}</StyledDetailCardTitle>
            </StyledDescriptionWrapper>
        </StyledCol>
    );
}

export default DetailCard;
