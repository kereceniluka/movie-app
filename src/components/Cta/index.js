import { 
    StyledContainer, 
    StyledCtaTitle, 
    StyledDescription,
    StyledBtnWrapper,
} from './CtaStyle';

// bootstrap
import { Row, Col, Button } from 'react-bootstrap';

const Cta = () => {
    return (
        <StyledContainer fluid="true">
            <Row>
                <Col lg={12}>
                    <StyledCtaTitle>Let MovieApp be your guide</StyledCtaTitle>
                    <StyledDescription>Search for milllions of movies, TV shows and people to discover.</StyledDescription>
                </Col>
                <Col className="d-flex align-items-center justify-content-center" lg={12}>
                    <StyledBtnWrapper to="/movies" className="d-flex align-items-center justify-content-center">
                        <Button>Movies</Button>
                    </StyledBtnWrapper>
                    <StyledBtnWrapper to="/tvshows" className="d-flex align-items-center justify-content-center">
                        <Button>TV shows</Button>
                    </StyledBtnWrapper>
                </Col>
            </Row>
        </StyledContainer>
    );
}

export default Cta;
