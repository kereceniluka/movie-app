import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export const StyledContainer = styled(Container) `
    margin: 40px 0;
    text-align: center;

    ${sizes.desktop} {
        margin: 100px 0;
    }
`;

export const StyledCtaTitle = styled.h2 `
    line-height: 49px;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -0.6px;
    text-align: center;
    color: #001217;

    ${sizes.desktop} {
        font-size: 41px;
        
    }
`;

export const StyledDescription = styled.p `
    color: #667375;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    margin: 15px 0 32px 0;
`;

export const StyledBtnWrapper = styled(LinkContainer) `
    width: 150px;
    height: 48px;
    background-color: #fca311;
    border-color: #fca311;
    color: #14213d;
    font-weight: 700;
    margin: 0 10px;
`;