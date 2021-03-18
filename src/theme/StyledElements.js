import styled from 'styled-components/macro';
import sizes from '../utils/responsive';

// bootstrap
import { Button, Row } from 'react-bootstrap';

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

export const StyledLargeTitle = styled.h2 `
    font-weight: bold;
    font-size: 34px; 
    line-height: 42px;
    letter-spacing: -0.6px;
    color: #001217;
    margin-bottom: 27px;
    text-align: center;

    ${sizes.tablet} {
        text-align: left;
    }

    ${sizes.desktop} {
        font-size: 41px;
        line-height: 49px;
        margin-left: -10px;
    }
`;

export const StyledRow = styled(Row) `
    display: flex;
    align-items: center;
    justify-content: center;
`;