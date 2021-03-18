import styled from 'styled-components/macro';
import { Card, Image } from 'react-bootstrap';

export const StyledCard = styled(Card) `
    border: 0;
    width: 156px;
    background-color: transparent;
`;

export const StyledImage = styled(Image) `
    height: 194px;
    object-fit: cover;
    object-position: top;
    border-radius: 8px;
`;

export const StyledCardBody = styled(Card.Body) `
    color: #001217;
    text-align: center;
    line-height: 28px;
    letter-spacing: -0.3px;
    padding: 0;
`;

export const StyledCardTitle = styled(Card.Title) `
    font-size: 18px;
    font-weight: bold;
    margin: 16px 0 5px 0;
`;