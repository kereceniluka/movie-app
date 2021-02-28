import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Image } from 'react-bootstrap';

export const StyledOverlay = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #000000 0%, rgba(30, 29, 29, 0) 100%);
    opacity: 0.7;
    transform: rotate(180deg);
    z-index: 2;
`;

export const StyledImage = styled(Image) `
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 0;

    ${sizes.desktop} {
        height: 600px;
    }
`;