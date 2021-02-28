import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.jpg';

// bootstrap
import { Container, Navbar, Nav, NavDropdown, Image, Button } from 'react-bootstrap';

const Navigation = () => {

    // only for testing purpose
    const isLogged = false;

    return (
        <Navbar bg="white" variant="light" expand="lg" sticky="top" style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)' }}>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand><Image src={logo} /></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{ marginLeft: '70px' }}>
                        <LinkContainer to="/movies" style={{ fontWeight: 700, color: '#14213D' }}>
                            <Nav.Link>Movies</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/tvshows" style={{ fontWeight: 700, color: '#14213D' }}>
                            <Nav.Link>TV Shows</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        {isLogged ? (
                            <>
                                <Image src={avatar} roundedCircle style={{ width: '40px' }} />
                                <NavDropdown title="Luka" id="basic-nav-dropdown" style={{ fontWeight: 700, color: '#14213D' }}>
                                    <LinkContainer to="/watchlist" style={{ fontWeight: 700, color: '#14213D' }}>
                                        <NavDropdown.Item>Watchlist</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/settings" style={{ fontWeight: 700, color: '#14213D' }}>
                                        <NavDropdown.Item>Settings</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Divider />
                                    <LinkContainer to="/logout" style={{ fontWeight: 700, color: '#14213D' }}>
                                        <NavDropdown.Item>Logout</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                <LinkContainer to="/login" style={{ fontWeight: 700, color: '#14213D', marginRight: '38px' }}>
                                    <Nav.Link>Log In</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/signup" style={{ backgroundColor: '#FCA311', borderColor: '#FCA311', color: '#14213D', fontWeight: 700 }}>
                                    <Button>Sign Up</Button>
                                </LinkContainer>
                            </> 
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
