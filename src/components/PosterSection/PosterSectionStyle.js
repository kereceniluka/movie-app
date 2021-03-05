import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Row, Col } from 'react-bootstrap';

export const StyledSection = styled.section `
    width: 100%;
    background: ${({ bg }) => bg ? bg : '#fff'};
    padding: 15px 24px;
    
    ${sizes.desktop} {
        padding: 100px 120px;
    }
`;

export const StyledRow = styled(Row) `
    width: 100%;
    flex-wrap: nowrap;
    margin: 0 auto;
    overflow: scroll hidden;

    &::-webkit-scrollbar {
        display: none;
    }

    ${sizes.desktop} {
        overflow: hidden;
    }
`;

export const StyledTitle = styled.span `
    display: none;
    max-width: 80%;

    ${sizes.desktop} {
        display: block;
        font-size: 1.2rem;

        &:hover {
            text-decoration: underline;
            text-decoration-color: #f7d633;
            cursor: pointer;
        }
    }
`;