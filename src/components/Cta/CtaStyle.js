import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Container } from 'react-bootstrap';


export const StyledContainer = styled(Container) `
    margin: 40px 0;

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