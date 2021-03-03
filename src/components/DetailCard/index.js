import React from 'react';
import { StyledOverlay } from './DetailCardStyle';
import { AddIcon } from '../../theme/StyledElements';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaPlay, FaStar } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

// assets
import noImagePlaceholder from '../../assets/images/no-image-placeholder.svg'

// bootstrap
import { Col, Image } from 'react-bootstrap';

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
        <Col key={props?.id} style={{ height: '450px', padding: '0px', overflow: 'hidden' }}>
            <div style={{ width: '223px', height: '300px', display: 'flex', alignItems: 'center', marginBottom: '16px', overflow: 'hidden' }}>
                <StyledOverlay onClick={() => handleOpen(props)} />
                {props?.poster_path ? (
                    <Image src={`${process.env.REACT_APP_TMDB_IMAGES_URL}${props?.poster_path}`} alt={props?.title} style={{ width: '100%', maxHeight: '300px', borderRadius: '8px', objectFit: 'cover' }}/>
                ) : (
                    <Image src={noImagePlaceholder} alt={props?.title} style={{ width: '100%', height: '300px', borderRadius: '8px', objectFit: 'cover' }}/>
                )}
            </div>
            <IconContext.Provider value={{ color: '#fff', size: '22px' }}>
                <AddIcon style={{ top: '5%', right: '4%' }}>
                    <FiPlus />
                </AddIcon>
            </IconContext.Provider>
            {props?.type === 'movie' && (
                <IconContext.Provider value={{ color: '#FCA311', size: '16px' }}>
                    <span style={{ position: 'absolute', left: '50%', bottom: '36%', cursor: 'pointer', transform: 'translateX(-50%)' }} onClick={() => handleOpen(props)}><FaPlay /><span style={{ fontWeight: 'bold', lineHeight: '28px', paddingLeft: '10px', color: '#fff' }}>Watch trailer</span></span>
                </IconContext.Provider>
            )}
            <span className="d-flex align-items-center" style={{ width: '100%', marginBottom: '12px' }}>
                <IconContext.Provider value={{ color: '#f7d633', size: '24px' }}>
                    <FaStar />
                </IconContext.Provider>
                <span style={{ fontWeight: 'bold', fontSize: '20px', lineHeight: '28px', marginLeft: '10px', color: '#001217' }} >{props?.vote_average}</span>
            </span>
            <span style={{ maxWidth: '100%', fontWeight: 'bold', fontSize: '22px', lineHeight: '28px', letterSpacing: '-0.3px', color: '#001217', padding: 0 }}>{props?.title || props?.name}</span>
        </Col>
    );
}

export default DetailCard;
