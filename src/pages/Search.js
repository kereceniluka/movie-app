import { useSelector } from 'react-redux';

// bootstrap
import { Container, Row, Alert } from 'react-bootstrap';

// components
import SearchInput from '../components/SearchInput';
import DetailCard from '../components/DetailCard';

const Movies = () => {

    const { loading, data: { results } } = useSelector(state => state.searchedData);

    return (
        <Container className="p-0">
            <Row className="m-0">
                <SearchInput />
            </Row>
            <Row className="my-4 mx-0" lg={5}>
                {loading === false && (
                    results.length === 0 ? (        
                        <Alert className="m-auto" variant="danger">Sorry, but we can't find any movie or TV show.</Alert>
                    ) : (
                        results.map(data => <DetailCard key={data?.id} media_type="movie" {...data} />)
                    )
                )}
            </Row>
        </Container>
    );
}

export default Movies;
