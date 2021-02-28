import React from 'react';
import { StyledOverlay } from './DetailCardStyle';
import { AddIcon } from '../../theme/StyledElements';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaPlay, FaStar } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

// bootstrap
import { Col, Image } from 'react-bootstrap';

// actions
import { openModal, playTrailer } from '../../actions/trailerModal';


const DetailCard = props => {

    const dispatch = useDispatch();

    const handleOpen = movie => {
        if(props?.media_type === 'movie') {
            dispatch(openModal());
            dispatch(playTrailer(movie));
        }
    }

    return (
        <Col key={props?.id} className="d-flex flex-column align-items-center justify-content-center" style={{ padding: '0px', overflow: 'hidden' }}>
            <StyledOverlay onClick={() => handleOpen(props)} />
            <Image src={`${process.env.REACT_APP_TMDB_IMAGES_URL}${props?.poster_path}`} alt={props?.title} style={{ width: '223px', height: '300px', borderRadius: '8px', objectFit: 'cover', objectPosition: 'center' }}/>
            <IconContext.Provider value={{ color: '#fff', size: '22px' }}>
                <AddIcon>
                    <FiPlus />
                </AddIcon>
            </IconContext.Provider>
            {props?.media_type === 'movie' && (
                <IconContext.Provider value={{ color: '#FCA311', size: '16px' }}>
                    <span style={{ position: 'absolute', bottom: '24%', cursor: 'pointer' }} onClick={() => handleOpen(props)} ><FaPlay /><span style={{ fontWeight: 'bold', lineHeight: '28px', paddingLeft: '10px', color: '#fff' }}>Watch trailer</span></span>
                </IconContext.Provider>
            )}
            <span className="d-flex align-items-center" style={{ width: '100%', marginTop: '8px', marginBottom: '12px', padding: '0 9px' }}>
                <IconContext.Provider value={{ color: '#f7d633', size: '24px' }}>
                    <FaStar />
                </IconContext.Provider>
                <span style={{ fontWeight: 'bold', fontSize: '20px', lineHeight: '28px', marginLeft: '10px', color: '#001217' }} >{props?.vote_average}</span>
            </span>
            <span style={{ width: '100%', fontWeight: 'bold', fontSize: '22px', lineHeight: '28px', letterSpacing: '-0.3px', color: '#001217', padding: '0 9px' }}>{props?.title || props?.name}</span>
        </Col>
    );
}

export default DetailCard;
