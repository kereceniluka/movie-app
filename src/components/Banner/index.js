import React from 'react';
import { useSelector } from 'react-redux';
import { StyledOverlay, StyledImage, StyledCaption } from './BannerStyle';

// bootstrap
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    const { loading, data } = useSelector(state => state.trendingMovies);

    return (
        <Carousel fluid>
            {loading === false && (
                data.results.filter((movie, index) => index <= 5).map(({ backdrop_path, title, overview }) => (
                    <Carousel.Item>
                        <StyledOverlay />
                        <StyledImage src={`${process.env.REACT_APP_TMDB_IMAGES_URL}${backdrop_path}`} />
                        <StyledCaption>
                            <h3>{title}</h3>
                            <p className="d-none d-md-block">{overview}</p>
                        </StyledCaption>
                    </Carousel.Item>
                ))
            )}
        </Carousel>
    );
}

export default Banner;
