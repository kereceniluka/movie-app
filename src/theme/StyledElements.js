import styled from 'styled-components/macro';

// bootstrap
import { Button } from 'react-bootstrap';

export const StyledTitleDivider = styled.div `
    width: 6rem;
    height: 0.6rem;
    background-color: #f7d633;
    margin: 0 auto;
`;

export const StyledCtaBtn = styled(Button) `
    background-color: #f7d633;
    border-color: #f7d633;
`;

export const AddIcon = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 35px;
    height: 35px;
    top: 8%;
    right: 2%;
    transform: translate(-12px, -12px);
    background: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    cursor: pointer;
`;