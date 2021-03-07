import React from 'react';
import { StyledNavLink } from './NavigationStyle';
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
                    <Nav className="mr-auto d-sm-flex align-items-center">
                        <StyledNavLink to="/movies">
                            <Nav.Link>Movies</Nav.Link>
                        </StyledNavLink>
                        <StyledNavLink to="/tvshows">
                            <Nav.Link>TV Shows</Nav.Link>
                        </StyledNavLink>
                    </Nav>
                    <Nav className="d-sm-flex align-items-center">
                        {isLogged ? (
                            <>
                                <Image src={avatar} roundedCircle style={{ width: '40px' }} />
                                <NavDropdown title="Luka" id="basic-nav-dropdown" style={{ fontWeight: 700, color: '#14213D' }}>
                                    <StyledNavLink to="/watchlist">
                                        <NavDropdown.Item>Watchlist</NavDropdown.Item>
                                    </StyledNavLink>
                                    <StyledNavLink to="/settings">
                                        <NavDropdown.Item>Settings</NavDropdown.Item>
                                    </StyledNavLink>
                                    <NavDropdown.Divider />
                                    <StyledNavLink to="/logout">
                                        <NavDropdown.Item>Logout</NavDropdown.Item>
                                    </StyledNavLink>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                <StyledNavLink to="/login" marginRight>
                                    <Nav.Link>Log In</Nav.Link>
                                </StyledNavLink>
                                <StyledNavLink to="/signup" btn>
                                    <Button>Sign Up</Button>
                                </StyledNavLink>
                            </> 
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
