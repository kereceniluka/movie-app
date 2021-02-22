import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

// bootstrap
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {

    const isLogged = true;

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Movie App</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/tvshows">
                            <Nav.Link>TV Shows</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/movies">
                            <Nav.Link>Movies</Nav.Link>
                        </LinkContainer>
                        {isLogged ? (
                            <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <LinkContainer to="/account">
                                    <NavDropdown.Item>Account</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/settings">
                                    <NavDropdown.Item>Settings</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/logout">
                                    <NavDropdown.Item>Logout</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        ) : (
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
