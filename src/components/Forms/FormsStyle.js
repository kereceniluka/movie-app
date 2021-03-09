import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const StyledSubmitBtn = styled(Button) `
    background-color: #fca311;
    border-color: #fca311;
    color: #14213D;
    font-weight: bold;

    &:hover {
        background-color: #fca311;
        border-color: #fca311;
    }
`;

export const StyledNavLink = styled(NavLink) `
    color: #fca311;

    &:hover {
        color: #fca311;
    }
`;