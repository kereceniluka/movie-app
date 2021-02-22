import React from 'react';
import { StyledCtaTitle } from './CtaStyle';
import { StyledTitleDivider, StyledCtaBtn } from '../../theme/StyledElements';
import { LinkContainer } from 'react-router-bootstrap';

// bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap';

const Cta = () => {
    return (
        <section className="bg-light text-dark p-4">
            <Container className="text-center" fluid>
                <Row>
                    <Col lg={12}>
                        <StyledCtaTitle className="display-4 pb-1">Let MovieApp be your guide</StyledCtaTitle>
                        <StyledTitleDivider />
                    </Col>
                    <Col lg={12}>
                        <p class="lead pt-5 pb-3">Millions of movies, TV shows and people to discover.</p>
                    </Col>
                    <Col lg={12}>
                        <LinkContainer to="/">
                            <StyledCtaBtn size="lg">Explore now.</StyledCtaBtn>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Cta;
