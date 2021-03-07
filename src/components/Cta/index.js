import React from 'react';
import { StyledContainer, StyledCtaTitle } from './CtaStyle';
import { StyledCtaBtn } from '../../theme/StyledElements';
import { LinkContainer } from 'react-router-bootstrap';

// bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap';

const Cta = () => {
    return (
        <StyledContainer className="text-center" fluid="true">
            <Row>
                <Col lg={12}>
                    <StyledCtaTitle>Let MovieApp be your guide</StyledCtaTitle>
                    <p style={{ color: '#667375', fontSize: '20px', fontWeight: 400, lineHeight: '28px', marginTop: '15px', marginBottom: '32px' }}>Search for milllions of movies, TV shows and people to discover.</p>
                </Col>
                <Col className="d-flex align-items-center justify-content-center" lg={12}>
                    <LinkContainer to="/movies" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '150px', height: '48px', backgroundColor: '#FCA311', borderColor: '#FCA311', color: '#14213D', fontWeight: 700, margin: '0 10px' }}>
                        <Button>Movies</Button>
                    </LinkContainer>
                    <LinkContainer to="/tvshows" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '150px', height: '48px', backgroundColor: '#FCA311', borderColor: '#FCA311', color: '#14213D', fontWeight: 700, margin: '0 10px' }}>
                        <Button>TV shows</Button>
                    </LinkContainer>
                </Col>
            </Row>
        </StyledContainer>
    );
}

export default Cta;
