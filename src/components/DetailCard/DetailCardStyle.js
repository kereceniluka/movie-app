import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Col, Image } from 'react-bootstrap';

export const StyledCol = styled(Col) `
    width: 223px;
    height: 450px;
    padding: 0;
`;

export const StyledImageWrapper = styled.div `
    width: 223px;
    height: 300px;
    margin-bottom: 16px;
`;

export const StyledOverlay = styled.div `
    width: 223px;
    height: 300px;
    background: linear-gradient(0, #000000 0%, rgba(30, 29, 29, 0) 100%);
    opacity: 0.7;
    border-radius: 8px;
    cursor: pointer;
`;

export const StyledImage = styled(Image) `
    width: 100%;
    max-height: 300px;
    border-radius: 8px;
    object-fit: cover;
`;
 
export const StyledWatchTrailerBtn = styled.span `
    left: 36%;
    bottom: 36%;
    transform: translateX(-26%);
    cursor: pointer;
`;

export const StyledWatchTrailerBtnLabel = styled.span `
    font-weight: bold;
    line-height: 28px;
    padding-left: 10px;
    color: #fff;
`;

export const StyledDescriptionWrapper = styled.div `
    padding: 0;

    ${sizes.tablet} {
        padding: 0 15px;
    }

    ${sizes.desktop} {
        padding: 0 5px;
    }
`;

export const StyledVoteLabel = styled.span `
    color: #001217;
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
    margin-left: 10px;
`;

export const StyledDetailCardTitle = styled.span `
    max-width: 80%;
    font-size: 22px;
    font-weight: bold;
    line-height: 28px;
    letter-spacing: -0.3px;
    color: #001217;
    padding: 0;
`;