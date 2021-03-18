import { useEffect } from 'react';
import {
    StyledRow,
    StyledTopMovies,
    StyledMovieTitle,
    StyledLabel,
    StyledMovieOverview, 
    StyledOverlay, 
    StyledImage,
} from './BannerStyle';
import { useSelector, useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaStar } from 'react-icons/fa';

// bootstrap
import { Carousel, Container, Col } from 'react-bootstrap';
import Poster from '../Poster';

// actions
import { fetchAllGenres } from '../../actions/details';

const Banner = () => {

    const { loading, data: { results } } = useSelector(state => state.trendingMovies);
    const { data: { genres } } = useSelector(state => state.allMovieGenres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllGenres());
    }, []);

    const showMovieGenres = genreIDs => {
        return genres
            .filter(genre => genreIDs.includes(genre.id))
            .map(({ name }) => name)
            .join(' | ');
    }

    return (
        <Carousel className="d-none d-lg-block" style={{ height: '800px' }} controls={false} fluid="true">
            {loading === false && (
                results.filter((movie, index) => index <= 4)
                    .map(movie => (
                        <Carousel.Item key={movie?.id} style={{ height: '800px' }}>
                            <StyledOverlay />
                            <StyledImage src={`${process.env.REACT_APP_TMDB_IMAGES_URL}${movie?.backdrop_path}`} />
                            <Carousel.Caption>
                                <Container>
                                    <StyledRow>
                                        <Col className="d-flex flex-column align-items-center" lg={3}>
                                            <StyledTopMovies className="pb-4">Top 5 movies</StyledTopMovies>
                                            <Poster {...movie} type="movie" />
                                        </Col>
                                        <Col className="text-left d-flex flex-column justify-content-center" lg={9}>
                                            <StyledLabel>{movie?.release_date.substring(0, 4)}</StyledLabel>
                                            <StyledMovieTitle>{movie?.title}</StyledMovieTitle>
                                            <StyledLabel>{movie?.genres && showMovieGenres(movie?.genre_ids)}</StyledLabel>
                                            <StyledMovieOverview>{movie?.Coloverview}</StyledMovieOverview>
                                            <IconContext.Provider value={{ color: '#FCA311', size: '24px' }}>
                                                <div className="d-flex align-items-center">
                                                    <FaStar />
                                                    <StyledLabel className="px-2" bold>{movie?.vote_average}</StyledLabel>
                                                </div>
                                            </IconContext.Provider>
                                        </Col>
                                    </StyledRow>
                                </Container>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
            )}
        </Carousel>
    );
}

export default Banner;
