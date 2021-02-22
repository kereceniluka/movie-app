import React, { useEffect } from 'react';
import { StyledRow, StyledCol, StyledTitle } from './RowStyle';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaStarHalf, FaStar } from 'react-icons/fa';

// bootstrap
import { Container, Row as RowB, Col } from 'react-bootstrap';

// components
import Poster from '../Poster';

// actions
import { fetchPopular } from '../../actions/details';

const Row = ({ title, type, period }) => {

    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(state => type === 'movie' ? state.trendingMovies : state.trendingTVs);

    useEffect(() => {
        dispatch(fetchPopular(type, period));
    }, [dispatch, type, period]);

    return (
        <Container className="py-3" fluid>
           <h2 className="display-5 py-3 px-1">{title}</h2>
           <StyledRow lg={6} xs={4}>
                {loading === false && (
                    data.results.map(details => (
                        <StyledCol>
                            <Poster type={type} {...details} />
                            <RowB className="d-none d-lg-flex align-items-start py-2 px-3" noGutters>
                                <Col lg={8}>
                                    <StyledTitle>{details?.title || details?.name}</StyledTitle>
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end" lg={4}>
                                    <IconContext.Provider value={{ color: '#f7d633', size: '1.2rem' }}>
                                        {details.vote_average <= 5 ? <FaStarHalf /> : <FaStar />}
                                    </IconContext.Provider>
                                    <span className="pl-1">{`${details.vote_average}/10`}</span>
                                </Col>
                            </RowB>
                        </StyledCol>
                    ))
                )}
           </StyledRow> 
        </Container>
    );
}

export default Row;
