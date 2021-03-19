import { useEffect, useState } from 'react';
import { StyledLargeTitle } from '../theme/StyledElements';
import { StyledOverlay } from '../components/Banner/BannerStyle'; 
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaPlay, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';

// bootstrap
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

// actions
import { fetchDetails } from '../actions/details';

// components
import Poster from '../components/Poster';
import CastCard from '../components/CastCard';
import Seasons from '../components/Seasons';
import ReviewCard from '../components/ReviewCard';

const Details = () => {

    const [visibleReviews, setVisibleReviews] = useState(3);

    const { state: { id, type } } = useLocation();

    const dispatch = useDispatch();
    const { loading, data: { details, credits, reviews } } = useSelector(state => state.details);

    useEffect(() => {
        dispatch(fetchDetails(id, type));
    }, []);

    const showGenres = genres => {
        return genres
            .map(({ name }) => name)
            .join(' | ');
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
    }

    const handleLoadMore = () => {
        setVisibleReviews(prevValue => prevValue + 3);
    }

    return (
        <Container className="pb-5" style={{ width: '100vw' }} fluid="true">
            {loading === false && (
                <>
                    <Row style={{ position: 'relative', width: '100%', height: '800px' }}>
                        <StyledOverlay style={{ background: 'linear-gradient(180deg, #000000 0%, rgba(30, 29, 29, 0) 100%)' }} />
                        <Image src={`${process.env.REACT_APP_TMDB_IMAGES_URL}${details?.backdrop_path}`} style={{ width: '100%', height: '800px', objectFit: 'cover' }} />
                        <Container className="d-none d-lg-block" style={{ position: 'absolute', bottom: '20%', left: '15%', zIndex: '2' }}>
                            <Row style={{ height: '400px', marginBottom: '65px' }}>
                                <Col className="d-flex flex-column align-items-center justify-content-center" lg={3}>
                                    <Poster type={type} {...details} />
                                    <IconContext.Provider value={{ color: '#FCA311', size: '16px' }}>
                                        <span style={{ cursor: 'pointer' }} className="d-flex align-items-center justify-content-center py-2"><FaPlay /><span style={{ fontWeight: 'bold', color: '#fff', lineHeight: '28px', paddingLeft: '10px' }}>Watch trailer</span></span>
                                    </IconContext.Provider>
                                </Col>
                                <Col className="d-flex flex-column align-items-start justify-content-center" lg={9}>
                                    <span style={{ fontSize: '20px', lineHeight: '28px', color: '#fff' }} >{details?.release_date ? details?.release_date.substring(0, 4) : details?.first_air_date.substring(0, 4)}</span>
                                    <h2 style={{ fontWeight: 'bold', fontSize: '64px', lineHeight: '72px', letterSpacing: '-0.02em', color: '#fff' }}>{details?.title || details?.name}</h2>
                                    <span style={{ fontSize: '20px', lineHeight: '28px', color: '#fff' }}>{details?.genres && showGenres(details.genres)}</span>
                                    <p style={{ color: '#B2B2B2', fontSize: '20px', lineHeight: '28px', margin: '16px 0', maxWidth: '860px' }}>{details?.overview}</p>
                                    <IconContext.Provider value={{ color: '#FCA311', size: '24px' }}>
                                        <div className="d-flex align-items-center">
                                            <FaStar />
                                            <span className="px-2" style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 'bold', color: '#fff' }}>{details?.vote_average}</span>
                                        </div>
                                    </IconContext.Provider>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Container>
                            <StyledLargeTitle className="mt-5" style={{ marginLeft: '10px' }}>Cast</StyledLargeTitle>
                            <Slider {...settings}>
                                {credits && credits.cast.map(cast => <CastCard key={cast?.credit_id} {...cast} />)}
                            </Slider>
                            {type === 'tv' && (
                                <>
                                    <StyledLargeTitle className="mt-5" style={{ marginLeft: '10px' }}>All Seasons</StyledLargeTitle>
                                    <Seasons id={details?.id} numberOfSeasons={details?.number_of_seasons} />
                                </>
                            )}
                            <StyledLargeTitle className="mt-5" style={{ marginLeft: '10px' }}>Reviews</StyledLargeTitle>
                            <Row>
                                <Col className="d-flex flex-column align-items-center">
                                    {reviews ? reviews.slice(0, visibleReviews).map((review, index) => <ReviewCard key={index} {...review} />) : <span>There are no reviews...</span>}      
                                    {visibleReviews <= reviews.length && <Button style={{ backgroundColor: '#FCA311', borderColor: '#FCA311' }} size="md" onClick={handleLoadMore}>Load More</Button>}
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </>
            )}
        </Container>
    );
}

export default Details;
