import { useEffect } from 'react';
import { StyledLargeTitle, StyledRow } from '../../theme/StyledElements';
import { StyledSection } from './PosterSectionStyle';
import { useDispatch, useSelector } from 'react-redux';

// bootstrap
import { Container } from 'react-bootstrap';

// components
import DetailCard from '../DetailCard';

// actions
import { fetchPopular } from '../../actions/details';

const PosterSection = ({ title, type, period, bg }) => {

    const dispatch = useDispatch();
    const { loading, data: { results }, error } = useSelector(state => type === 'movie' ? state.trendingMovies : state.trendingTVs);

    useEffect(() => {
        dispatch(fetchPopular(type, period));
    }, [dispatch, type, period]);

    return (
        <StyledSection bg={bg}>
            <Container className="p-0">
                <StyledLargeTitle>{title}</StyledLargeTitle>
                <StyledRow lg={5} md={2} sm={1}>
                    {loading === false && (
                        results.filter((details, index) => index <= 4)
                            .map(details => <DetailCard key={details?.id} type={type} {...details} />)
                    )}
                </StyledRow>
            </Container>
        </StyledSection>
    );
}

export default PosterSection;
