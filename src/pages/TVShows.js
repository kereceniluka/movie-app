import React from 'react';
import { useSelector } from 'react-redux';

// bootstrap
import { Container, Row, Alert } from 'react-bootstrap';

// components
import SearchInput from '../components/SearchInput';
import DetailCard from '../components/DetailCard';

const TVShows = () => {

    const { loading, data: { results } } = useSelector(state => state.searchedTVShows);

    return (
        <Container style={{ padding: 0 }}>
            <Row>
                <SearchInput placeholder="Search TV Show" />
            </Row>
            <Row lg={5}>
                {loading === false && (
                    results.length === 0 ? (        
                        <Alert className="m-auto" variant="danger">Sorry, but we can't find any TV Show.</Alert>
                    ) : (
                        results.map(movies => <DetailCard key={movies.id} {...movies} />)
                    )
                )}
            </Row>
        </Container>
    );
}

export default TVShows;
