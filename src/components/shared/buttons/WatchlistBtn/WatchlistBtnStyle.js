import styled from 'styled-components/macro';
import sizes from '../../../../utils/responsive';

export const StyledWatchlistIconWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 35px;
    height: 35px;
    top: 6%;
    right: 2%; 
    transform: translate(-12px, -12px);
    background: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        background: rgba(0, 0, 0, 1);
    }

    ${sizes.tablet} {
        top: 5%;
        right: 5%;
    }

    ${sizes.desktop} {
        top: ${({ poster }) => poster && '8%'};
        right: ${({ poster }) => poster ? '2%' : '4%'};
    }
`;