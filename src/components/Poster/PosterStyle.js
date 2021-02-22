import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Card } from 'react-bootstrap';

export const StyledCard = styled(Card) `
    border: none;
    width: 100%;
    color: #fff;
`;

export const StyledTitle = styled(Card.Title) `
    font-size: .8rem;
    font-weight: bold;
    text-align: center;
    opacity: 0;
    transition: all .3s ease-in-out;
`;

export const PlayTrailerIcon = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 999;
    transition: all .4s ease-in-out;
`;

export const StyledImgOverlay = styled(Card.ImgOverlay) `

    ${sizes.desktop} {
        padding: .8rem;

        &:hover {
            background: rgba(0, 0, 0, .5);
            cursor: pointer;

            ${StyledTitle},
            ${PlayTrailerIcon} {
                opacity: 1;
            }
        }
    }
`;