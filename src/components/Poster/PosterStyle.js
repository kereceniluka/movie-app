import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Card, Image } from 'react-bootstrap';

export const StyledCard = styled(Card) `
    border: 0;
    width: 225px;
    max-height: 300px;
    color: #fff;
    border-radius: 8px;
    overflow: hidden;
`;

export const StyledImage = styled(Image) `
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
`;

export const StyledImgOverlay = styled(Card.ImgOverlay) `
    height: 300px;
    padding: 5px;
`;