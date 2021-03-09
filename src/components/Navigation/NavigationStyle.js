import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { LinkContainer } from 'react-router-bootstrap';

export const StyledNavLink = styled(LinkContainer) `
    font-weight: 700;
    color: #000000;
    background-color: ${({ btn }) => btn && '#FCA311'};
    border-color: ${({ btn }) => btn && '#FCA311'};
    width: ${({ btn }) => btn && '70%'};

    &:hover {
        background-color: ${({ btn }) => btn && '#FCA311'};
        border-color: ${({ btn }) => btn && '#FCA311'};
    }

    ${sizes.tablet} {
        width: ${({ btn }) => btn && '35%'};
    }

    ${sizes.desktop} {
        width: ${({ btn }) => btn && '85px'};
        margin-right: ${({ marginRight }) => marginRight && '38px'};
    }
`;