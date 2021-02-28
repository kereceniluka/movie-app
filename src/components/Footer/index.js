import React from 'react';

// bootstrap
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <span>Copyright &copy; MovieApp</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
