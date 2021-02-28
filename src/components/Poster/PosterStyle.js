import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Card } from 'react-bootstrap';

export const StyledCard = styled(Card) `
    border: none;
    width: 225px;
    max-height: 300px;
    color: #fff;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
`;

export const StyledTitle = styled(Card.Title) `
    font-size: .8rem;
    font-weight: bold;
    text-align: center;
    opacity: 0;
    transition: all .3s ease-in-out;
`;

export const StyledImgOverlay = styled(Card.ImgOverlay) `
    height: 300px;
    padding: 5px;
`;