import React from 'react';
import { useSelector } from 'react-redux';

// bootstrap
import { Container, Row, Alert } from 'react-bootstrap';

// components
import SearchInput from '../components/SearchInput';
import DetailCard from '../components/DetailCard';

const Movies = () => {

    const { loading, data: { results } } = useSelector(state => state.searchedMovies);

    return (
        <Container style={{ padding: 0 }}>
            <Row style={{ margin: 0 }}>
                <SearchInput placeholder="Search Movie" type="movie" />
            </Row>
            <Row className="d-flex align-items-center justify-content-center" lg={5} style={{ margin: 0 }}>
                {loading === false && (
                    results.length === 0 ? (        
                        <Alert className="m-auto" variant="danger">Sorry, but we can't find any Movie.</Alert>
                    ) : (
                        results.map(movies => <DetailCard key={movies.id} type="movie" {...movies} />)
                    )
                )}
            </Row>
        </Container>
    );
}

export default Movies;
