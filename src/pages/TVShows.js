import { useSelector } from 'react-redux';

// bootstrap
import { Container, Row, Alert } from 'react-bootstrap';

// components
import SearchInput from '../components/SearchInput';
import DetailCard from '../components/DetailCard';

const TVShows = () => {

    const { loading, data: { results } } = useSelector(state => state.searchedTVShows);

    return (
        <Container className="p-0">
            <Row className="m-0">
                <SearchInput placeholder="Search TV Show" />
            </Row>
            <Row className="my-4 mx-0" lg={5}>
                {loading === false && (
                    results.length === 0 ? (        
                        <Alert className="m-auto" variant="danger">Sorry, but we can't find any TV Show.</Alert>
                    ) : (
                        results.map(tvShow => <DetailCard key={tvShow?.id} media_type="tv" {...tvShow} />)
                    )
                )}
            </Row>
        </Container>
    );
}

export default TVShows;
