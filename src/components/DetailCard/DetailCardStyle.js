import styled from 'styled-components/macro';

export const StyledOverlay = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 96%;
    height: 300px;
    background: linear-gradient(0, #000000 0%, rgba(30, 29, 29, 0) 100%);
    opacity: 0.7;
    border-radius: 8px;
    margin-left: 4px;
    cursor: pointer;
`;