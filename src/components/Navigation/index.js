import { 
    StyledNavbar,
    StyledAvatar,
    StyledNavLink, 
    StyledNavDropdown,
} from './NavigationStyle';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
        <StyledNavbar bg="white" variant="light" expand="lg" sticky="top">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand><Image src={logo} /></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto d-sm-flex align-items-center">
                        <StyledNavLink to="/discover">
                            <Nav.Link>Discover</Nav.Link>
                        </StyledNavLink>
                    </Nav>
                    <Nav className="d-sm-flex align-items-center">
                        {uid ? (
                            <>
                                <StyledAvatar src={avatar} roundedCircle />
                                <StyledNavDropdown title={email.substring(0, email.indexOf('@'))} id="basic-nav-dropdown">
                                    <StyledNavLink to="/watchlist">
                                        <NavDropdown.Item>Watchlist</NavDropdown.Item>
                                    </StyledNavLink>
                                    <StyledNavLink to="/settings">
                                        <NavDropdown.Item>Settings</NavDropdown.Item>
                                    </StyledNavLink>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                </StyledNavDropdown>
                            </>
                        ) : (
                            <>
                                <StyledNavLink to="/login" margin="true">
                                    <Nav.Link>Log In</Nav.Link>
                                </StyledNavLink>
                                <StyledNavLink to="/signup" activeStyle={{ backgroundColor: '#FCA311', borderColor: '#FCA311' }} btn="true">
                                    <Button>Sign Up</Button>
                                </StyledNavLink>
                            </> 
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    );
}

export default Navigation;
