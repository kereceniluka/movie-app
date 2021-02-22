import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';

export const StyledCtaTitle = styled.h2 `
    font-size: 1.8rem;

    ${sizes.tablet} {
        font-size: 2rem;
    }
`;