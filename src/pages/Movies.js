import { useSelector } from 'react-redux';

// bootstrap
import { Container, Row, Alert } from 'react-bootstrap';

// components
import SearchInput from '../components/SearchInput';
import DetailCard from '../components/DetailCard';

const Movies = () => {

    const { loading, data: { results } } = useSelector(state => state.searchedMovies);

    return (
        <Container className="p-0">
            <Row className="m-0">
                <SearchInput placeholder="Search Movie" type="movie" />
            </Row>
            <Row className="my-4 mx-0" lg={5}>
                {loading === false && (
                    results.length === 0 ? (        
                        <Alert className="m-auto" variant="danger">Sorry, but we can't find any Movie.</Alert>
                    ) : (
                        results.map(movies => <DetailCard key={movies?.id} media_type="movie" {...movies} />)
                    )
                )}
            </Row>
        </Container>
    );
}

export default Movies;
