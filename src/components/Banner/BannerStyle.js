import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Row, Image } from 'react-bootstrap';

export const StyledRow = styled(Row) `
    height: 400px;
    margin-bottom: 135px;
`;

export const StyledTopMovies = styled.h3 `
    width: 225px;
    font-weight: bold;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: -0.3px;
    text-align: left;
`;

export const StyledMovieTitle = styled.h2 `
    font-weight: bold;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.02em;
`;

export const StyledLabel = styled.span `
    font-weight: ${({ bold }) => bold && 'bold'};
    font-size: 20px;
    line-height: 28px;
`;

export const StyledMovieOverview = styled.p `
    max-width: 860px;
    color: #b2b2b2;
    font-size: 20px;
    line-height: 28px;
    margin: 16px 0;
`;

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
    height: 800px;
    object-fit: cover;
    object-position: 50% 0;
`;