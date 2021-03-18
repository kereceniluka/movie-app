import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Navbar, NavDropdown, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const StyledNavbar = styled(Navbar) `
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
`;

export const StyledNavDropdown = styled(NavDropdown) `
    font-weight: 700;
    color: #14213d;
`;

export const StyledAvatar = styled(Image) `
    width: 40px;
`;

export const StyledNavLink = styled(LinkContainer) `
    font-weight: 700;
    color: #000000;
    background-color: ${({ btn }) => btn && '#FCA311'};
    border-color: ${({ btn }) => btn && '#FCA311'};
    width: ${({ btn }) => btn && '70%'};

    &:hover {
        background-color: ${({ btn }) => btn && '#FCA311'};
        border-color: ${({ btn }) => btn && '#FCA311'};
    }

    ${sizes.tablet} {
        width: ${({ btn }) => btn && '35%'};
    }

    ${sizes.desktop} {
        width: ${({ btn }) => btn && '90px'};
        margin-right: ${({ margin }) => margin && '38px'};
    }
`;