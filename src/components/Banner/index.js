import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledOverlay, StyledImage } from './BannerStyle';
import { IconContext } from 'react-icons';
import { FaStar } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';

// bootstrap
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Poster from '../Poster';

// actions
import { playTrailer } from '../../actions/trailerModal';

const Banner = () => {

    const { loading, data } = useSelector(state => state.trendingMovies);
    const dispatch = useDispatch();

    const handleOpen = movie => {
        dispatch(playTrailer(movie));
    }

    return (
        <Carousel fluid style={{ height: '800px' }} controls={false}>
            {loading === false && (
                data.results.filter((movie, index) => index <= 4)
                    .map(({ id, poster_path, backdrop_path, title, overview, release_date, vote_average }) => (
                        <Carousel.Item style={{ height: '800px' }}>
                            <StyledOverlay />
                            <StyledImage src={`${process.env.REACT_APP_TMDB_IMAGES_URL}${backdrop_path}`} style={{ height: '800px' }} />
                            <Carousel.Caption className="d-none d-lg-block">
                                <Container>
                                    <Row style={{ height: '400px', marginBottom: '135px' }}>
                                        <Col className="d-flex flex-column align-items-center" lg={3}>
                                            <h3 style={{ width: '225px', fontWeight: 'bold', fontSize: '22px', lineHeight: '28px', letterSpacing: '-0.3px', textAlign: 'left', paddingBottom: '25px' }}>Top 5 movies</h3>
                                            <Poster id={id} poster_path={poster_path} title={title} type="movie" />
                                            <IconContext.Provider value={{ color: '#FCA311', size: '16px' }}>
                                                <span style={{ cursor: 'pointer' }} className="d-flex align-items-center justify-content-center py-2" onClick={() => handleOpen({ id, title })}><FaPlay /><span style={{ fontWeight: 'bold', lineHeight: '28px', paddingLeft: '10px' }}>Watch trailer</span></span>
                                            </IconContext.Provider>
                                        </Col>
                                        <Col className="text-left d-flex flex-column justify-content-center" lg={9}>
                                            <span style={{ fontSize: '20px', lineHeight: '28px' }} >{release_date.substring(0, 4)}</span>
                                            <h2 style={{ fontWeight: 'bold', fontSize: '64px', lineHeight: '72px', letterSpacing: '-0.02em' }} >{title}</h2>
                                            <span style={{ fontSize: '20px', lineHeight: '28px' }}>Comedy | Drama | Thriller</span>
                                            <p style={{ color: '#B3B3B3', fontSize: '20px', lineHeight: '28px', margin: '16px 0', maxWidth: '430px' }}>{overview}</p>
                                            <IconContext.Provider value={{ color: '#FCA311', size: '24px' }}>
                                                <div className="d-flex align-items-center">
                                                    <FaStar />
                                                    <span className="px-2" style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 'bold', cursor: 'pointer' }}>{vote_average}</span>
                                                </div>
                                            </IconContext.Provider>
                                        </Col>
                                    </Row>
                                </Container>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
            )}
        </Carousel>
    );
}

export default Banner;
