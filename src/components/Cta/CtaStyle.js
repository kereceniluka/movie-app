import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';

export const StyledCtaTitle = styled.h2 `
    text-align: center;
    color: #001217;

    ${sizes.desktop} {
        font-size: 41px;
        line-height: 49px;
        font-weight: bold;
        letter-spacing: -0.6px;
    }
`;