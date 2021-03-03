import React, { useEffect } from 'react';
import { StyledSection } from './PosterSectionStyle';
import { useDispatch, useSelector } from 'react-redux';

// bootstrap
import { Container, Row } from 'react-bootstrap';

// components
import DetailCard from '../DetailCard';

// actions
import { fetchPopular } from '../../actions/details';

const PosterSection = ({ title, type, period, bg }) => {

    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(state => type === 'movie' ? state.trendingMovies : state.trendingTVs);

    useEffect(() => {
        dispatch(fetchPopular(type, period));
    }, [dispatch, type, period]);

    return (
        <StyledSection bg={bg} style={{ padding: '100px 120px' }}>
            <Container style={{ padding: '0px' }}>
                <h2 style={{ fontWeight: 'bold', fontSize: '41px', lineHeight: '49px', letterSpacing: '-0.6px', color: '#001217', marginBottom: '27px', marginLeft: '-10px' }}>{title}</h2>
                <Row lg={5} md={2} sm={1}>
                    {loading === false && (
                        data.results.filter((details, index) => index <= 4)
                            .map(details => <DetailCard type={type} {...details} />)
                    )}
                </Row>
            </Container>
        </StyledSection>
    );
}

export default PosterSection;
