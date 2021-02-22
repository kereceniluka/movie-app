import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Image, Carousel } from 'react-bootstrap';

export const StyledOverlay = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0, .15);
    z-index: 100;
`;

export const StyledImage = styled(Image) `
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: 50% 0;

    ${sizes.desktop} {
        height: 600px;
    }
`;

export const StyledCaption = styled(Carousel.Caption) `
    text-shadow: 2px 2px #000;
`;