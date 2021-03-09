import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StyledNavLink } from './NavigationStyle';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.jpg';

// bootstrap
import { Container, Navbar, Nav, NavDropdown, Image, Button } from 'react-bootstrap';

// actions
import { logout } from '../../actions/auth';

const Navigation = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const { uid, email } = useSelector(state => state.firebase.auth);

    const handleLogout = () => {
        dispatch(logout());
        if(uid) {
            history.push('/');
        }
    }

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
                        {uid ? (
                            <>
                                <Image src={avatar} roundedCircle style={{ width: '40px' }} />
                                <NavDropdown title={email.substring(0, email.indexOf('@'))} id="basic-nav-dropdown" style={{ fontWeight: 700, color: '#14213D' }}>
                                    <StyledNavLink to="/watchlist">
                                        <NavDropdown.Item>Watchlist</NavDropdown.Item>
                                    </StyledNavLink>
                                    <StyledNavLink to="/settings">
                                        <NavDropdown.Item>Settings</NavDropdown.Item>
                                    </StyledNavLink>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                <StyledNavLink to="/login" marginRight>
                                    <Nav.Link>Log In</Nav.Link>
                                </StyledNavLink>
                                <StyledNavLink to="/signup" activeStyle={{ backgroundColor: '#FCA311', borderColor: '#FCA311' }} btn>
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
